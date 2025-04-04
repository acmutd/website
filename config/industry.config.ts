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

export const industryTestimony: Testimony[] = [
  {
    quote: "Being part of the Industry team means bridging the gap between students and the professional world. It’s been so rewarding seeing student’s gain industry advice and knowledge when professionals share about their companies — and knowing we made these connections possible."
  },
  {
    quote: "Having gone to multiple ACM industry events this past year I have learned so much about various tech fields along with how I can stand out as an applicant by tailoring my resume and experience to succeed as an early professional!"
  },
  {
    quote: "Being an industry coordinator has taught me that relationships drive everything. Whether it's a coffee chat or a career fair, the impact we make by connecting people is something I’m genuinely proud of."
  }
]

export const industryFAQ: Question[] = [
  {
    question: 'What does the Industry division do?',
    answer: 'We coordinate company-sponsored events like panels, networking nights, and tech talks. We also lead outreach efforts to industry professionals, build long-term relationships with sponsors, and organize behind-the-scenes logistics to make every event run smoothly along with supporting ACM as a whole. From curating speaker lineups to creating career resources, we’re all about connecting students with the tech world.'
  },
  {
    question: 'How can I get involved with Industry, not as an coordinator?',
    answer: 'Come attend our events! We love when members show up to our events and engage with professionals! Asking great questions, networking with speakers, or even suggesting companies you’d like to see at ACM events is a great way to stay involved along with put your networking skills to the test!'
  },
  {
    question: 'How can I join Industry as a Coordinator?',
    answer: 'Applications open on a rolling bas is— be sure to watch our Discord and Instagram for announcements regarding industry coordinator positions! We look for people who have a knack for professionalism and connection along with a determination to connect the professional and student world.'
  },
  {
    question: 'What skills do Industry coordinators use?',
    answer: 'Strong communication and professionalism are essential — we write a lot of emails and lead sponsor calls! Event planning, time management, and networking are also major skills our coordinators posses'
  }
]

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