import { DevProjects, Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

export const developmentDirectors: Director[] = [
  {
    image: '/assets/officer/Evan_Wright.jpg',
    name: 'Evan Wright',
    position: 'Director of Development',
  },
];

export const developmentOfficers: Officer[] = [
  {
    image: '/assets/officer/Evan_Wright.jpg',
    name: 'Evan Wright',
    position: 'Director of Development',
  },

  {
    image: '/assets/officer/Anirudh_Vayalali.jpeg',
    name: 'Anirudh Vayalali',
    position: 'Core Lead',
  },
  {
    image: '/assets/officer/Yash_Shah.jpg',
    name: 'Yash Shah',
    position: 'BSG Lead',
  },
  {
    image: '/assets/officer/Arin_Sood.png',
    name: 'Arin Sood',
    position: 'Org Portal Lead',
  },
  {
    image: '/assets/officer/Prerita_Babarjung.jpg',
    name: 'Prerita Babarjung',
    position: 'Nexus Lead',
  },
  {
    image: '/assets/officer/Alen_Jo.jpg',
    name: 'Alen Jo',
    position: 'SAGE Lead',
  },
  {
    image: '/assets/officer/Vladislav_Kondratyev.png',
    name: 'Vladislav Kondratyev',
    position: 'Meteormate Lead',
  },

  {
    image: '/assets/officer/Giang_Pham.jpg',
    name: 'Giang Pham',
    position: 'Core Developer',
  },
  {
    image: '/assets/officer/Bhavesh_Mandalapu.jpg',
    name: 'Bhavesh Mandalapu',
    position: 'Core Developer',
  },
  {
    image: '/assets/officer/Ruben_Olano.jpg',
    name: 'Ruben Olano',
    position: 'Core Developer',
  },
  {
    image: '/assets/officer/Jeydin_Pham.jpeg',
    name: 'Jeydin Pham',
    position: 'Core Developer',
  },
  {
    image: '/assets/officer/Luke_Sultzer.jpeg',
    name: 'Luke Sultzer',
    position: 'Core Developer',
  },
  {
    image: '/assets/officer/Vaishnavi_Josyula.jpg',
    name: 'Vaishnavi Josyula',
    position: 'Core Developer',
  },
  {
    image: '/assets/officer/Bennett_Feigenbaum.JPG',
    name: 'Bennett Feigenbaum',
    position: 'Core Designer',
  },

  {
    image: '/assets/officer/Dev_Sheth.jpg',
    name: 'Dev Sheth',
    position: 'BSG Developer',
  },
  {
    image: '/assets/officer/Owen_Isenhart.JPEG',
    name: 'Owen Isenhart',
    position: 'BSG Developer',
  },
  {
    image: '/assets/officer/Riyan_Maknojia.jpg',
    name: 'Riyan Maknojia',
    position: 'BSG Developer',
  },
  {
    image: '/assets/officer/Ronak_Chavva.jpg',
    name: 'Ronak Chavva',
    position: 'BSG Developer',
  },
  {
    image: '/assets/officer/Sarah_Park.jpg',
    name: 'Sarah Park',
    position: 'BSG Developer',
  },

  {
    image: '/assets/officer/Akshay_Nagarajan.png',
    name: 'Akshay Nagarajan',
    position: 'Org Portal Developer',
  },
  {
    image: '/assets/officer/Andrew_Dmitrievsky.jpg',
    name: 'Andrew Dmitrievsky',
    position: 'Org Portal Developer',
  },
  {
    image: '/assets/officer/Ethan_Scherwitz.JPG',
    name: 'Ethan Scherwitz',
    position: 'Org Portal Developer',
  },
  {
    image: '/assets/officer/Jason_Luu.JPG',
    name: 'Jason Luu',
    position: 'Org Portal Developer',
  },
  {
    image: '/assets/officer/Lerich_Osay.jpg',
    name: 'Lerich Osay',
    position: 'Org Portal Developer',
  },
  {
    image: '/assets/officer/Nachiket_Pandit.jpg',
    name: 'Nachiket Pandit',
    position: 'Org Portal Developer',
  },
  {
    image: '/assets/officer/Susan_Zhang.jpg',
    name: 'Susan Zhang',
    position: 'Org Portal Designer',
  },

  {
    image: '/assets/officer/Humza_Qureshi.jpg',
    name: 'Humza Qureshi',
    position: 'Nexus Developer',
  },
  {
    image: '/assets/officer/Indrajith_Thyagaraja.jpg',
    name: 'Indrajith Thyagaraja',
    position: 'Nexus Developer',
  },
  {
    image: '/assets/officer/Naomi_Ntuli.jpg',
    name: 'Naomi Ntuli',
    position: 'Nexus Developer',
  },
  {
    image: '/assets/officer/Sreevasan_Sivasubramanian.jpg',
    name: 'Sreevasan Sivasubramanian',
    position: 'Nexus Developer',
  },
  {
    image: '/assets/officer/Thomas_Le.png',
    name: 'Thomas Le',
    position: 'Nexus Developer',
  },
  {
    image: '/assets/officer/Tommy_Nguyen.JPG',
    name: 'Tommy Nguyen',
    position: 'Nexus Designer',
  },

  {
    image: '/assets/officer/Abis_Naqvi.jpeg',
    name: 'Abis Naqvi',
    position: 'SAGE Developer',
  },
  {
    image: '/assets/officer/Andres_Garcia_Sanchez.png',
    name: 'Andres Garcia Sanchez',
    position: 'SAGE Developer',
  },
  {
    image: '/assets/officer/Anusha_Patel.jpeg',
    name: 'Anusha Patel',
    position: 'SAGE Developer',
  },
  {
    image: '/assets/officer/Jaden_Kuriakose.JPG',
    name: 'Jaden Kuriakose',
    position: 'SAGE Developer',
  },
  {
    image: '/assets/officer/Swayam_Arora.png',
    name: 'Swayam Arora',
    position: 'SAGE Developer',
  },
  {
    image: '/assets/officer/Oscar_Lay.jpg',
    name: 'Oscar Lay',
    position: 'SAGE Developer',
  },
  {
    image: '/assets/officer/Mercedes_Xiong.jpg',
    name: 'Mercedes Xiong',
    position: 'SAGE Designer',
  },

  {
    image: '/assets/officer/Muaaz_Abed.jpg',
    name: 'Muaaz Abed',
    position: 'Meteormate Developer',
  },
  {
    image: '/assets/officer/Ryan_Polasky.png',
    name: 'Ryan Polasky',
    position: 'Meteormate Developer',
  },
  {
    image: '/assets/officer/Nathan_Sujatno.jpg',
    name: 'Nathan Sujatno',
    position: 'Meteormate Developer',
  },
  {
    image: '/assets/officer/Joel_Gurivireddy.jpg',
    name: 'Joel Gurivireddy',
    position: 'Meteormate Developer',
  },
  {
    image: '/assets/officer/Aastha_Sheth.jpg',
    name: 'Aastha Sheth',
    position: 'Meteormate Developer',
  },
  {
    image: '/assets/officer/Christopher_Tran.png',
    name: 'Christopher Tran',
    position: 'Meteormate Designer',
  },
  {
    image: '/assets/officer/Frabina_Edwin.png',
    name: 'Frabina Edwin',
    position: 'Meteormate Designer',
  },
];

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
