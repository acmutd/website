import { HomePageData } from '../lib/types';

export const homePageData: HomePageData = {
  orgStatement:
    "We're a team of students with one goal: building a greater, more collaborative computing community at The University of Texas at Dallas.",
  community: {
    linkedin: '/',
    instagram: '/',
    discord: '/',
    github: '/',
    youtube: '/',
  },
  cards: [
    {
      description: 'join our mailing list to stay updated with our events and programs!',
      linkText: 'join',
      link: '/',
    },
    {
      description: 'acm applications now open for fall 2024!',
      linkText: 'apply',
      link: 'https://portal.acmutd.co/opportunities',
    },
  ],
  sponsors: {
    gold: ['statefarm', 'paycom', 'CBRE'],
    silver: ['eogresources', 'VISA'],
    bronze: ['geico', 'jpmc'],
    custom: ['corelogic'],
  },
};
