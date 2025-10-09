import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

export const mediaDirectors: Director[] = [
   {
    image: '/assets/officer/HibaMubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'Director of Marketing',
  },
  {
    image: '/assets/officer/SnehaMaram.jpg',
    name: 'Sneha Maram',
    position: 'Director of Design',
  },
]

export const mediaOfficers: Officer[] = [
  
  {
    image: '/assets/officer/HibaMubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'Director of Marketing',
  },
  {
    image: '/assets/officer/SnehaMaram.jpg',
    name: 'Sneha Maram',
    position: 'Director of Design',
  },
  {
    image: '/assets/officer/Adrian_Alvarez.jpg',
    name: 'Adrian Alvarez',
    position: 'Marketing Officer',
  },
  {
    image: '/assets/officer/AlessioHaro.jpg',
    name: 'Alessio Haro',
    position: 'Design Officer',
  },
  {
    image: '/assets/officer/AlishbaJafri.png',
    name: 'Alishba Jafri',
    position: 'Marketing Officer',
  },
  {
    image: '/assets/officer/AnishPalankar.jpeg',
    name: 'Anish Palankar',
    position: 'Marketing Officer',
  },
  {
    image: '/assets/officer/AnviSiddabhattuni.jpg',
    name: 'Anvi Siddabhattuni',
    position: 'Hybrid Officer',
  },
  {
    image: '/assets/officer/BatrisiyaNablan.jpg',
    name: 'Batrisiya Nablan',
    position: 'Design Officer',
  },
  {
    image: '/assets/officer/DaxDwelle.jpeg',
    name: 'Dax Dwelle',
    position: 'Marketing Officer',
  },
  {
    image: '/assets/officer/DamianIzaguirre.jpeg',
    name: 'Damian Izaguirre',
    position: 'Design Officer',
  },
  {
    image: '/assets/officer/EshitasriPunuganti.jpg',
    name: 'Eshitasri Punuganti',
    position: 'Marketing Officer',
  },
  {
    image: '/assets/officer/MohamedIbrahim.png',
    name: 'Mohamed Ibrahim',
    position: 'Marketing Officer',
  },
  {
    image: '/assets/officer/RohanCheruku.jpg',
    name: 'Rohan Cheruku',
    position: 'Design Officer',
  },
  {
    image: '/assets/officer/SallyNguyen.jpg',
    name: 'Sally Nguyen',
    position: 'Hybrid Officer',
  },
  {
    image: '/assets/officer/SandraLuo.jpg',
    name: 'Sandra Luo',
    position: 'Design Officer',
  },
  {
    image: '/assets/officer/SanjithTamballa.jpg',
    name: 'Sanjith Tamballa',
    position: 'Design Officer',
  },
  {
    image: '/assets/officer/VictoriaOkorafor.png',
    name: 'Victoria Okorafor',
    position: 'Design Officer',
  },
  {
    image: '/assets/officer/SusanZhang.jpg',
    name: 'Susan Zhang',
    position: 'Advisor of Media',
  },
];

export const mediaTestimony: Testimony[] = [
  {
    quote: "My favorite thing about media is the freedom to use our creativity to affect change in tangible ways, and the supportiveness of the community!",
    name: 'Sandra Luo'
  },
  {
    quote: 'Media has allowed me to express my creativity and grow as a designer!',
    name: "Susan Zhang"
  },
  {
    quote: 'I love how passionate Media is in its mission to broaden ACM UTD’s reach all across campus, and getting to capture all of the amazing events with our team is so fun!',
    name: 'Hiba Mubeen'
  },

]

export const mediaFAQ: Question[] = [
  {
    question: 'What projects do Media work on?',
    answer: 'We design everything from social media graphics to presentation slides to merchandise like hoodies! We also photograph events and edit short-form videos to promote ACM; we even create trailers and short films!',
  },
  {
    question: 'How can I join Media?',
    answer: 'Applications open on a rolling basis, so please keep an eye out on Instagram and Discord!'
  },
  {
    question: 'How can I get involved with Media, not as an officer?',
    answer: 'Though Media sadly is not currently hosting events open to the public, we occasionally open casting calls for our filmography! Keep an eye out on Discord for how to get involved!'
  },
  {
    question: "What tools do Media's design officers use?",
    answer: 'We use Figma as our central design software, but we have been known to use Procreate, Adobe Illustrator, and more for past designs!'
  },
  {
    question: "What tools do Media's marketing officers use?",
    answer: 'Our marketing officers have complete freedom over which photo or video editing platform they choose; some examples include Premiere Pro, DaVinci Resolve, and CapCut! That, alongside proficiency in Instagram, Discord, and LinkedIn to spread the word about ACM!'
  }
]

export const mediaCarousel: CarouselImage[] = [
  {
    imageLink: '/assets/media/BigData_14.jpg',
    title: 'Big Data Event',
    date: new Date(2025, 2, 6),
  },
  {
    imageLink: '/assets/media/DSC03211-Edit.png',
    title: 'Notes and Floats',
    date: new Date(2025, 1, 11),
  },
]