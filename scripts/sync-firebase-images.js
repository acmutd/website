const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const firebaseConfigPath = process.env.FIREBASE_CONFIG_PATH || 'firebase-creds.json';
const dryRun = process.env.DRY_RUN === 'true';
const outputDir = path.join(process.cwd(), 'public', 'assets', 'officer');
const officersExportPath = path.join(
  process.cwd(),
  'config',
  'officers.config.ts'
);

const layoutDivisions = [
  'advisor',
  'executive',
  'media',
  'research',
  'development',
  'projects',
  'education',
  'community',
  'hackutd',
  'industry',
  'finance',
  'board',
];

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

function toTitleCase(value) {
  return value
    .split(/[_\s-]+/)
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function normalizeDivision(division) {
  if (typeof division !== 'string') {
    return null;
  }

  const value = division.trim().toLowerCase();
  const divisionAliasMap = {
    board: 'executive',
    executive: 'executive',
    hack: 'hackutd',
    'hack utd': 'hackutd',
    'hackutd': 'hackutd',
    project: 'projects',
    finance: 'industry',
    communityoutreach: 'community',
    communitycampus: 'community',
  };

  return divisionAliasMap[value] || value;
}

function getDivisionVarName(division) {
  if (division === 'hackutd') {
    return 'hackOfficers';
  }

  return `${division}Officers`;
}

function escapeSingleQuotes(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function extractRolesFromOfficer(officerData) {
  const roles = [];

  if (!Array.isArray(officerData?.roles)) {
    return roles;
  }

  for (const role of officerData.roles) {
    if (typeof role !== 'object' || role === null) {
      continue;
    }

    const division = normalizeDivision(role.division);
    if (!division) {
      continue;
    }

    const title = typeof role.title === 'string' ? role.title.trim() : '';
    const level = typeof role.level === 'number' ? role.level : 0;

    if (title) {
      roles.push({ division, title, level });
    }
  }

  return roles;
}

function getBoardEligibleRole(roles) {
  const boardRoles = roles.filter((role) => role.level >= 2);
  if (boardRoles.length === 0) {
    return null;
  }

  return boardRoles.reduce((best, current) =>
    current.level > best.level ? current : best
  );
}

function getOfficerUidFromData(data) {
  const uidCandidates = [data?.uid, data?.id, data?.userId];

  for (const uid of uidCandidates) {
    if (typeof uid === 'string' && uid.trim() !== '') {
      return uid;
    }
  }

  return null;
}

function looksLikeOfficerRecord(record) {
  return (
    record &&
    typeof record === 'object' &&
    !Array.isArray(record) &&
    typeof record.firstName === 'string' &&
    typeof record.lastName === 'string'
  );
}

function extractOfficerEntries(snapshot) {
  const entries = [];

  for (const doc of snapshot.docs) {
    const data = doc.data();

    if (looksLikeOfficerRecord(data)) {
      entries.push({
        uid: doc.id,
        data,
        forcedDivision: null,
      });
    }

    for (const [fieldKey, fieldValue] of Object.entries(data)) {
      if (!Array.isArray(fieldValue)) {
        continue;
      }

      const division = normalizeDivision(fieldKey);
      if (!division) {
        continue;
      }

      for (let index = 0; index < fieldValue.length; index += 1) {
        const officerRecord = fieldValue[index];
        if (!looksLikeOfficerRecord(officerRecord)) {
          continue;
        }

        const embeddedUid = getOfficerUidFromData(officerRecord);
        const syntheticUid = `${doc.id}:${division}:${index}`;

        entries.push({
          uid: embeddedUid || syntheticUid,
          data: officerRecord,
          forcedDivision: division,
        });
      }
    }
  }

  return entries;
}

function getSocialLinks(data) {
  if (
    data?.socialLinks &&
    typeof data.socialLinks === 'object' &&
    !Array.isArray(data.socialLinks)
  ) {
    const socialLinks = {};

    for (const [key, value] of Object.entries(data.socialLinks)) {
      if (typeof value === 'string' && value.trim() !== '') {
        socialLinks[key] = value;
      }
    }

    return socialLinks;
  }

  const fallbackSocialLinks = {};
  const keys = [
    'github',
    'linkedin',
    'instagram',
    'email',
  ];

  for (const key of keys) {
    if (typeof data?.[key] === 'string' && data[key].trim() !== '') {
      fallbackSocialLinks[key] = data[key];
    }
  }

  return fallbackSocialLinks;
}

function getPositionForDivision(data, division) {
  const maps = [data?.positions, data?.positionByDivision, data?.roles, data?.roleByDivision];

  for (const mapCandidate of maps) {
    if (
      mapCandidate &&
      typeof mapCandidate === 'object' &&
      !Array.isArray(mapCandidate)
    ) {
      const directMatch = mapCandidate[division];
      if (typeof directMatch === 'string' && directMatch.trim() !== '') {
        return directMatch;
      }

      const altMatch = Object.entries(mapCandidate).find(
        ([key, value]) => normalizeDivision(key) === division && typeof value === 'string' && value.trim() !== ''
      );

      if (altMatch) {
        return altMatch[1];
      }
    }
  }

  if (typeof data?.position === 'string' && data.position.trim() !== '') {
    return data.position;
  }

  if (typeof data?.title === 'string' && data.title.trim() !== '') {
    return data.title;
  }

  if (typeof data?.role === 'string' && data.role.trim() !== '') {
    return data.role;
  }

  const divisionTitle = toTitleCase(division);
  return division === 'executive' ? 'Executive Officer' : `${divisionTitle} Officer`;
}

function getOfficerNameFromData(data) {
  const firstName = data?.firstName;
  const lastName = data?.lastName;

  if (!firstName || !lastName) {
    return null;
  }

  return `${firstName} ${lastName}`;
}

function getOfficerSlugFromData(data) {
  const firstName = data?.firstName;
  const lastName = data?.lastName;

  if (!firstName || !lastName) {
    return null;
  }

  return `${firstName}-${lastName}`;
}

function getImagePathForEntry(entry, imagePathByUid) {
  if (imagePathByUid[entry.uid]) {
    return imagePathByUid[entry.uid];
  }

  const firstName = entry.data?.firstName;
  const lastName = entry.data?.lastName;
  const photoUrl = entry.data?.photo?.url;

  if (
    typeof firstName === 'string' &&
    firstName.trim() !== '' &&
    typeof lastName === 'string' &&
    lastName.trim() !== ''
  ) {
    let extension = '.jpg';

    if (typeof photoUrl === 'string' && photoUrl.trim() !== '') {
      const withoutQuery = photoUrl.split('?')[0];
      const parsedExtension = path.extname(withoutQuery);
      if (parsedExtension) {
        extension = parsedExtension;
      }
    }

    const normalizedFirstName = firstName.trim().replace(/\s+/g, '_');
    const normalizedLastName = lastName.trim().replace(/\s+/g, '_');
    return `/assets/officer/${normalizedFirstName}_${normalizedLastName}${extension}`;
  }

  return '/assets/officer/OfficerImage.png';
}

function buildOfficerConfigSource(divisionsMap) {
  const source = [];
  source.push('export type Officer = {');
  source.push('  name: string;');
  source.push('  position: string;');
  source.push('  image: string;');
  source.push('  level?: number;');
  source.push('  socialLinks?: Record<string, string>;');
  source.push('};');
  source.push('');

  for (const division of layoutDivisions) {
    const varName = getDivisionVarName(division);
    const officers = divisionsMap[division] || [];

    source.push(`export const ${varName}: Officer[] = [`);

    for (const officer of officers) {
      source.push('  {');
      source.push(`    image: '${escapeSingleQuotes(officer.image)}',`);
      source.push(`    name: '${escapeSingleQuotes(officer.name)}',`);
      source.push(`    position: '${escapeSingleQuotes(officer.position)}',`);

      if (typeof officer.level === 'number') {
        source.push(`    level: ${officer.level},`);
      }

      if (officer.socialLinks && Object.keys(officer.socialLinks).length > 0) {
        source.push('    socialLinks: {');
        for (const [key, value] of Object.entries(officer.socialLinks)) {
          source.push(`      '${escapeSingleQuotes(key)}': '${escapeSingleQuotes(value)}',`);
        }
        source.push('    },');
      }

      source.push('  },');
    }

    source.push('];');
    source.push('');
  }

  source.push('type Divisions =');
  for (const division of layoutDivisions) {
    source.push(`  | '${division}'`);
  }
  source.push(';');
  source.push('');
  source.push('export const divisionOfficerMap: Record<Divisions, Officer[]> = {');

  for (const division of layoutDivisions) {
    source.push(`  ${division}: ${getDivisionVarName(division)},`);
  }

  source.push('};');
  source.push('');
  return source.join('\n');
}

async function exportOfficersByDivision(officerEntries, imagePathByUid) {
  const officersByDivision = {};

  for (const division of layoutDivisions) {
    officersByDivision[division] = [];
  }

  for (const entry of officerEntries) {
    const uid = entry.uid;
    const data = entry.data;
    const officerName = getOfficerNameFromData(data);
    if (!officerName) {
      console.warn(`⚠️  Skipping officer ${uid} due to missing firstName/lastName`);
      continue;
    }

    const roles = extractRolesFromOfficer(data);

    if (roles.length === 0) {
      console.warn(`⚠️  Officer ${uid} has no roles with valid divisions`);
      continue;
    }

    for (const role of roles) {
      const division = role.division;
      if (!officersByDivision[division]) {
        continue;
      }

      officersByDivision[division].push({
        image: getImagePathForEntry(entry, imagePathByUid),
        name: officerName,
        position: role.title,
        level: role.level,
        socialLinks: getSocialLinks(data),
      });
    }
  }

  // Populate board with officers who have level 2-3 roles
  for (const entry of officerEntries) {
    const data = entry.data;
    const officerName = getOfficerNameFromData(data);
    if (!officerName) {
      continue;
    }

    const roles = extractRolesFromOfficer(data);
    const boardRole = getBoardEligibleRole(roles);

    if (boardRole) {
      officersByDivision.board.push({
        image: getImagePathForEntry(entry, imagePathByUid),
        name: officerName,
        position: boardRole.title,
        level: boardRole.level,
        socialLinks: getSocialLinks(data),
      });
    }
  }

  for (const division of layoutDivisions) {
    officersByDivision[division].sort((a, b) => a.name.localeCompare(b.name));
  }

  const source = buildOfficerConfigSource(officersByDivision);

  if (dryRun) {
    console.log(
      `[DRY RUN] Would write officer export to ${officersExportPath} with ${officerEntries.length} officers`
    );
    return;
  }

  fs.writeFileSync(officersExportPath, source);
  console.log(`✓ Exported officers to TypeScript config: ${officersExportPath}`);
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
    console.log(`Officers export path: ${officersExportPath}`);
    console.log(`Dry run mode: ${dryRun}`);

    const db = admin.firestore();
    const officerSnapshot = await db.collection('officer').get();
    const officerEntries = extractOfficerEntries(officerSnapshot);
    const officerDataByUid = {};

    for (const entry of officerEntries) {
      if (!officerDataByUid[entry.uid] && looksLikeOfficerRecord(entry.data)) {
        officerDataByUid[entry.uid] = entry.data;
      }
    }

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
      console.log('Exporting officers by division from Firestore...');
      await exportOfficersByDivision(officerEntries, {});
      process.exit(0);
    }

    console.log(`Found ${files.length} files in Firebase Storage`);
    const imagePathByUid = {};

    // Download each file
    for (const file of files) {
      const fileName = path.basename(file.name);

      // Skip if it's a folder
      if (fileName === '') continue;

      // Extract UID from filename (remove extension)
      const fileExtension = path.extname(fileName);
      const uid = path.basename(fileName, fileExtension);

      const officerData = officerDataByUid[uid];
      const officerSlug = officerData ? getOfficerSlugFromData(officerData) : null;
      const officerName = officerSlug;
      const renamedFile = officerName
        ? `${officerName}${fileExtension}`
        : fileName;

      const localPath = path.join(outputDir, renamedFile);
      imagePathByUid[uid] = `/assets/officer/${renamedFile}`;

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

    console.log('Exporting officers by division from Firestore...');
    await exportOfficersByDivision(officerEntries, imagePathByUid);

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
