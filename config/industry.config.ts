import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

export const industryDirectors: Director[] = [
  {
    name: 'Manasi Vipat',
    position: 'Director of Industry',
    image: '/assets/officer/ManasiVipat.jpg',
  },
];

export const industryOfficers: Officer[] = [
   {
    name: 'Manasi Vipat',
    position: 'Director of Industry',
    image: '/assets/officer/ManasiVipat.jpg'
  },
  {
    name: 'Sushant Ganji',
    position: 'Industry Officer',
    image: '/assets/officer/SushantGanji.jpg',
  },
  {
    name: 'Anika Guin',
    position: 'Industry Officer',
    image: '/assets/officer/AnikaGuin.png',
  },
  {
    name: 'Nihita Soma',
    position: 'Industry Officer',
    image: '/assets/officer/NihitaSoma.jpg',
  },
  {
    name: 'Soujanya Kamalapur',
    position: 'Industry Officer',
    image: '/assets/officer/SoujanyaKamalapur.png',
  },
  {
    name: 'Shreya Ram',
    position: 'Industry Officer',
    image: '/assets/officer/ShreyaRam.png',
  },
];

export const industryTestimony: Testimony[] = []

export const industryFAQ: Question[] = []

export const industryCarouselImages: CarouselImage[] = [
  {
    imageLink: '/assets/about/industry/cover.jpg',
    title: 'Industry Workshop',
    date: new Date('2024-03-01'),
  },
  {
    imageLink: '/assets/about/industry/cover.jpg',
    title: 'Industry Workshop',
    date: new Date('2024-03-01'),
  },
]