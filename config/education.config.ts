import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { Officer } from './officers.config';

type SubDivision = 'tip' | 'mentor';

export const educationDirectors: Array<Director> = [
  {
    name: 'Farman Ali',
    position: 'Director of Education',
    image: '/assets/officer/FarmanAli.jpg',
  },
  {
    name: 'Agastya Bose',
    position: 'Director of Education',
    image: '/assets/officer/AgastyaBose.jpg',
  },
];

export const educationTestimony: Record<SubDivision, Array<Testimony>> = {
  mentor: [
    {
      quote: 'ACM Mentor program is 10/10',
      name: 'Nirranjan Akilan',
    },
  ],
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
  mentor: [
    {
      quote:
        'Need a helping hand? The ACM mentor program is here for you! Our mentee/mentor pairs are matched between those who share similar interests and aspirations. Our mentorship model fosters a supportive environment akin to a “big brother” relationship, where mentees can benefit from the guidance and wisdom of their more experienced counterparts.',
      images: [],
    },
  ],
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
  mentor: [
    {
      question: 'What is defined as an under or upperclassmen?',
      answer:
        'Underclassmen are students who are in their Freshman or Sophomore year at UTD. Upperclassmen are students who are in their Junior or Senior year at UTD. There may be a few exceptions* (Please refer to: “What if I am a transfer student?“)',
    },
    {
      question: 'How long are you paired with your mentor/mentee for?',
      answer:
        'An academic year (fall to spring semester), although you both will have the choice to stay paired if all conditions still apply (For example: The mentor is not graduating, the mentee is still an underclassmen, you both wish to stay paired, etc)',
    },
    {
      question: 'Who can I contact if I have any questions?',
      answer: 'Feel free to email us at education@acmutd.co',
    },
    {
      question: 'How are pairs matched?',
      answer:
        'We make our mentee/mentor pairs based on what experience and interests the mentor has, match a mentee with similar interests accordingly.',
    },
    {
      question: 'What if I am a transfer student?',
      answer:
        'It is up to the transfer student if they wish to be considered as an ‘underclassmen’ or ‘upperclassmen’',
    },
    {
      question: 'Can I switch mentors if the relationship isn’t working out?',
      answer:
        'Yes, absolutely. If for any reason it is not working out, please email us at education@acmutd.co',
    },
  ],
};

export const educationOfficers: Officer[] = [
  ...educationDirectors,
  {
    name: 'Michael Zhao',
    position: 'TIP Lead',
    image: '/assets/officer/MichaelZhao.png',
  },
  {
    name: 'Caleb Kim',
    position: 'Mentor Program Officer',
    image: '/assets/officer/CalebKim.jpg',
  },
  {
    name: 'Adarsh Goura',
    position: 'Mentor Program Officer',
    image: '/assets/officer/AdarshGoura.jpeg',
  },
  {
    name: 'Ayush Shivhare',
    position: 'Mentor Program Officer',
    image: '/assets/officer/AyushShivhare.jpg',
  },
  {
    name: 'Sid Mylavarapu',
    position: 'Mentor Program Officer',
    image: '/assets/officer/SidMylavarapu.jpg',
  },
  {
    name: 'Ram Gudur',
    position: 'TIP Lead',
    image: '/assets/officer/RamGudur.png',
  },
  {
    name: 'Lalith Vennapusa',
    position: 'TIP Lead',
    image: '/assets/officer/LalithVennapusa.png',
  },
  {
    name: 'Noel Emmanuel',
    position: 'TIP Lead',
    image: '/assets/officer/NoelEmmanuel.jpg',
  },
  {
    name: 'Solomon Pierce',
    position: 'TIP Lead',
    image: '/assets/officer/SolomonPierce.jpg',
  },
  {
    name: 'Aashay Vishwakarma',
    position: 'TIP Lead',
    image: '/assets/officer/AashayVishwakarma.jpg',
  },
];

export const educationImages: {
  mentor: CarouselImage[];
  tip: CarouselImage[];
} = {
  mentor: [
    {
      imageLink: '/assets/education/mentor-1.png',
      title: 'Mentor Program Social #1',
      date: new Date(2024, 2, 22, 19, 17),
    },
    {
      imageLink: '/assets/education/mentor-2.png',
      title: 'Mentor Program Social #1',
      date: new Date(2024, 2, 22, 19, 17),
    },
    {
      imageLink: '/assets/education/mentor-3.png',
      title: 'ACM x SWE x AWS Hackathon',
      date: new Date(2024, 2, 2, 17, 5),
    },
  ],
  tip: [
    {
      imageLink: '/assets/education/tip-1.JPG',
      title: 'TIP Internship Panel',
      date: new Date(2024, 3, 9),
    },
    {
      imageLink: '/assets/education/tip-2.JPG',
      title: 'TIP Internship Panel',
      date: new Date(2024, 3, 9),
    },
    {
      imageLink: '/assets/education/tip-3.JPG',
      title: 'TIP Leads',
      date: new Date(2024, 4, 11),
    },
  ],
};
