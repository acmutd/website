import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director } from './divisions.config';
import { type Officer } from './officers.config';

type SubDivision = 'campus' | 'outreach';

export const communityDirectors: Director[] = [
 {
    image: '/assets/officer/Mercedes_Xiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Director of Campus',
  },
  {
    image: '/assets/officer/Vyshnav_Vijish.jpg',
    name: 'Vyshnav Vijish',
    position: 'Director of Outreach',
  },
]

export const communityOfficers: Officer[] = [
{
    image: '/assets/officer/Mercedes_Xiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Director of Campus',
  },
  {
    image: '/assets/officer/Vyshnav_Vijish.JPG',
    name: 'Vyshnav Vijish',
    position: 'Director of Outreach',
  },

  {
    image: '/assets/officer/Anusha_Patel.jpeg',
    name: 'Anusha Patel',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Suhani_Rana.jpg',
    name: 'Suhani Rana',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Joseph_Botros.png',
    name: 'Joseph Botros',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Varsha_Shashishekar.jpg',
    name: 'Varsha Shashishekar',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Mayo_Akinyede.jpeg',
    name: 'Mayo Akinyede',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Ryan_Edwards.jpeg',
    name: 'Ryan Edward',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Sudiksha_Dineshkumar.JPG',
    name: 'Sudiksa Dineshkumar',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Syed_Kazmi.JPG',
    name: 'Syed Kazmi',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Mohammed_Gaggutur.jpg',
    name: 'Mohammed Gaggutur',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Pratishtha_Rao.jpg',
    name: 'Pratishtha Rao',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Varun_Bhupathiraju.jpeg',
    name: 'Varun Bhupathiraju',
    position: 'Events Officer',
  },
  {
    image: '/assets/officer/Shriya_Kalyan.png',
    name: 'Shriya Kalyan',
    position: 'Archives Officer',
  },
  {
    image: '/assets/officer/Ayomide_Tapere.jpg',
    name: 'Ayomide Tapere',
    position: 'Archives Officer',
  },
  {
    image: '/assets/officer/Manaar_Quadri.jpg',
    name: 'Manaar Quadri',
    position: 'Archives Officer',
  },
  {
    image: '/assets/officer/Sameeraa_Kandalgaonkar.JPG',
    name: 'Sameeraa Kandalgaonkar',
    position: 'Archives Officer',
  },
  {
    image: '/assets/officer/Kavya_Seenuvasan.JPG',
    name: 'Kavya Seenuvasan',
    position: 'Archives Officer',
  },
  {
    image: '/assets/officer/Frabina_Edwin.png',
    name: 'Frabina Edwin',
    position: 'Archives Officer',
  },
  {
    image: '/assets/officer/Nidhi_Majoju.JPG',
    name: 'Nidhi Majoju',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Advay_Chandramouli.jpg',
    name: 'Advay Chandramouli',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Ali_Ghorbani.jpg',
    name: 'Ali Ghorbani',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Dhivyesh_Prithviraj.JPG',
    name: 'Dhivyesh Prithiviraj',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Dana_Ibrahim.JPG',
    name: 'Dana Ibrahim',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Gerardo_Martinez.JPG',
    name: 'Gerardo Martinez',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Hannah_Rauch.JPG',
    name: 'Hannah Rauch',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Shreya_Singeravel.JPG',
    name: 'Shreya Singaravel',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Tulasi_Janjanam.JPG',
    name: 'Tulasi Janjanam',
    position: 'Outreach Officer',
  },
  {
    image: '/assets/officer/Tvisha_Doshi.JPG',
    name: 'Tvisha Doshi',
    position: 'Outreach Officer',
  },
   {
    image: '/assets/officer/Shannon_Carter.jpg',
    name: 'Shannon Carter',
    position: 'Outreach Advisor',
  },
];

export const communityImages: {
  campus: CarouselImage[];
  outreach: CarouselImage[];
} = {
  campus: [
    {
      date: new Date(2025, 0, 2),
      imageLink: '/assets/community/campus/group_photo.JPG',
      title: 'ACM Campus Officers'
    },
    {
      imageLink: '/assets/community/campus/twilight_tunes.jpg',
      title: 'Twilight Tunes',
      date: new Date(2025, 10, 5),
    },
    {
      imageLink: '/assets/community/campus/notes_and_floats.png',
      title: 'Notes and Floats',
      date: new Date(2025, 1, 11),
    },
  ],
  outreach: [
    {
      imageLink: '/assets/community/outreach/group_photo.jpg',
      title: 'Outreach (temp)',
      date: new Date(2025, 1, 11),
    },
  ]
}

export const communityTestimony: Record<SubDivision, Array<Testimony>> = {
  campus: [
    {
      quote: 'Being a part of the Campus team has been such an exciting adventure. There’s nothing more fulfilling than the ability to see the tangible impacts created as a result of your efforts.',
      name: 'Ayomide Tapere',
    },
    {
      quote: 'Not only have I gotten the chance to meet so many wonderful people, but I’ve also gotten the opportunity to see all of our efforts have a positive impact on our community.',
      name: '',
    },
    {
      quote: 'My favorite thing about Campus is that we get to help bring our organization and community together in a fun and exciting way that’s taught me so much about working on a team.',
      name: '',
    }
  ],
  outreach: [
    {
      quote: 'ACM Outreach is very cool!',
      name: 'Jeydin Pham',
    }
  ],
}

export const communityFAQ: Record<SubDivision, Question[]> = {
  campus: [
    {
      question: 'What is the application process like?',
      answer: 'The first step is to apply! Applications will include a series of questions to get to know you a little bit more and give us some insight about what you’d like to bring to ACM Campus! After these applications, we’ll select a few candidates to interview before deciding _____. But remember! Events and Archives applications open at different times so make sure to apply to the team you’d like to be on!',
    },
    {
      question: 'How is ACM Campus structured?',
      answer: 'ACM Campus is made of two teams: Events and Archives. Events handles all of the social events like Twilight Tunes and Peechi Games while Archives is a team of designers and writers, in charge of creating a magazine every semester that covers all of the behind the scenes of ACM for alumni and sponsors.',
    },
    {
      question: 'Do I need to have prior experience in event planning to join ACM Events?',
      answer: 'Nope! What we’re really looking for are students',
    },
    {
      question: 'What are some events that the Events team has hosted in the past?',
      answer: 'We get to',
    }
  ],
  outreach: [
    {
      question: 'What is ACM Community Outreach?',
      answer: 'ACM Community Outreach is a division of ACM that focuses on increasing STEM engagement in K-12 students, particularly in underserved schools. We organize various outreach events and programs to inspire and educate the next generation of technologists.'
    }
  ]
};