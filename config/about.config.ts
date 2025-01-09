import type { AboutPageData } from '../lib/types';

export const aboutPageData: AboutPageData = {
  pageDescription:
    'We are the Association for Computing Machinery at UT Dallas. Fueled by creativity, passion, and professionalism, we are a dynamic force helping shape the future of the engineering community here at UT Dallas. With diverse divisions spanning Media, Projects, Research, Development, Education, Industry, Community, and HackUTD, you are sure to find your place among us.',
  divisionDescription:
    'ACM at UT Dallas is a dynamic organization comprising eight specialized divisions and a dedicated team of over 100 officers. Each division plays a unique role in fostering innovation and engagement, yet we are united by a common mission: to enhance and support the computing community at UT Dallas.',
  divisions: {
    development: {
      section: 'development',
      description:
        'ACM Development is dedicated to designing, building, and maintaining robust web applications and infrastructures that support ACM’s interactions with its members. Key projects include the Member Portal, which streamlines member engagement, and UTD Grades, a resource for academic insights. By ensuring the reliability and functionality of these platforms, ACM Development plays a crucial role in enhancing the member experience and fostering a connected community.',
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
        'ACM Research is an undergraduate program designed to immerse students in the world of research by providing essential skills, resources, and mentorship. The program empowers participants to develop nuanced ideas, engage in hands-on research, and prepare for potential academic publications. From crafting compelling research questions to conducting in-depth analysis, students gain experience with the entire research process. The program culminates in a symposium where participants present their findings to industry experts and academic professionals, fostering collaboration, innovation, and a deeper understanding of research methodologies.',
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
        'ACM Education is committed to empowering students by providing resources and opportunities to grow their technical and professional skills. Its initiatives include the Technical Interview Prep (TIP) program, which equips participants with strategies to excel in technical interviews, and the Mentor program, fostering personalized guidance and growth through peer mentorship. Additionally, ACM Education hosts workshops throughout the semester, covering a wide range of topics to support skill development and career readiness.',
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
      description: `ACM Industry serves as the connection between companies and ACM members, fostering relationships that bring value to both students and industry professionals. By introducing new companies to ACM and engaging current sponsors through workshops, events, and networking opportunities, ACM Industry bridges the gap between academics and the corporate world. Whether it's exploring emerging technologies, addressing challenges in transitioning from college to careers, or building connections with industry leaders, ACM Industry offers opportunities to grow and succeed.`,
      links: [],
    },
    community: {
      section: 'community',
      description:
        'ACM Community is dedicated to increasing STEM involvement and engagement among K-12 students, particularly in low-income communities and schools, by providing access to meaningful STEM-related opportunities. In addition, the events team organizes social gatherings that welcome students of all majors. These events foster collaboration, inspire creativity, and enrich the campus experience, creating a vibrant and inclusive atmosphere for all.',
      links: [
        {
          name: 'learn more',
          link: 'discord.com/channels/692266201644007424/1022696200429895710',
        },
      ],
    },
  },
};
