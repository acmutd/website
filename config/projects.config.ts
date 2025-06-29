import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director, Projects } from './divisions.config';

export const projectDirectors: Array<Director> = [
  {
    name: 'Abis Naqvi',
    position: 'Projects Director',
    image: '/assets/officer/AbisNaqvi.JPG',
  },
  {
    name: 'Kanchan Javalkar',
    position: 'Projects Director',
    image: '/assets/officer/KanchanJavalkar.jpg',
  },
];

export const projectsTestimony: Testimony[] = [
  { quote: 'It helped me land my first internship!' },
  { quote: 'I was able to join a community!' },
  { quote: 'I made lots of friends and networked with industry professionals' },
  { quote: 'An invaluable/great/wonderful program to gain real world experience' },
];

export const projectsFAQ: Array<Question> = [
  {
    question: 'What is the application process like?',
    answer:
      'The first step is to fill out our application. Our application consists of general questions intended to give us insight into your previous development and leadership experience. From these applications, we select the most promising candidates for one-on-one interviews. The interview is the last step of the application process. Based on the application and interview, we select the very best candidates to create around 8 teams of 5 people.',
  },
  {
    question: 'How do I stand out during the application process?',
    answer:
      'Be genuine! We want to see your passion for technology and desire to learn. We can only judge your experience and character based on what we see in the application, so fill all of the questions out! Leaving questions blank is a lost opportunity for us to learn more about you.',
  },
  {
    question: 'Do I need to have prior development experience?',
    answer:
      "ACM Projects is designed for those new to software development. Although some experience is great, we're looking for passionate and committed candidates who have a desire to learn and grow in software development",
  },
  {
    question: 'How is ACM Projects structured?',
    answer:
      'You will be placed into a team of five students with a project and a mentor. We will have weekly (and mandatory) build nights every Wednesday from 8:30 pm - 10:00 pm. This is time for you to work with your team, meet with your mentor and learn. Some build nights may include a short tech-related workshop designed to diversify your tech skills.',
  },
  {
    question: 'What is the time commitment?',
    answer:
      "The minimum time commitment is the 1.5 hours required for each weekly build night. Beyond this, you and your team may need extra time to complete your project so it's up to you to schedule the time amongst yourselves.",
  },
];

export const projectsOfficers = [
  ...projectDirectors,
  ...[
    {
      name: 'Nadeeba Atiqui',
      position: 'Project Manager',
      image: '/assets/officer/NadeebaAtiqui.JPG',
    },
    {
      name: 'Abel Thomas',
      position: 'Project Manager',
      image: '/assets/officer/AbelThomas.JPG',
    },
    {
      name: 'Avanthi Reddy',
      position: 'Project Manager',
      image: '/assets/officer/AvanthiReddy.JPG',
    },
    {
      name: 'Shraddha Subash',
      position: 'Project Manager',
      image: '/assets/officer/ShraddhaSubash.jpg',
    },
    {
      name: 'Lerich Osay',
      position: 'Project Manager',
      image: '/assets/officer/LerichOsay.JPG',
    },
    {
      name: 'Ethan Varghese',
      position: 'Project Manager',
      image: '/assets/officer/EthanVarghese.jpg',
    },
    {
      name: 'Shreya Ramani',
      position: 'Project Manager',
      image: '/assets/officer/ShreyaRamani.JPG',
    },
    {
      name: 'Jason Luu',
      position: 'Project Manager',
      image: '/assets/officer/JasonLuu.JPG',
    },
    {
      name: 'Noel Emmanuel',
      position: 'Project Manager',
      image: '/assets/officer/NoelEmmanuel.JPG',
    },
    {
      name: 'Adarsh Goura',
      position: 'Project Manager',
      image: '/assets/officer/AdarshGoura.jpeg',
    },
    {
      name: 'Tamanna Khurana',
      position: 'Project Manager',
      image: '/assets/officer/TammyKhurana.png',
    },
    {
      name: 'Karina Batra',
      position: 'Projects Advisor',
      image: '/assets/officer/KarinaBatra.jpeg',
    },
  ],
];

export const projectImages: CarouselImage[] = [
  {
    imageLink: '/assets/projects/projects_1.JPG',
    title: 'Projects Build Night in action',
    date: new Date(2025, 4, 30),
  },
  {
    imageLink: '/assets/projects/presentationnight-s25.jpg',
    title: 'Projects Presentation Night',
    date: new Date(2025, 4, 30),
  },
  {
    imageLink: '/assets/projects/presentationnight-s25-240.jpg',
    title: 'Projects second place winners: CometClaim',
    date: new Date(2025, 4, 30),
  },
  {
    imageLink: '/assets/projects/presentationnight-s25-winners.jpg',
    title: 'Projects first place winners: HackLab',
    date: new Date(2025, 4, 30),
  },
];

export const projectsWinners: Projects[] = [
  {
    name: 'SAGE',
    desc: 'Have you ever asked your advisor a question only to wait weeks for a response? Many times, advisors get flooded with questions that have simple answers or problems that are easy to resolve. SAGE is an advisor chatbot that can answer your questions quickly and efficiently, so you don’t have to worry about it. On top of this, SAGE can view your profile to help you make decisions about future classes and even generate personalized degree plans. Take the stress out of the logistics and just ask SAGE for help with your inquiries and classes!',
    image: '/assets/projects/SAGE.jpg',
    links: [
      { type: 'github', link: 'https://github.com/acm-projects/Sage' },
      { type: 'video', link: 'https://www.youtube.com/live/QEibawPAbCc?feature=shared&t=3570' },
    ],
    members: ['Ethan Varghese', 'Shraddha Subash', 'Ram Gudur', 'Maruthi Eranki'],
    manager: 'Abis Naqvi',
    placement: 'S24 1st Place',
  },
  {
    name: 'RPG',
    desc: 'RPG is a game with endless maps to explore and enemies to slice through. Through procedural generation, no map will look the same as you explore and find the final boss room. Although the backstory and setting of the game will be decided by the participants, it will be a 2D Top Down RPG hack and slash roguelike.',
    image: '/assets/projects/RPG.jpg',
    members: ['Aendri Singh', 'Faizaan Siddiqui', 'Jose Garcia', 'Lana Barakat'],
    manager: 'Kacie Yee',
    links: [
      { type: 'github', link: 'https://github.com/acm-projects/RPG' },
      { type: 'video', link: 'https://www.youtube.com/live/QEibawPAbCc?feature=shared&t=3070' },
    ],
    placement: 'S24 2nd Place',
  },
  {
    name: 'ShareSched',
    desc: 'Have you ever wanted to compare schedules with a friend but found it too tedious to compare every little time, professor, and location? ShareSched is an app that allows you to upload a picture of a schedule and extract the key details from it. ShareSched can also find similarities in your schedule and your friend’s whether it’s location, professor, class section, or more! ScareSched is the app you need when schedule planning time comes up.',
    image: '/assets/divisions/shared/proj_image.png',
    members: ['Noel Emmanuel', 'Nadeeba Atiqui', 'Aldrin Roshan', 'Aizan Kalam'],
    manager: 'Karina Batra',
    links: [
      { type: 'github', link: 'https://github.com/acm-projects/ShareSched' },
      { type: 'video', link: 'https://www.youtube.com/live/Ltv7Q3NVoFE?feature=shared&t=4162' },
    ],
    placement: 'F23 1st Place',
  },
];
