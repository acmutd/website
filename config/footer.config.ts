import type { Footer } from '../lib/types';
import { homePageData } from './home.config';

export const footerData: Footer = {
  links: [
    {
      text: 'about',
      link: '/about',
    },
    {
      text: 'officers',
      link: '/officers',
    },
    {
      text: 'connect',
      link: '/connect',
    },
    {
      text: 'events',
      link: '/events'
    },
    {
      text: 'apply',
      link: '/apply',
    },
    {
      text: 'projects',
      link: '/projects'
    }
  ],
  contact: 'contact@acmutd.co',
  community: homePageData.community,
};
