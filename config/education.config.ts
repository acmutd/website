import { Question, Testimony } from '../lib/types';

type SubDivision = 'tip' | 'mentor';
export type Director = {
  name: string;
  description: string;
};

export const directors: Array<Director> = [
  {
    name: 'Kanishk Garg',
    description: 'TIP(Technical Interview Prep) Director.',
  },
  {
    name: 'Aarian Ahsan',
    description: 'Mentor/Mentee Director',
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
