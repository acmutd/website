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
  whyJoinCards: [
    {
      title: 'meet other developers',
      description: 'connect with a community of students who are into coding, building, and tech',
    },
    {
      title: 'learn by doing',
      description:
        'workshops, coding events, and hackathons help you grow your skills outside the classroom',
    },
    {
      title: 'get career ready',
      description: 'networking events and interview prep to set you up for success for internships',
    },
    {
      title: 'research opportunities',
      description: 'work with peers on real-world research in areas like AI, security, or systems',
    },
    {
      title: 'mentorship access',
      description: 'get advice from experienced students, alumni, and industry professionals',
    },
    {
      title: 'make connections',
      description: 'from social events to coding hangouts, be part of a welcoming community',
    },
  ],
  sponsors: {
    gold: ['paycom'],
    silver: ['CBRE', 'gresearch', 'nokia', 'verizon'],
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
    imageLink: '/assets/media/mediaOpen1.png',
    title: 'apply now',
    date: new Date('2025-01-01'),
  },
  {
    imageLink: '/assets/education/tip application.png',
    title: 'apply now',
    date: new Date('2025-01-01'),
  },
];
