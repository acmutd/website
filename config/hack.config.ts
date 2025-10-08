import { Question, Testimony } from '../lib/types';
import { CarouselImage, Director, Projects } from './divisions.config';
import { type Officer } from './officers.config';

export const hackDirectors: Director[] = [
  {
    name: 'Adelaide Dunning',
    position: 'Director of HackUTD',
    image: '/assets/officer/AddyDunning.jpg',
  },
  {
    name: 'Kelly Zhou',
    position: 'Director of HackUTD',
    image: '/assets/officer/KellyZhou.jpg',
  },
]

export const hackOfficers: Officer[] = [
  {
    name: 'Adelaide Dunning',
    position: 'Director of HackUTD',
    image: '/assets/officer/AddyDunning.jpg',
  },
  {
    name: 'Kelly Zhou',
    position: 'Director of HackUTD',
    image: '/assets/officer/KellyZhou.jpg',
  },
  { name: 'Purva Pawar', position: 'Advisor', image: '/assets/officer/PurvaPawar.png', },

  { name: "Rayyan Waris", position: "Tech Lead", image: "/assets/officer/hackutd/rayyan-waris.jpg" },
  { name: "Shaswat Kumar", position: "Tech Officer", image: "/assets/officer/hackutd/shaswat-kumar.jpg" },
  { name: "Sreevasan Sivasubramanian", position: "Tech Officer", image: "/assets/officer/hackutd/sreevasan-sivasubramanian.jpg" },
  { name: "Ayro Escobar", position: "Tech Officer", image: "/assets/officer/hackutd/ayro-escobar.jpg" },
  { name: "Andrew Dmitrievsky", position: "Tech Officer", image: "/assets/officer/hackutd/andrew-dmitrievsky.jpg" },
  { name: "Abhiram Tadepalli", position: "Tech Officer", image: "/assets/officer/hackutd/abhiram-tadepalli.jpg" },

  { name: "Jordan Tan", position: "Marketing Lead", image: "/assets/officer/hackutd/jordan-tan.jpg" },
  { name: "Sristi Srinivasan", position: "Marketing Officer", image: "/assets/officer/hackutd/sristi-srinivasan.jpg" },
  { name: "Mitchell Vu", position: "Marketing Officer", image: "/assets/officer/hackutd/mitchell-vu.jpg" },
  { name: "Ann Jayan", position: "Marketing Officer", image: "/assets/officer/hackutd/ann-jayan.jpg" },
  { name: "Sarah Jacob", position: "Marketing Officer", image: "/assets/officer/hackutd/sarah-jacob.jpg" },
  { name: "Fletcher Lauber", position: "Marketing Officer", image: "/assets/officer/hackutd/fletcher-lauber.jpg" },
  { name: "Faith Kim", position: "Marketing Officer", image: "/assets/officer/hackutd/faith-kim.jpg" },
  { name: "Kavi Namburi", position: "Marketing Officer", image: "/assets/officer/hackutd/kavi-namburi.jpg" },
  { name: "Tien Phan", position: "Marketing Officer", image: "/assets/officer/hackutd/tien-phan.jpg" },

  { name: "Ridwan Amin", position: "Industry Lead", image: "/assets/officer/hackutd/ridwan-amin.jpg" },
  { name: "Sachi Hansalia", position: "Industry Officer", image: "/assets/officer/hackutd/sachi-hansalia.jpg" },
  { name: "Bryan Caraman", position: "Industry Officer", image: "/assets/officer/hackutd/bryan-caraman.jpg" },
  { name: "John Luke", position: "Industry Officer", image: "/assets/officer/hackutd/john-luke.jpg" },
  { name: "Abdala Aljewarane", position: "Industry Officer", image: "/assets/officer/hackutd/abdala-aljewarane.jpg" },
  { name: "Shraddha Subash", position: "Industry Officer", image: "/assets/officer/hackutd/shraddha-subash.jpg" },
  { name: "Nandini Paidesetty", position: "Industry Officer", image: "/assets/officer/hackutd/nandini-paidesetty.jpg" },

  { name: "Anwita Gudapuri", position: "Logistics Lead", image: "/assets/officer/hackutd/anwita-gudapuri.jpg" },
  { name: "Shreya Mekala", position: "Logistics Officer", image: "/assets/officer/hackutd/shreya-mekala.jpg" },
  { name: "Sahishnu Sagiraju", position: "Logistics Officer", image: "/assets/officer/hackutd/sahishnu-sagiraju.jpg" },
  { name: "Sofia Thomas", position: "Logistics Officer", image: "/assets/officer/hackutd/sofia-thomas.jpg" },
  { name: "Soumika Seelam", position: "Logistics Officer", image: "/assets/officer/hackutd/soumika-seelam.jpg" },
  { name: "Dhivyesh Prithiviraj", position: "Logistics Officer", image: "/assets/officer/hackutd/dhivyesh-prithiviraj.jpg" },

  { name: "Daniel Kim", position: "Experience Lead", image: "/assets/officer/hackutd/daniel-kim.jpg" },
  { name: "Reiki Hingorani", position: "Experience Officer", image: "/assets/officer/hackutd/reiki-hingorani.jpg" },
  { name: "Alan Roybal", position: "Experience Officer", image: "/assets/officer/hackutd/alan-roybal.jpg" },
  { name: "Veer Shah", position: "Experience Officer", image: "/assets/officer/hackutd/veer-shah.jpg" },
  { name: "Liana Forster", position: "Experience Officer", image: "/assets/officer/hackutd/liana-forster.jpg" },
  { name: "Sahas Sharma", position: "Experience Officer", image: "/assets/officer/hackutd/sahas-sharma.jpg" },
  { name: "Sunay Shehaan", position: "Experience Officer", image: "/assets/officer/hackutd/sunay-shehaan.jpg" },

  { name: "Ayusha Timalsena", position: "Finance Lead", image: "/assets/officer/hackutd/ayusha-timalsena.jpg" },
  { name: "Sree Aatish Bommisetty", position: "Finance Officer", image: "/assets/officer/hackutd/sree-aatish-bommisetty.jpg" },
  { name: "Leeza Paul", position: "Finance Officer", image: "/assets/officer/hackutd/leeza-paul.jpg" }
];

export const hackTestimony: Testimony[] = [
  {
    quote: `Being on the HackUTD team has given me the chance to build something incredible with a group of people who care just as much as I do. It's so rewarding to see the event come to life after months of planning!`
  },
  {
    quote: `HackUTD has taught me how to manage large-scale logistics while still keeping the heart of it all—creating a welcoming, inspiring space for hackers`
  },
  {
    quote: `I joined HackUTD for the resume boost, but I stayed for the late-night planning sessions, the laughs, and the energy of bringing tech and people together`
  }
]

export const hackFAQ: Question[] = [{
  question: 'What is HackUTD?',
  answer: `HackUTD is the official student-run hackathon of UT Dallas, organized by ACM. It's the largest university hackathon in North Texas, welcoming hundreds of students to build innovative projects over a weekend.`
},
{
  question: `Do I need prior coding experience to participate in HackUTD?`,
  answer: `Not at all! HackUTD is beginner-friendly and offers workshops, mentors, and starter kits to help you learn and build, even if it's your first hackathon.`
  ,
},
{
  question: `How can I get involved with the HackUTD team?`,
  answer: `Recruitment typically happens at the start of each semester through ACM UTD. Keep an eye out for applications, and don't be afraid to reach out to current team members for advice!`
}]
export const hackCarouselImages: CarouselImage[] = [
  {
    imageLink: '/assets/hackutd/_SMJ0048.JPG',
    title: 'HackUTD Ripple Effect',
    date: new Date(2024, 10, 16),
  },
  {
    imageLink: '/assets/hackutd/HackUTD_team_pic.png',
    title: 'HackUTD Team',
    date: new Date('2024-03-16'),
  },
  {
    imageLink: '/assets/hackutd/SMJ01455.JPG',
    title: 'HackUTD Ripple Effect',
    date: new Date(2024, 10, 16),
  },


]
export const hackWinners: Projects[] = [
  {
    name: 'Cheddarboxd',
    placement: 'Winner of Pinata and Best Solo Hack ',
    desc: `It's a social cheese rating and sharing website. Users can share their taste in cheeses and see what other people are trying as well.`,
    image: '/assets/hackutd/cheddarboxd.png',
    members: ['Joe Malatesta'],
    links: [{
      type: 'github',
      link: 'https://github.com/joemmalatesta/CheddarBoxd'
    },
    {
      type: 'video',
      link: 'https://youtu.be/ijk-pzGl-H0'
    }
    ],
    manager: ''
  },
  {
    name: 'Roomie',
    placement: 'Winner of HackUTD General and Hardware Track',
    desc: `As college students, we are always looking for a place to study. The issue is, that spending so much time looking around buildings for unoccupied rooms is something that is extremely inefficient and tiring. We decided we wanted to put an end to this arduous endeavor by creating an application that takes into account the classes that are currently going on and rooms that are currently taken to reveal rooms that are available to be used for studying immediately.`,
    image: '/assets/hackutd/roomie.jpg',
    members: ["Nicholas Karr", 'Bhavya Rayankula', 'Mason Thomas', 'Devansh A'],
    links: [{
      type: 'video',
      link: 'https://youtu.be/TST5XnsnWGM'
    }],
  },
  {
    name: 'Capsule',
    desc: `Capsule, allows you to upload data into a "capsule" and retrieve it very quickly via URL, NFC, or QR Codes. This allows the user to store these unique links, anywhere they want! For example, you could print out the QR code and scale it down and put it behind a pet tag so the information is accessible to anyone with a smartphone. You can also do many other things with it for instance, uploading files into a specific capsule for later and storing it inside your wallet. (By using an NFC card)`,
    image: '/assets/hackutd/capsule.jpg',
    members: ['Erick Le', 'Annel Suarez'],
    links: [
      {
        type: 'video',
        link: 'https://youtu.be/sh2B0vi0H2c'
      }
    ],
    placement: 'Winner of Pinata'
  }
]