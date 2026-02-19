const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const firebaseConfigPath = process.env.FIREBASE_CONFIG_PATH || 'firebase-creds.json';
const dryRun = process.env.DRY_RUN === 'true';
const outputDir = path.join(process.cwd(), 'public', 'assets', 'officer');

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(
  fs.readFileSync(firebaseConfigPath, 'utf8')
);

// Determine storage bucket
let storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
if (!storageBucket) {
  // Try common Firebase Storage bucket naming patterns
  const projectId = serviceAccount.project_id;
  // Newer Firebase projects use .firebasestorage.app
  storageBucket = `${projectId}.firebasestorage.app`;
  console.log(`ℹ️  No FIREBASE_STORAGE_BUCKET specified, trying: ${storageBucket}`);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: storageBucket,
});

const bucket = admin.storage().bucket();

async function getOfficerName(uid) {
  try {
    const db = admin.firestore();
    const doc = await db.collection('officer').doc(uid).get();

    if (!doc.exists) {
      console.warn(`⚠️  Officer document not found for UID: ${uid}`);
      return null;
    }

    const data = doc.data();
    const firstName = data?.firstName;
    const lastName = data?.lastName;

    if (!firstName || !lastName) {
      console.warn(`⚠️  Missing firstName or lastName for UID: ${uid}`);
      return null;
    }

    return `${firstName}-${lastName}`;
  } catch (error) {
    console.error(`Error fetching officer data for UID ${uid}:`, error);
    return null;
  }
}

async function clearOutputDirectory() {
  if (!fs.existsSync(outputDir)) {
    return;
  }

  const files = fs.readdirSync(outputDir);

  for (const file of files) {
    const filePath = path.join(outputDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Deleted: ${file}`);
    }
  }
}

async function downloadImages() {
  try {
    console.log('Starting Firebase image sync...');
    console.log(`Output directory: ${outputDir}`);
    console.log(`Dry run mode: ${dryRun}`);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Clear existing files in output directory
    if (!dryRun) {
      console.log('Clearing existing officer images...');
      clearOutputDirectory();
    } else {
      console.log('[DRY RUN] Would clear all files from officer directory');
    }

    // List all files in the Firebase storage 'officers' folder
    const [files] = await bucket.getFiles({
      prefix: 'officers/', // Assumes images are stored under 'officers/' prefix
    });

    if (files.length === 0) {
      console.log('No files found in Firebase Storage under officers/ prefix');
      process.exit(0);
    }

    console.log(`Found ${files.length} files in Firebase Storage`);

    // Download each file
    for (const file of files) {
      const fileName = path.basename(file.name);

      // Skip if it's a folder
      if (fileName === '') continue;

      // Extract UID from filename (remove extension)
      const fileExtension = path.extname(fileName);
      const uid = path.basename(fileName, fileExtension);

      // Get officer name from Firestore
      const officerName = await getOfficerName(uid);
      const renamedFile = officerName
        ? `${officerName}${fileExtension}`
        : fileName;

      const localPath = path.join(outputDir, renamedFile);

      console.log(`Downloading: ${file.name} -> ${localPath}`);

      if (!dryRun) {
        await bucket.file(file.name).download({
          destination: localPath,
        });
        console.log(`✓ Downloaded: ${renamedFile}`);
      } else {
        console.log(`[DRY RUN] Would download: ${file.name} as ${renamedFile}`);
      }
    }

    console.log('✅ Sync completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error during sync:', error);

    // Provide helpful guidance for common errors
    if (error.code === 404 && error.message?.includes('bucket does not exist')) {
      console.error('\n⚠️  BUCKET NOT FOUND\n');
      console.error('The Firebase Storage bucket could not be found.');
      console.error(`Attempted bucket: ${storageBucket}\n`);
      console.error('Common Firebase Storage bucket formats:');
      console.error(`  - {project-id}.firebasestorage.app (newer projects)`);
      console.error(`  - {project-id}.appspot.com (older projects)`);
      console.error(`  - Custom bucket name\n`);
      console.error('To fix this:');
      console.error('1. Check your Firebase Console -> Storage to find the correct bucket name');
      console.error('2. Set the FIREBASE_STORAGE_BUCKET environment variable or GitHub secret');
      console.error('3. Or pass it as a workflow input when manually triggering the action\n');
    }

    process.exit(1);
  }
}

downloadImages();
