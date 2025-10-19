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
      imageLink: '/assets/community/outreach/group_photo.jpg',
      title: 'Outreach (temp)',
      date: new Date(2025, 1, 11),
    },
  ]
}

export const communityTestimony: Record<SubDivision, Array<Testimony>> = {
  campus: [
    {
      quote: 'Being a part of the Campus team has been such an exciting adventure. There’s nothing more fulfilling than the ability to see the tangible impacts created as a result of your efforts.',
      name: 'Ayomide Tapere',
    },
    {
      quote: 'Not only have I gotten the chance to meet so many wonderful people, but I’ve also gotten the opportunity to see all of our efforts have a positive impact on our community.',
      name: '',
    },
    {
      quote: 'My favorite thing about Campus is that we get to help bring our organization and community together in a fun and exciting way that’s taught me so much about working on a team.',
      name: '',
    }
  ],
  outreach: [
    {
      quote: 'ACM Outreach is very cool!',
      name: 'Jeydin Pham',
    }
  ],
}

export const communityFAQ: Record<SubDivision, Question[]> = {
  campus: [
    {
      question: 'What is the application process like?',
      answer: 'The first step is to apply! Applications will include a series of questions to get to know you a little bit more and give us some insight about what you’d like to bring to ACM Campus! After these applications, we’ll select a few candidates to interview before deciding _____. But remember! Events and Archives applications open at different times so make sure to apply to the team you’d like to be on!',
    },
    {
      question: 'How is ACM Campus structured?',
      answer: 'ACM Campus is made of two teams: Events and Archives. Events handles all of the social events like Twilight Tunes and Peechi Games while Archives is a team of designers and writers, in charge of creating a magazine every semester that covers all of the behind the scenes of ACM for alumni and sponsors.',
    },
    {
      question: 'Do I need to have prior experience in event planning to join ACM Events?',
      answer: 'Nope! What we’re really looking for are students',
    },
    {
      question: 'What are some events that the Events team has hosted in the past?',
      answer: 'We get to',
    }
  ],
  outreach: [
    {
      question: 'What is ACM Community Outreach?',
      answer: 'ACM Community Outreach is a division of ACM that focuses on increasing STEM engagement in K-12 students, particularly in underserved schools. We organize various outreach events and programs to inspire and educate the next generation of technologists.'
    }
  ]
};