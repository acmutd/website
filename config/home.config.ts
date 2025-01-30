import { HomePageData } from '../lib/types';

export const homePageData: HomePageData = {
  orgStatement:
    "We're a team of students with one goal: building a greater, more collaborative computing community at The University of Texas at Dallas.",
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
      description: 'acm applications now open for spring 2025!',
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
