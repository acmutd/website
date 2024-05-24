import type { AboutPageData } from '../lib/types';

export const aboutPageData: AboutPageData = {
  pageDescription:
    'We are the Association for Computing Machinery at UT Dallas. Fueled by creativity, passion, and professionalism, we are a dynamic force helping shape the future of the engineering community here at UT Dallas. With diverse divisions spanning Media, Projects, Research, Development, Education, Industry, Community, and HackUTD, you are sure to find your place among us.',
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
      links: [{ name: 'learn more', link: '/projects' }],
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
        'ACM Media is the lively mix of creative minds and dedicated members behind all our campaigns. Composed of talented marketing specialists, gifted designers, and polished videographers, we are the amplified voice of our divisions. Together, we craft engaging content and foster an environment where our community thrives.',
      links: [
        { name: 'linkedIn', link: 'www.linkedin.com/company/acmutd' },
        { name: 'instagram', link: 'www.instagram.com/acmutd/' },
        { name: 'youtube', link: 'www.youtube.com/@acmutdallas4256' },
        {
          name: 'newsletter',
          link: 'https://cdn.forms-content.sg-form.com/22d851f4-5f47-11eb-9b58-e2c4feadfaf0',
        },
      ],
    },
    hackutd: {
      section: 'hackutd',
      description:
        'HackUTD is an annual 24-hour hackathon that attracts a wide variety of sponsors and participants to come together to solve various problems. During our last iteration (HackUTD X), we had over 1000 participants and 230 project submissions, making us the 2nd largest 24 hour hackathon in the US! None of this would have been possible without the amazing, dedicated team of organizers we had on our side.',
      links: [
        { name: 'website', link: 'hackutd.co' },
        { name: 'instagram', link: 'instagram.com/hackutd' },
      ],
    },
    industry: {
      section: 'industry',
      description: `Welcome to ACM Industry!! Our team has the pleasure of acting as the bridge between companies and the ACM community; we do this by introducing more companies to ACM and its members, as well as involving our current sponsors through the various events and workshops we host with them. If there's a technology you would like to learn, a challenge in the college-to-corporate transition you would like to overcome, or if you just want to network with industry professionals, check out ACM Industry!`,
      links: [],
    },
    community: {
      section: 'community',
      description:
        'Our purpose is to increase STEM involvement & engagement in K-12 students by providing access to meaningful STEM-related opportunities in low-income communities/schools.',
      links: [
        {
          name: 'learn more',
          link: 'discord.com/channels/692266201644007424/1022696200429895710',
        },
      ],
    },
  },
};
