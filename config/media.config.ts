import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

export const mediaDirectors: Director[] = [
  {
    image: '/assets/officer/HibaMubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/SusanZhang.jpg',
    name: 'Susan Zhang',
    position: 'Director of Media',
  },
]

export const mediaOfficers: Officer[] = [
  {
    image: '/assets/officer/HibaMubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/SusanZhang.jpg',
    name: 'Susan Zhang',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/CalebHernandez.jpg',
    name: 'Caleb Hernandez',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/SandraLuo.jpg',
    name: 'Sandra Luo',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/NandiniPaidesetty.jpg',
    name: 'Nandini Paidesetty',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/AdrianAlvarez.jpg',
    name: 'Adrian Alvarez',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/SanjithTamballa.jpg',
    name: 'Sanjith Tamballa',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/MohamedIbrahim.png',
    name: 'Mohamed Ibrahim',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/RajivMallisetty.jpg',
    name: 'Rajiv Malisetty',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/AddieSubramanian.png',
    name: 'Aadharshini Subramanian',
    position: 'Media Officer',
  },
  {
    image: '/assets/officer/SnehaMaram.jpg',
    name: 'Sneha Maram',
    position: 'Media Officer',
  },
];

export const mediaTestimony: Testimony[] = [
  {
    quote: "I love ACM media!"
  }
]

export const mediaFAQ: Question[] = [
  {
    question: 'What is ACM Media?',
    answer: 'ACM Media is the division that makes all of our campaigns possible. We are the ones who create all of the content for our campaigns, and we are the ones who make sure that our campaigns are seen by as many people as possible.',
  }
]

export const mediaCarousel: CarouselImage[] = [
  {
    imageLink: '/assets/about/media/media.png',
    title: 'ACM Media',
    date: new Date('2024-08-01'),
  },
  {
    imageLink: '/assets/about/media/media.png',
    title: 'ACM Media',
    date: new Date('2024-08-01'),
  },
]