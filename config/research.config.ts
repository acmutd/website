import type { Question, Testimony } from '../lib/types';
import type { CarouselImage, Director, Projects } from './divisions.config';

export const researchDirectors: Array<Director> = [
  {
    name: 'Oscar Lay',
    position: 'Research Director',
    image: '/assets/officer/OscarLay.jpg',
  },
  {
    name: 'Sahas Sharma',
    position: 'Research Director',
    image: '/assets/officer/SahasSharma.jpg',
  },
];

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
    question: 'What are the benefits of joining the research club?',
    answer:
      "By joining, you'll gain hands-on research experience, improve your critical thinking and problem-solving skills, and build a strong foundation for a career in research. Additionally, publishing a paper can significantly enhance your resume and graduate school applications. This provides a great talking point in interviews and networking opportunities",
  },
  {
    question: "What if I'm not sure about a career in research?",
    answer:
      'That’s perfectly fine! The skills you learn in ACM Research, such as analytical thinking, project management, and academic writing, are valuable in many career paths. This experience will help prepare you for whatever avenue in the technology industry you embark on. Who knows, you might even find a true passion in research!',
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
    question: 'What resources are available to club members?',
    answer:
      'Members have access to a wealth of resources, including research databases, software for data analysis, laboratory equipment (if applicable), and a network of faculty advisors and experienced researchers.',
  },
];

export const researchWinners: Projects[] = [
  {
    name: 'Fingertip Fluency',
    placement: 'Best Research Project Award',
    desc: 'The research project achieved its goal of advancing American Sign Language (ASL) fingerspelling and exploring its intricate nuances. With the comprehensive dataset provided by Google, we successfully developed cutting-edge machine learning models, utilizing state-of-the-art, novel architectures. Our innovative approach not only accurately interpreted the dynamic hand movements in ASL and deciphered their meanings but also surpassed the top-performing paper by an impressive 7%. By leveraging advanced models like SignExplainer and PoseNet, we set a new benchmark in the field.',
    manager: 'Oscar Lay',
    members: ['Leon Zhang', 'Sahas Sharma', 'Maunika Achanta', 'Sohan Vidiyala'],
    image: '/assets/research/FingerTip.png',
    links: [],
  },
];

export const researchOfficers = [
  ...researchDirectors,
  {
    name: 'Vaishnavi Pasumarthi',
    position: 'Research Lead',
    image: '/assets/officer/VaishnaviPasumarthi.jpg',
  },
  { name: 'Priti See', position: 'Research Lead', image: '/assets/officer/PritiSee.jpg' },
  { name: 'Purva Patel', position: 'Research Lead', image: '/assets/officer/PurvaPatel.jpg' },
  {
    name: 'Sanskriti Aripineni',
    position: 'Research Lead',
    image: '/assets/officer/SanskritiAripineni.jpg',
  },
  {
    name: 'Anish Reddy Alle',
    position: 'Research Lead',
    image: '/assets/officer/AnishAlle.jpg',
  },
  {
    name: 'Jagadeep Kalluri',
    position: 'Research Lead',
    image: '/assets/officer/JagadeepKalluri.jpg',
  },
  {
    name: 'Arjun Krishnan',
    position: 'Research Lead',
    image: '/assets/officer/ArjunKrishnan.jpg',
  },
  {
    name: 'Aastha Sharma',
    position: 'Research Lead',
    image: '/assets/officer/AasthaSharma.jpg',
  },
  {
    name: 'Tanmay Kulkarni',
    position: 'Research Lead',
    image: '/assets/officer/TanmayKulkarni.jpg',
  },
];

export const researchCarousel: CarouselImage[] = [
  {
    imageLink: '/assets/research/research-1.png',
    title: 'ACM Research Fall 2024 Team',
    date: new Date(2024, 7, 18),
  },
  {
    imageLink: '/assets/research/research-2.JPG',
    title: 'Introduction of judges for the Spring 2024 symposium..',
    date: new Date(2024, 4, 3),
  },
  {
    imageLink: '/assets/research/research-3.png',
    title: 'Directors of ACM Research Fall 2024.',
    date: new Date(2024, 7, 18),
  },
  {
    imageLink: '/assets/research/research-4.JPG',
    title: 'Members of the DriverWatch team proudly presenting their poster, Spring 2024.',
    date: new Date(2024, 4, 3),
  },
  {
    imageLink: '/assets/research/research-5.JPG',
    title: 'A typical build night at the Blackstone Launchpad.',
    date: new Date(2023, 7, 25),
  },
  {
    imageLink: '/assets/research/research-6.png',
    title: 'Research Leads Hanging Out',
    date: new Date(2024, 7, 18),
  },
  {
    imageLink: '/assets/research/research-7.JPG',
    title: 'Judging of research project during the Spring 2024 symposium.',
    date: new Date(2024, 4, 3),
  },
  {
    imageLink: '/assets/research/research-8.JPG',
    title: 'Team Auditory Unveil during a Fall 2023 build night.',
    date: new Date(2023, 7, 25),
  },
  {
    imageLink: '/assets/research/research-9.png',
    title: 'The Team In The Trees',
    date: new Date(2024, 7, 18),
  },
];
