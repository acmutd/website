import type { AboutPageData } from '../lib/types';

export const aboutPageData: AboutPageData = {
  pageDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum.',
  divisionDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  divisions: {
    development: {
      section: 'development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum.',
      links: [
        { name: 'acm portal', link: '/about' },
        { name: 'hackportal', link: '/about' },
        { name: 'utdgrades', link: '/about' },
        { name: 'github', link: '/about' },
      ],
      linkStyles: '',
    },
    research: {
      section: 'research',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum.',
      links: [{ name: 'apply today', link: '/about' }],
    },
    projects: {
      section: 'projects',
      description:
        'ACM Projects is a semester-long guided projects initiative for those new to software development, teaching collaborative tools, new technologies, and core development principles complimentary to curriculum.',
      links: [{ name: 'apply today', link: '/projects' }],
    },
    education: {
      section: 'education',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum.',
      links: [
        { name: 'TIP', link: '/education/tip' },
        { name: 'mentor program', link: '/education/mentor' },
      ],
    },
    media: {
      section: 'media',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum.',
      links: [
        { name: 'instagram', link: '/about' },
        { name: 'medium', link: '/about' },
        { name: 'newsletter?', link: '/about' },
      ],
    },
    hackutd: {
      section: 'hackutd',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum.',
      links: [
        { name: 'website', link: 'hackutd.co' },
        { name: 'instagram', link: 'instagram.com/hackutd' },
      ],
    },
    industry: {
      section: 'industry',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper. Sagittis id consectetur purus ut faucibus pulvinar elementum.',
      links: [
        { name: 'events', link: '/about' },
        { name: 'meet the team', link: '/about' },
      ],
    },
  },
};
