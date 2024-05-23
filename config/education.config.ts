import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { Officer } from './officers.config';

type SubDivision = 'tip' | 'mentor';

export const educationDirectors: Array<Director> = [
  {
    name: 'Kanishk Garg',
    position: 'TIP Director',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Aarian Ahsan',
    position: 'Mentor Director',
    image: '/assets/officer/OfficerImage.png',
  },
];

export const educationTestimony: Record<SubDivision, Array<Testimony>> = {
  mentor: [],
  tip: [
    {
      quote:
        'TIP was a very enlightening and enjoyable experience! I learned a lot on the thought process of a computer scientist, and started adopting it myself. I would highly recommend this to anyone and everyone wanting to pursue CS.',
      name: 'Dylan Dam',
    },
  ],
};

type Quote = {
  quote: string;
  images: string[];
};

export const workshops: Record<SubDivision, Quote[]> = {
  mentor: [],
  tip: [
    {
      quote:
        'Trying to land an internship? TIP is a 10 week long program, focused on preparing you for technical and behavioral interviews. The program will help build your intuition and practice foundational Data Structures and Algorithms present in most technical interviews. This is a foundational program aimed at those looking for their first internship and/or for those who find the technical interview prep process daunting. It will provide a structured environment to kickstart your journey guided by seasoned mentors.',
      images: [],
    },
  ],
};

export const educationFAQ: Record<SubDivision, Question[]> = {
  tip: [
    {
      question: 'How long does TIP last',
      answer: 'TIP is a 10 week long program',
    },
    {
      question: 'How is TIP structured?',
      answer:
        'Workshops every Monday from 8:30PM to 10PM. Assigned pre-work reading (approx. 30 minutes). Homework Questions (approx. 2-3 hours)',
    },
    {
      question: 'What topics will be covered?',
      answer:
        'Arrays/Strings, Linked Lists, Hashing, Queues + Stacks, Trees, Graphs, Behavioral(Internship Panel), Advanced Graphs, DP',
    },
  ],
  mentor: [],
};

export const educationOfficers: Officer[] = [
  ...educationDirectors,
  {
    name: 'Agastya Bose',
    position: 'TIP Officer',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Michael Zhao',
    position: 'TIP Officer',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Abhay Iyer',
    position: 'TIP Officer',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Ben Wowo',
    position: 'TIP Officer',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'JC Garza',
    position: 'TIP Officer',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Om Badhe',
    position: 'TIP Officer',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Sisi Aarukapalli',
    position: 'Mentor Program Lead',
    image: '/assets/officer/OfficerImage.png',
  },
];

export const educationImages: {
  mentor: CarouselImage[];
  tip: CarouselImage[];
} = {
  mentor: [
    {
      imageLink: '/assets/research/ResearchCarousel.png',
      title: 'Projects Presentation Night 1',
      date: new Date(2022, 5, 29, 16, 7),
    },
    {
      imageLink: '/assets/research/ResearchCarousel.png',
      title: 'Projects Presentation Night 2',
      date: new Date(2022, 5, 29, 16, 7),
    },
    {
      imageLink: '/assets/research/ResearchCarousel.png',
      title: 'Projects Presentation Night 3',
      date: new Date(2022, 5, 29, 16, 7),
    },
  ],
  tip: [
    {
      imageLink: '/assets/research/ResearchCarousel.png',
      title: 'Projects Presentation Night 1',
      date: new Date(2022, 5, 29, 16, 7),
    },
    {
      imageLink: '/assets/research/ResearchCarousel.png',
      title: 'Projects Presentation Night 2',
      date: new Date(2022, 5, 29, 16, 7),
    },
    {
      imageLink: '/assets/research/ResearchCarousel.png',
      title: 'Projects Presentation Night 3',
      date: new Date(2022, 5, 29, 16, 7),
    },
  ],
};
