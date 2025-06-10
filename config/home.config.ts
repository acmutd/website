import { HomePageData } from '../lib/types';
import { CarouselImage } from './divisions.config';

export const homePageData: HomePageData = {
  orgStatement:
    "we're a team of students with one goal: building a greater, more collaborative computing community at The University of Texas at Dallas.",
  community: {
    linkedin: 'https://www.linkedin.com/company/acmutd',
    instagram: 'https://www.instagram.com/acmutd/',
    discord: 'https://discord.gg/ttB9HuaKsA',
    github: 'https://github.com/acmutd/',
    youtube: 'https://www.youtube.com/@acmutdallas4256',
  },
  cards: [
    {
      description: 'join our mailing list to stay updated with our events and programs!',
      linkText: 'join',
      link: 'https://cdn.forms-content.sg-form.com/22d851f4-5f47-11eb-9b58-e2c4feadfaf0',
    },
    {
      description: 'acm applications now open for fall 2025!',
      linkText: 'apply',
      link: 'https://portal.acmutd.co/opportunities',
    },
  ],
  sponsors: {
    gold: ['statefarm', 'paycom', 'CBRE', 'eogresources', 'goldmansachs'],
    silver: ['VISA'],
    bronze: [],
    custom: [],
  },
};


export const flexImages: CarouselImage[] = [
  {
    imageLink: '/assets/development/sage.png',
    title: "sage: ACM's very own Student Advising & Guidance Engine",
    date: new Date('2025-01-01'),
  },
  {
    imageLink: '/assets/research/research-symposium-s25-winners.jpg',
    title: "research symposium Spring '25 winners: Helix",
    date: new Date('2025-01-01'),
  },
  {
    imageLink: '/assets/projects/presentationnight-s25-winners.jpg',
    title: "projects presentation night Spring '25 winners: HackLab",
    date: new Date('2025-01-01'),
  },
];

export const eventImages: CarouselImage[] = [
  {
    imageLink: '/assets/community/events_application_flyer.png',
    title: 'apply now',
    date: new Date('2025-01-01'),
  },
  {
    imageLink: '/assets/education/mentor-4.png',
    title: 'apply now',
    date: new Date('2025-01-01'),
  },
];