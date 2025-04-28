import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

export const developmentDirectors: Director[] = [
  {
    image: '/assets/officer/FarhanJamil.jpg',
    name: 'Farhan Jamil',
    position: 'Director of Development',
  },
]

export const developmentOfficers: Officer[] = [
  {
    image: '/assets/officer/FarhanJamil.jpg',
    name: 'Farhan Jamil',
    position: 'Director of Development',
  },
  {
    image: '/assets/officer/ArihantSreenivasa.png',
    name: 'Arihant Sreenivasa',
    position: 'Director of Development',
  },
  {
    image: '/assets/officer/AnirudhVayalali.jpeg',
    name: 'Anirudh Vayalali',
    position: 'Development Officer (PM for ACM Core)',
  },
  {
    image: '/assets/officer/GiangPham.jpg',
    name: 'Giang Pham',
    position: 'Development Officer (ACM Core)',
  },
  {
    image: '/assets/officer/BennettFeigenbaum.JPG',
    name: 'Bennett Feigenbaum',
    position: 'Development Officer (ACM Core)',
  },
  {
    image: '/assets/officer/BhaveshMandalapu.jpg',
    name: 'Bhavesh Mandalapu',
    position: 'Development Officer (ACM Core)',
  },
  {
    image: '/assets/officer/RubenOlano.jpg',
    name: 'Ruben Olano',
    position: 'Development Officer (ACM Core)',
  },
  {
    image: '/assets/officer/YashShah.jpg',
    name: 'Yash Shah',
    position: 'Development Officer (PM for BSG)',
  },
  {
    image: '/assets/officer/RonakChava.jpg',
    name: 'Ronak Chava',
    position: 'Development Officer (BSG)',
  },
  {
    image: '/assets/officer/PreritaBabarjung.jpg',
    name: 'Prerita Babarjung',
    position: 'Development Officer (PM for Nexus)',
  },
  {
    image: '/assets/officer/GiridharNair.jpg',
    name: 'Giridhar Nair',
    position: 'Development Officer (Nexus)',
  },
  {
    image: '/assets/officer/NaomiNtuli.jpg',
    name: 'Naomi Ntuli',
    position: 'Development Officer (Nexus)',
  },
  {
    image: '/assets/officer/HumzaQureshi.jpg',
    name: 'Humza Qureshi',
    position: 'Development Officer (Nexus)',
  },
  {
    image: '/assets/officer/IndrajithThyagaraja.jpg',
    name: 'Indrajith Thyagaraja',
    position: 'Development Officer (Nexus)',
  },
  {
    image: '/assets/officer/SreevasanSivasubramanian.jpg',
    name: 'Sreevasan Sivasubramanian',
    position: 'Development Officer (Nexus)',
  },
  {
    image: '/assets/officer/ThomasLe.png',
    name: 'Thomas Le',
    position: 'Development Officer (Nexus)',
  },
  {
    image: '/assets/officer/ArinSood.png',
    name: 'Arin Sood',
    position: 'Development Officer (PM for Org Portal)',
  },
  {
    image: '/assets/officer/NachiketPandit.jpg',
    name: 'Nachiket Pandit',
    position: 'Development Officer (Org Portal)',
  },
  {
    image: '/assets/officer/MiaSorolaYoshida.png',
    name: 'Mia Sorola Yoshida',
    position: 'Development Officer (Org Portal)',
  },
  {
    image: '/assets/officer/AndrewDmitrievsky.jpeg',
    name: 'Andrew Dmitrievsky',
    position: 'Development Officer (Org Portal)',
  },
  {
    image: '/assets/officer/AkshayNagarajan.png',
    name: 'Akshay Nagarajan',
    position: 'Development Officer (Org Portal)',
  },
  {
    image: '/assets/officer/VeerShah.png',
    name: 'Veer Shah',
    position: 'Development Officer (Org Portal)',
  },
  {
    image: '/assets/officer/SusanZhang.jpg',
    name: 'Susan Zhang',
    position: 'Development Officer (Org Portal)',
  },
  {
    image: '/assets/officer/EvanWright.png',
    name: 'Evan Wright',
    position: 'Development Officer (PM for SAGE)',
  },
  {
    image: '/assets/officer/VladislavKondratyev.png',
    name: 'Vladislav Kondratyev',
    position: 'Development Officer (SAGE)',
  },
  {
    image: '/assets/officer/AlenJo.jpg',
    name: 'Alen Jo',
    position: 'Development Officer (SAGE)',
  },
  {
    image: '/assets/officer/SwayamArora.png',
    name: 'Swayam Arora',
    position: 'Development Officer (SAGE)',
  },
  {
    image: '/assets/officer/JadenKuriakose.JPG',
    name: 'Jaden Kuriakose',
    position: 'Development Officer (SAGE)',
  },
  {
    image: '/assets/officer/AlexPham.jpg',
    name: 'Alex Pham',
    position: 'Development Officer (SAGE)',
  },
  {
    image: '/assets/officer/AndresGarciaSanchez.png',
    name: 'Andres Garcia Sanchez',
    position: 'Development Officer (SAGE)',
  },
  {
    image: '/assets/officer/MichaelZhao.png',
    name: 'Michael Zhao',
    position: 'Development Officer (SAGE)',
  },
  {
    image: '/assets/officer/JordanTan.jpg',
    name: 'Jordan Tan',
    position: 'Development Officer (SAGE)',
  },
];

export const developmentTestimony: Testimony[] = [{
  quote: "Being able to work with a team of people who are all passionate about the same thing is a great feeling"
}, {
  quote: "The leads are always there to help you out and guide you"
}
]

export const developmentFAQ: Question[] = [
  {
    question: 'Why should I join ACM Dev?',
    answer: `ACM Dev offers hands-on experience creating projects for our fellow UTD students and is an amazing community of talented developers. You'll build impactful solutions for UTD, gain mentorship, and strengthen your portfolio—all while collaborating on cutting-edge technology. If you want to grow, innovate, and make a difference, ACM Dev is the place to be!`
  },
  {
    question: 'What types of roles are there in ACM Dev? ',
    answer: 'There are many roles in ACM Dev, including project management, web development, design, and more. We will help you find a role that fits your skills and interests.'
  }
]

export const developmentCarouselImages: CarouselImage[] = [
  {
    imageLink: '/assets/development/sage.png',
    title: "SAGE, an AI-powered student advisor",
    date: new Date(2025, 2, 31)
  },
  {
    imageLink: '/assets/development/utdgrades.png',
    title: "UTD Grades, a quick and easy way to view class grading distributions",
    date: new Date(2025, 3, 27)
  }
]