import type { AboutPageData } from '../lib/types';

export const aboutPageData: AboutPageData = {
  pageDescription:
    'we are the Association for Computing Machinery at UT Dallas. fueled by creativity, passion, and professionalism, we are a dynamic force helping shape the future of the engineering community here at UT Dallas. with diverse divisions spanning Media, Projects, Research, Development, Education, Industry, Community, and HackUTD, you are sure to find your place among us.',
  divisionDescription:
    'ACM at UT Dallas is a dynamic organization comprising eight specialized divisions and a dedicated team of over 100 officers. Each division plays a unique role in fostering innovation and engagement, yet we are united by a common mission: to enhance and support the computing community at UT Dallas.',
  divisions: {
    media: {
      section: 'media',
      description:
        'acm media is the lively mix of creative minds and dedicated members behind all our campaigns. Composed of talented marketing specialists, gifted designers, and polished videographers, we are the amplified voice of our divisions. Together, we craft engaging content and foster an environment where our community thrives.',
      links: [
        { name: 'linkedIn', link: 'https://www.linkedin.com/company/acmutd' },
        { name: 'instagram', link: 'https://www.instagram.com/acmutd/' },
        { name: 'youtube', link: 'https://www.youtube.com/@acmutdallas4256' },
        {
          name: 'newsletter',
          link: 'https://cdn.forms-content.sg-form.com/22d851f4-5f47-11eb-9b58-e2c4feadfaf0',
        },
        { name: 'learn more', link: '/media' },
      ],
    },
    research: {
      section: 'research',
      description:
        'acm research introduces undergraduates to research through mentorship, skill-building, and hands-on projects. Students engage in the full research process, from crafting questions to presenting findings at a symposium.',
      links: [{ name: 'learn more', link: '/research' }],
    },
    development: {
      section: 'development',
      description:
        'acm development designs, builds, and maintains web applications that support ACM’s operations and member interactions. Projects like the Member Portal and UTD Grades ensure reliable and user-friendly platforms for the campus community.',
      links: [
        { name: 'acm portal', link: 'https://github.com/acmutd/portal-next' },
        { name: 'utdgrades', link: 'https://github.com/acmutd/utd-grades' },
        { name: 'github', link: 'https://github.com/acmutd' },
        { name: "learn more", link: "/development" }
      ],
      linkStyles: '',
    },
    projects: {
      section: 'projects',
      description:
        'acm projects is a semester-long guided projects initiative for those new to software development, teaching collaborative tools, new technologies, and core development principles complimentary to curriculum.',
      links: [{ name: 'learn more', link: '/projects' }],
    },
    education: {
      section: 'education',
      description:
        'acm education empowers students with technical and professional skills through programs like Technical Interview Prep (TIP), the Mentor program, and skill-building workshops.',
      links: [
        { name: 'TIP', link: '/education/tip' },
        { name: 'mentor program', link: '/education/mentor' },
      ],
    },
    community: {
      section: 'community',
      description:
        'acm community increases STEM engagement in K-12 students, focusing on underserved schools. It also organizes social events for all majors, fostering collaboration, creativity, and a vibrant campus atmosphere.',
      links: [
        {
          name: 'learn more',
          link: '/community',
        },
      ],
    },
    hackutd: {
      section: 'hackutd',
      description:
        'HackUTD is an annual 24-hour hackathon that attracts a wide variety of sponsors and participants to come together to solve various problems. During our last iteration (HackUTD X), we had over 1000 participants and 230 project submissions, making us the 2nd largest 24 hour hackathon in the US! None of this would have been possible without the amazing, dedicated team of organizers we had on our side.',
      links: [
        { name: 'website', link: 'https://hackutd.co' },
        { name: 'instagram', link: 'https://www.instagram.com/hackutd' },
        { name: 'learn more', link: '/hackutd' },
      ],
    },
    industry: {
      section: 'industry',
      description:
        `acm industry connects students with companies through workshops, events, and networking opportunities. By fostering relationships with new and current sponsors, it bridges the gap between academics and careers, helping students explore technologies and build professional connections.`,
      links: [{ name: 'learn more', link: '/industry' }],
    },
  },
};