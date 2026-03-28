import { Question, Testimony } from '../lib/types';
import { CarouselImage } from './divisions.config';

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
    quote: 'I love how passionate Media is in its mission to broaden ACM UTD\'s reach all across campus, and getting to capture all of the amazing events with our team is so fun!',
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