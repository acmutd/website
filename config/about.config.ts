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
        'ACM Development mainly focuses on maintaining web applications and infrastructures used by ACM to interact with its members such as Member Portal and UTD Grades.',
      links: [
        { name: 'acm portal', link: 'https://github.com/acmutd/portal-next' },
        { name: 'utdgrades', link: 'https://github.com/acmutd/utd-grades' },
        { name: 'github', link: 'https://github.com/acmutd' },
      ],
      linkStyles: '',
    },
    research: {
      section: 'research',
      description:
        'ACM Research is an undergraduate-only research initiative that introduces students to the world of research, equipping them with the skills, resources, and mentorship necessary to formulate nuanced ideas and prepare them for possible future publications. Our goal is to guide you through the holistic research process, starting with the generation of engaging research questions and ending at the presentation of findings to industry and academic professionals in a symposium format.',
      links: [{ name: 'learn more', link: '/research' }],
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
        'ACM Education runs the Technical Interview Prep (TIP) program, the Mentor program, as well as organizing workshops throughout the semester.',
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
        'Our purpose is to increase STEM involvement & engagement in K-12 students by providing access to meaningful STEM-related opportunities in low-income communities/schools. In addition, our dedicated events team organizes various social events for students of all majors. These events create a vibrant campus atmosphere by encouraging collaboration, fostering creativity, and enhancing student engagement.',
      links: [
        {
          name: 'learn more',
          link: 'discord.com/channels/692266201644007424/1022696200429895710',
        },
      ],
    },
  },
};
