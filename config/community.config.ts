import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

export const communityDirectors: Director[] = [
  {
    name: 'Mercedes Xiong',
    position: 'Director of Campus',
    image: '/assets/officer/MercedesXiong.jpg',
  },
  {
    name: 'Vyshnav Vijish',
    position: 'Director of Outreach',
    image: '/assets/officer/VyshnavVijish.jpg',
  },
]

export const communityOfficers: Officer[] = [
  {
    name: 'Mercedes Xiong',
    position: 'Director of Community',
    image: '/assets/officer/MercedesXiong.jpg',
  },
  {
    name: 'Vyshnav Vijish',
    position: 'Director of Outreach',
    image: '/assets/officer/VyshnavVijish.jpg',
  },
  {
    name: 'Joseph Botros',
    position: 'Events Officer',
    image: '/assets/officer/JosephBotros.png',
  },
  {
    name: 'Varsha Shashishekar',
    position: 'Events Officer',
    image: '/assets/officer/VarshaShashishekar.jpg',
  },
  {
    name: 'Mayowa Akinyede',
    position: 'Events Officer',
    image: '/assets/officer/MayowaAkinyede.jpeg',
  },
  {
    name: 'Ryan Edwards',
    position: 'Events Officer',
    image: '/assets/officer/RyanEdwards.jpeg',
  },
  {
    name: 'Sudikisa Dineshkumar',
    position: 'Events Officer',
    image: '/assets/officer/SudikisaDineshkumar.jpg',
  },
  {
    name: 'Syed Kazmi',
    position: 'Events Officer',
    image: '/assets/officer/SyedKazmi.jpg',
  },
  {
    name: 'Mohammed Gaggutur',
    position: 'Events Officer',
    image: '/assets/officer/MohammedGaggutur.jpg',
  },
  {
    name: 'Pratishtha Rao',
    position: 'Events Officer',
    image: '/assets/officer/PratishthaRao.png',
  },
  {
    name: 'Varun Bhupathiraju',
    position: 'Events Officer',
    image: '/assets/officer/VarunBhupathiraju.jpeg',
  },
  {
    name: 'Shriya Kalyan',
    position: 'Archives Officer',
    image: '/assets/officer/ShriyaKalyan.png',
  },
  {
    name: 'Ayomide Tapere',
    position: 'Archives Officer',
    image: '/assets/officer/AyomideTapere.jpg',
  },
  {
    name: 'Manaar Quadri',
    position: 'Archives Officer',
    image: '/assets/officer/ManaarQuadri.jpg',
  },
  {
    name: 'Sameeraa Kandalgaonkar',
    position: 'Archives Officer',
    image: '/assets/officer/SameeraaKandalgaonkar.jpg',
  },
  {
    name: 'Kavyadharshini Seenuvasan',
    position: 'Archives Officer',
    image: '/assets/officer/KavyadharshiniSeenuvasan.jpg',
  },
  {
    name: 'Frabina Edwin',
    position: 'Archives Officer',
    image: '/assets/officer/FrabinaEdwin.png',
  },
  {
    name: 'Shanon Carter',
    position: 'Outreach Advisor',
    image: '/assets/officer/ShanonCarter.jpg',
  },
  {
    name: 'Nidhi Majoji',
    position: 'Outreach Officer',
    image: '/assets/officer/NidhiMajoji.jpg',
  },
  {
    name: 'Advay Chandramouli',
    position: 'Outreach Officer',
    image: '/assets/officer/AdvayChandramouli.jpg',
  },
  {
    name: 'Ali Ghorbani',
    position: 'Outreach Officer',
    image: '/assets/officer/AliGhorbani.jpg',
  },
  {
    name: 'Dhivyesh Prithiviraj',
    position: 'Outreach Officer',
    image: '/assets/officer/DhivyeshPrithviraj.jpg',
  },
  {
    name: 'Dana Ibrahim',
    position: 'Outreach Officer',
    image: '/assets/officer/DanaIbrahim.jpg',
  },
  {
    name: 'Gerardo Martinez',
    position: 'Outreach Officer',
    image: '/assets/officer/GerardoMartinez.jpg',
  },
  {
    name: 'Hannah Rauch',
    position: 'Outreach Officer',
    image: '/assets/officer/HannahRauch.jpg',
  },
  {
    name: 'Shreya Singaravel',
    position: 'Outreach Officer',
    image: '/assets/officer/ShreyaSingaravel.jpg',
  },
  {
    name: 'Tulasi Janjanam',
    position: 'Outreach Officer',
    image: '/assets/officer/TulasiJanjanam.jpg',
  },
  {
    name: 'Tvisha Doshi',
    position: 'Outreach Officer',
    image: '/assets/officer/TvishaDoshi.jpg',
  },
];

export const communitCarouselImages: CarouselImage[] = [
  {
    imageLink: '/assets/community/notes_floats.png',
    title: 'Notes and Floats',
    date: new Date(2025, 1, 11),
  },
  {
    date: new Date(2025, 0,2),
    imageLink: '/assets/community/group_photo.jpg',
    title: 'Community'
  }
]
export const communityTestimony: Testimony[] = [
  {
    quote: 'Being a part of the Events team has been such an exciting adventure. There’s nothing more fulfilling than the ability to see the tangible impacts created as a result of your efforts.',
    name: 'Ayomide Tapere',
  },
  {
    quote: "Not only have I gotten the chance to meet so many wonderful people, but I’ve also gotten the opportunity to see all of our efforts have a positive impact on our community."
  },
  {
    quote: "My favorite thing about events is that we get to help bring our organization and community together in a fun and exciting way that’s taught me so much about working on a team."
  }
]
export const communityFAQ: Question[] = [
  {
    question: 'Where can I find upcoming events?',
    answer: 'All events are displayed on the ACM Calendar and make sure to check out ACM’s Instagram and Discord for any updates regarding upcoming events!'
  },
  {
    question: 'What are some events that Events has organized in the past?',
    answer: 'We get to bring to life pretty much any event that involves bringing some fun to the community from our very first Peechi Games (inspired by Squid Games) to picnic nights with live music and so much more!'
  },
  {
    question: 'How do I get involved with the Events Team?',
    answer: 'At the moment, we’re currently not open for applications, but make sure to stay in touch by submitting any event ideas and be on the lookout for recruitment opportunities and upcoming events.'
  }
]