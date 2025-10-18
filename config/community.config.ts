import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

export const communityDirectors: Director[] = [
  {
    image: '/assets/officer/ShannonCarter.jpg',
    name: 'Shannon Carter',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/MercedesXiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Co-Director of Community',
  },
]

export const communityOfficers: Officer[] = [
  {
    image: '/assets/officer/ShannonCarter.jpg',
    name: 'Shannon Carter',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/MercedesXiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/BradleyMixon.JPG',
    name: 'Bradley Mixon',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/LoganDane.jpg',
    name: 'Logan Dane',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AnshNaikele.jpg',
    name: 'Ansh Naikele',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/NidhiMajoju.jpg',
    name: 'Nidhi Majoju',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AdvayChandramouli.jpg',
    name: 'Advay Chandramouli',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AliGhorbani.jpg',
    name: 'Ali Ghorbani',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/VyshnavVijish.jpg',
    name: 'Vyshnav Vijish',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/AnthonyAbubakar.jpg',
    name: 'Anthony Abubakar',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/VivianNguyen.jpg',
    name: 'Vivian Nguyen',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/AnushaPatel.jpg',
    name: 'Anusha Patel',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/ShriyaKalyan.jpg',
    name: 'Shriya Kalyan',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/AyomideTapere.jpg',
    name: 'Ayomide Tapere',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/SuhaniRana.jpg',
    name: 'Suhani Rana',
    position: 'Events Officer',
  },
];

export const communityOutreachCarouselImages: CarouselImage[] = [
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
export const communityOutreachTestimony: Testimony[] = [
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
export const communityOutreachFAQ: Question[] = [
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

// Campus-specific (currently reuse outreach data as sensible defaults)
export const communityCampusCarouselImages: CarouselImage[] = communityOutreachCarouselImages;
export const communityCampusTestimony: Testimony[] = communityOutreachTestimony;
export const communityCampusFAQ: Question[] = communityOutreachFAQ;

// Backwards-compatible aggregate exports used by older code paths
export const communitCarouselImages = communityOutreachCarouselImages;
export const communityTestimony = communityOutreachTestimony;
export const communityFAQ = communityOutreachFAQ;