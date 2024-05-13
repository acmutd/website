import { Question, Testimony } from '../lib/types';
import { Director } from './divisions.config';

export const projectDirectors: Array<Director> = [
  {
    name: 'David Tepeneu',
    position: 'Projects Director',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Karina Batra',
    position: 'Projects Director',
    image: '/assets/officer/OfficerImage.png',
  },
];

export const projectsTestimony: Testimony[] = [];

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
    images: [
      '/assets/divisions/shared/research_faq_0.png',
      '/assets/divisions/shared/research_faq_1.png',
    ],
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
      name: 'Abel Thomas',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Abis Naqvi',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Avanthi Reddy',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Clara Conner',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Harper Wood',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Kacie Yee',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Kanchan Javalkar',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Muaaz Abed',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Nadeeba Atiqui',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Ridwan Amin',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Safa Mohammed',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
  ],
];
