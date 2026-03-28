import { DevProjects, Question, Testimony } from '../lib/types';
import { CarouselImage } from './divisions.config';

export const developmentTestimony: Testimony[] = [
  {
    quote:
      'Being able to work with a team of people who are all passionate about the same thing is a great feeling',
  },
  {
    quote: 'The leads are always there to help you out and guide you',
  },
];

export const developmentFAQ: Question[] = [
  {
    question: 'Why should I join ACM Dev?',
    answer: `ACM Dev offers hands-on experience creating projects for our fellow UTD students and is an amazing community of talented developers. You'll build impactful solutions for UTD, gain mentorship, and strengthen your portfolio—all while collaborating on cutting-edge technology. If you want to grow, innovate, and make a difference, ACM Dev is the place to be!`,
  },
  {
    question: 'What types of roles are there in ACM Dev? ',
    answer:
      'There are many roles in ACM Dev, including project management, web development, design, and more. We will help you find a role that fits your skills and interests.',
  },
];

export const developmentCarouselImages: CarouselImage[] = [
  {
    imageLink: '/assets/development/sage.png',
    title: 'SAGE, an AI-powered student advisor',
    date: new Date(2025, 2, 31),
  },
  {
    imageLink: '/assets/development/utdgrades.png',
    title: 'UTD Grades, a quick and easy way to view class grading distributions',
    date: new Date(2025, 3, 27),
  },
  {
    imageLink: '/assets/development/dev-team-s25.jpg',
    title: "ACM Development Leads for Spring '25",
    date: new Date(2025, 3, 27),
  },
];

export const developmentProjects: DevProjects[] = [
  {
    title: 'SAGE',
    description:
      "SAGE is an AI-powered student advisor that can answer your questions quickly and efficiently, so you don't have to worry about it. On top of this, SAGE can view your profile to help you make decisions about future classes and even generate personalized degree plans.",
    links: [
      { type: 'github', link: 'https://github.com/acmutd/sage-site' },
      { type: 'site', link: 'utdsage.com' },
    ],
    image: '/assets/development/sage.png',
  },
  {
    title: 'UTD Grades',
    description:
      'UTD Grades is a quick and easy way to view class grading distributions. It is a web application that allows you to view the grading distributions for all classes at UTD.',
    links: [
      { type: 'github', link: 'https://github.com/acmutd/utd-grades' },
      { type: 'site', link: 'utdgrades.com' },
    ],
    image: '/assets/development/utdgrades.png',
  },
  {
    title: 'ACM Portal',
    description:
      'ACM Portal is a web application that allows you to see upcoming events, workshops, and more within the ACM community.',
    links: [
      { type: 'github', link: 'https://github.com/acmutd/portal-next' },
      { type: 'site', link: 'portal.acmutd.co' },
    ],
    image: '/assets/development/acmportal.png',
  },
  {
    title: 'Peechi Bot',
    description: 'Peechi Bot is a Discord bot that powers the ACM Discord server.',
    links: [
      {
        type: 'github',
        link: 'https://github.com/acmutd/peechi-bot',
      },
      {
        type: 'site',
        link: 'acmutd.co/discord',
      },
    ],
    image: '/assets/development/peechi.png',
  },
  {
    title: 'Coming Soon...',
    description: 'We are working on some exciting projects!',
    links: [],
    image: '/assets/development/construction.png',
  },
];
