import type { Question, Testimony } from '../lib/types';
import type { CarouselImage, Projects } from './divisions.config';

export const researchTestimony: Testimony[] = [
  {
    quote:
      'ACM Research helped me gain research experience and land a paid research position as an undergraduate.',
  },
  { quote: "I got to learn a ton about AI/ML/NLP that your courses won't teach you." },
  {
    quote:
      'ACM Research has been the essential building block to help me become a researcher that I want to be.',
  },
  {
    quote:
      'The community at Research was welcoming and we continue to do the same for every new member. The relationships formed with all the participants and leads definitely stay forever!',
  },
];

export const researchFAQ: Array<Question> = [
  {
    question: 'What are the benefits of joining the research division?',
    answer:
      "By joining, you'll gain hands-on research experience, improve your critical thinking and problem-solving skills, and build a strong foundation for a career in research. Additionally, publishing a paper can significantly enhance your resume and graduate school applications. This provides a great talking point in interviews and networking opportunities",
  },
  {
    question: "What if I'm not sure about a career in research?",
    answer:
      'That\'s perfectly fine! The skills you learn in ACM Research, such as analytical thinking, project management, and academic writing, are valuable in many career paths. This experience will help prepare you for whatever avenue in the technology industry you embark on. Who knows, you might even find a true passion in research!',
  },
  {
    question: 'How long does it typically take to complete a research project and publish a paper?',
    answer:
      'The timeline can vary depending on the complexity of the project and your dedication. On average, it might take a semester to a year to complete a project and prepare it for publication.',
  },
  {
    question: 'What is the time commitment required?',
    answer:
      'The time commitment can vary depending on the research project and your role. On average, members should expect to dedicate a 5-8 hours each week to meetings, research activities, and workshops.',
  },
  {
    question: 'What resources are available to members?',
    answer:
      'Members have access to a wealth of resources, including research databases, software for data analysis, laboratory equipment (if applicable), and a network of faculty advisors and experienced researchers.',
  },
];

export const researchWinners: Projects[] = [
  {
    name: 'Qryptik',
    placement: 'F25 First Place',
    desc: 'Description: Qryptik explores a novel frontier in cybersecurity by developing a next-generation post-quantum encryption (PQE) method designed to withstand attacks from quantum computers while remaining efficient enough to run on low-power devices like smartphones. As quantum computing threatens to break traditional encryption standards such as RSA and AES within days, the need for robust, scalable, and efficient cryptographic systems is more urgent than ever. Participants will explore the intersection of quantum resilience, machine learning, neural networks (CNNs), and cryptographic design, working hands-on with secure key generation, lattice-based systems (RLCE), matrix manipulation, and model compression techniques for low-compute environments.',
    manager: 'Sai Chauhan',
    members: ['Lakshmi Siri Appalaneni', 'Avery Brown', 'Maryam Maalin', 'Sreenivasa Sobhirala'],
    image: '/assets/research/research-symposium-s25-poster.jpg',
    links: [],
  },
  {
    name: 'Adveyes',
    placement: 'F25 Second Place',
    desc: 'Attention Deficit/Hyperactive Disorder (ADHD) is often diagnosed based on observed behavioral outcomes alone. Stemming from a desire for less subjectivity between diagnoses, techniques such as eye-tracking (and saccade-detection/saliency models) have been proven to be able to classify ADHD individuals. However, these techniques often require expensive hardware, which in turn requires the participant to come in person or risk forgoing a diagnosis due to costs. With the CDC declaring an increase of 1 million diagnoses in the past 4 years, resources are at an all time low, while demand is at a high. We propose the application of webcams instead of high end devices to explore the avenue of remote diagnostics and promote accessibility to people without access to such resources.',
    manager: 'Anish Reddy Alle',
    members: ['Zoë Bryant', 'Ayman Mohammad', 'Gabrielle Le', 'Adam Khazem'],
    image: '/assets/research/FingerTip.webp',
    links: [],
  },
    {
    name: 'Helix',
    placement: 'S25 First Place',
    desc: 'Helix set out to predict the biological impact of missense mutations on protein growth by integrating structural bioinformatics with interpretable machine learning. Using the ThermoMutDB dataset of over 13,000 mutations we engineered a rich feature space to capture physiochemical, evolutionary, and 3D structural characteristics. With this dataset we developed a custom voting ensemble that utilized random forests, gradient boosting and SVM classifiers, which outperformed Siamese Neural Networks by 23% in classifying stabilizing vs destabilizing mutations. Our approach generalized well over a diverse set of protein families and also improved the interpretability of a reliable and faster mutation based discovery model.',
    manager: 'Priti See',
    members: ['Cheryl Wang', 'Nathan Han', 'Kaamil Kaka', 'Arya Velayutham', 'Divya Narayan'],
    image: '/assets/research/research-symposium-s25-poster.jpg',
    links: [],
  },
  {
    name: 'NeuroVision',
    placement: 'F24 First Place',
    desc: 'This research project aims to transform the analysis of EEG signals, significantly improving the diagnosis and management of epilepsy, a condition affecting 65 million people worldwide. By leveraging state-of-the-art deep learning techniques, including CNNs and transformers, we will develop models that greatly enhance the accuracy and efficiency of detecting abnormal EEG patterns. Our approach involves utilizing extensive datasets and advanced neural architectures, programmed in Python with PyTorch, to push the boundaries of what\'s possible in neurological care. Through this work, we aspire to set new standards in the field, contributing to better patient outcomes and a deeper understanding of neurological disorders.',
    manager: 'Sahas Sharma',
    members: ['Purva Patel', 'Priti See', 'Aditya Reddy Yanamala', 'Shayaan Zari', 'Rebecca Bender Jutzi'],
    image: '/assets/research/research-symposium-s25-poster.jpg',
    links: [],
  },
  {
    name: 'Fingertip Fluency',
    placement: 'S24 First Place',
    desc: 'The research project achieved its goal of advancing American Sign Language (ASL) fingerspelling and exploring its intricate nuances. With the comprehensive dataset provided by Google, we successfully developed cutting-edge machine learning models, utilizing state-of-the-art, novel architectures. Our innovative approach not only accurately interpreted the dynamic hand movements in ASL and deciphered their meanings but also surpassed the top-performing paper by an impressive 7%. By leveraging advanced models like SignExplainer and PoseNet, we set a new benchmark in the field.',
    manager: 'Oscar Lay',
    members: ['Leon Zhang', 'Sahas Sharma', 'Maunika Achanta', 'Sohan Vidiyala'],
    image: '/assets/research/FingerTip.webp',
    links: [],
  },
];

export const researchCarousel: CarouselImage[] = [
  {
    imageLink: '/assets/research/research-officers-s25.jpg',
    title: 'ACM Research Spring 2025 Team',
    date: new Date(2025, 1, 18),
  },
  {
    imageLink: '/assets/research/research-symposium-s25-130.jpg',
    title: 'Research Directors speaking at symposium night',
    date: new Date(2025, 5, 6),
  },
  {
    imageLink: '/assets/research/research-symposium-s25-winners.jpg',
    title: 'First place winners: Helix',
    date: new Date(2025, 5, 6),
  },
  {
    imageLink: '/assets/research/research-symposium-s25-081.jpg',
    title: 'Second place winners: DRAMa',
    date: new Date(2025, 5, 6),
  },
];
