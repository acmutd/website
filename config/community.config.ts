import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

type SubDivision = 'campus' | 'outreach';

export const communityDirectors: Director[] = [
  {
    image: '/assets/officer/ShannonCarter.jpg',
    name: 'Shannon Carter',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/MercedesXiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Co-Director of Community',
  },
]

export const communityOfficers: Officer[] = [
  {
    image: '/assets/officer/ShannonCarter.jpg',
    name: 'Shannon Carter',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/MercedesXiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/BradleyMixon.JPG',
    name: 'Bradley Mixon',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/LoganDane.jpg',
    name: 'Logan Dane',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AnshNaikele.jpg',
    name: 'Ansh Naikele',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/NidhiMajoju.jpg',
    name: 'Nidhi Majoju',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AdvayChandramouli.jpg',
    name: 'Advay Chandramouli',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AliGhorbani.jpg',
    name: 'Ali Ghorbani',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/VyshnavVijish.jpg',
    name: 'Vyshnav Vijish',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AnthonyAbubakar.jpg',
    name: 'Anthony Abubakar',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/VivianNguyen.jpg',
    name: 'Vivian Nguyen',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/AnushaPatel.jpg',
    name: 'Anusha Patel',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/ShriyaKalyan.jpg',
    name: 'Shriya Kalyan',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/AyomideTapere.jpg',
    name: 'Ayomide Tapere',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/SuhaniRana.jpg',
    name: 'Suhani Rana',
    position: 'Events Officer',
  },
];

export const communityImages: {
  campus: CarouselImage[];
  outreach: CarouselImage[];
} = {
  campus: [
    {
      date: new Date(2025, 0, 2),
      imageLink: '/assets/community/campus/group_photo.JPG',
      title: 'ACM Campus Officers'
    },
    {
      imageLink: '/assets/community/campus/twilight_tunes.jpg',
      title: 'Twilight Tunes',
      date: new Date(2025, 10, 5),
    },
    {
      imageLink: '/assets/community/campus/notes_and_floats.png',
      title: 'Notes and Floats',
      date: new Date(2025, 1, 11),
    },
  ],
  outreach: [
    {
      imageLink: '/assets/community/outreach/nths_hack.JPG',
      title: 'NTHS Hack 2025',
      date: new Date(2025, 1, 11),
    },
    {
      imageLink: '/assets/community/outreach/mark_cuban_bootcamp.jpg',
      title: 'Mark Cuban Foundation AI Bootcamp',
      date: new Date(2025, 10, 5),
    },
    {
      date: new Date(2025, 0, 2),
      imageLink: '/assets/community/outreach/officers_photo.JPG',
      title: 'ACM Outreach Officers'
    },
  ]
}

export const communityTestimony: Record<SubDivision, Array<Testimony>> = {
  campus: [
    {
      quote: 'Being a part of the Campus team has been such an exciting adventure. There\'s nothing more fulfilling than the ability to see the tangible impacts created as a result of your efforts.',
      name: 'Ayomide Tapere',
    },
    {
      quote: 'Not only have I gotten the chance to meet so many wonderful people, but I\'ve also gotten the opportunity to see all of our efforts have a positive impact on our community.',
      name: '',
    },
    {
      quote: 'My favorite thing about Campus is that we get to help bring our organization and community together in a fun and exciting way that\'s taught me so much about working on a team.',
      name: '',
    }
  ],
  outreach: [
    {
      quote: 'I loved being able to give back to the communities that have supported me through my early education. Outreach ACM has given me the opportunity to showcase my leadership, collaborate with passionate students at UTD, and make a direct impact on communities. My favorite part of outreach is planning the high school hackathon and making it a great event for students!',
      name: 'Nidhi Majoju',
    },
    {
      quote: 'Outreach has allowed me to network and engage with the STEM community around me! It\'s let me empower myself and strengthen my technical knowledge by giving back.',
      name: 'Jerry Martinez',
    },
    {
      quote: 'My experience with ACM Outreach has been about giving back  helping K–12 students explore the world of computing and realize that innovation starts with curiosity. As part of this journey, I helped organize NTHS Hack, Texas\'s only K–12 hackathon, to inspire young minds to build, create, and dream through technology.',
      name: 'Shreya Singaravel',
    }
  ],
}

export const communityFAQ: Record<SubDivision, Question[]> = {
  campus: [
    {
      question: 'What is the application process like?',
      answer: 'The first step is to apply! Applications will include a series of questions to get to know you a little bit more and give us some insight about what you\'d like to bring to ACM Campus! After these applications, we\'ll select a few candidates to interview before deciding _____. But remember! Events and Archives applications open at different times so make sure to apply to the team you\'d like to be on!',
    },
    {
      question: 'How is ACM Campus structured?',
      answer: 'ACM Campus is made of two teams: Events and Archives. Events handles all of the social events like Twilight Tunes and Peechi Games while Archives is a team of designers and writers, in charge of creating a magazine every semester that covers all of the behind the scenes of ACM for alumni and sponsors.',
    },
    {
      question: 'Do I need to have prior experience in event planning to join ACM Campus?',
      answer: 'Nope! What we\'re really looking for are students who are passionate about building community and bringing people together. We\'ll teach you everything you need to know about event planning along the way!',
    },
    {
      question: 'What are some events that the Campus team has hosted in the past?',
      answer: 'Some events that the Campus team has hosted in the past include Peechi Games, Sugar Rush, Byte the Dust, and more! Each event is designed to bring the ACM community together in a fun and engaging way. We\'re always open to new ideas, so if you have a vision for an event, we\'d love to hear it!',
    }
  ],
  outreach: [
    {
      question: 'What is ACM Community Outreach?',
      answer: 'ACM Outreach is a subdivision of ACM community focused on reaching out to the local community around UTD by providing computer science focused learning materials and opportunities to K-12 students. To do this we offer workshops as well as our own High school level hackathon to K-12 students who are interested in pursuing computer science.'
    },
    {
      question: 'How can I get involved with ACM Outreach?',
      answer: 'Outreach offers current computer science students at UTD the opportunity to volunteer with us and mentor K-12 students in computer science through various opportunities such as the Mark Cuban Foundation\'s AI bootcamp as well as the North Texas High School Hackathon.'
    },
    {
      question: 'What is the North Texas High School Hackathon?',
      answer: 'The North Texas High School Hackathon (or NTHS Hack for short) is a hackathon specifically catered to high school students who are interested in participating in a hackathon ahead of their college careers, featuring opportunities to gain experience, build their portfolio, and talk to professional companies all while having fun! In the past we\'ve had over 100 participants and we\'re aiming even higher this upcoming year!',
    },
    {
      question: 'How can I become more involved in Outreach?',
      answer: 'Keep an eye out for our announcements on the ACM discord and our personal instagram page for any volunteering opportunities and chances to mentor the next generation of computer science students!'
    }
  ]
};