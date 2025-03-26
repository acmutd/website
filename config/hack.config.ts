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
  {
    name: 'Joshua Das',
    position: 'Experience Lead',
    image: '/assets/officer/JoshuaDas.png',
  },
  {
    name: 'Evan Ngo',
    position: 'Experience Officer',
    image: '/assets/officer/EvanNgo.png',
  },
  {
    name: 'Reiki Hingorani',
    position: 'Experience Officer',
    image: '/assets/officer/ReikiHingorani.png',
  },
  {
    name: 'Alan Roybal',
    position: 'Experience Officer',
    image: '/assets/officer/AlanRoybal.png',
  },
  {
    name: 'Veer Shah',
    position: 'Experience Officer',
    image: '/assets/officer/VeerShah.png',
  },
  {
    name: 'Arjun Kumar',
    position: 'Experience Officer',
    image: '/assets/officer/ArjunKumar.png',
  },
  {
    name: 'Daniel Kim',
    position: 'Experience Officer',
    image: '/assets/officer/DanielKim.png',
  },
  {
    name: 'Adelaide Dunning',
    position: 'Logistics Lead',
    image: '/assets/officer/AdelaideDunning.png',
  },
  {
    name: 'Anwita Gudapurri',
    position: 'Logistics Coordinator',
    image: '/assets/officer/AnwitaGudapurri.png',
  },
  {
    name: 'Shreya Mekala',
    position: 'Logistics Coordinator',
    image: '/assets/officer/ShreyaMekala.png',
  },
  {
    name: 'Roshni Reddhannan',
    position: 'Logistics Coordinator',
    image: '/assets/officer/RoshniReddhannan.png',
  },
  {
    name: 'Sahishnu Sagiraju',
    position: 'Logistics Coordinator',
    image: '/assets/officer/SahishnuSagiraju.png',
  },
  {
    name: 'Alexander Tifase',
    position: 'Logistics Coordinator',
    image: '/assets/officer/AlexanderTifase.png',
  },
  {
    name: 'Bhuvana Madiraju',
    position: 'Industry Lead',
    image: '/assets/officer/BhuvanaMadiraju.png',
  },
  {
    name: 'Sharun Naicker',
    position: 'Industry Coordinator',
    image: '/assets/officer/SharunNaicker.png',
  },
  {
    name: 'Sachi Hansalia',
    position: 'Industry Coordinator',
    image: '/assets/officer/SachiHansalia.png',
  },
  {
    name: 'Ridwan Amin',
    position: 'Industry Coordinator',
    image: '/assets/officer/RidwanAmin.png',
  },
  {
    name: 'Bryan Caraman',
    position: 'Industry Coordinator',
    image: '/assets/officer/BryanCaraman.png',
  },
  {
    name: 'John Luke',
    position: 'Industry Coordinator',
    image: '/assets/officer/JohnLuke.png',
  },
  {
    name: 'Mike Nguyen',
    position: 'Tech Lead',
    image: '/assets/officer/MikeNguyen.png',
  },
  {
    name: 'Wei Seng',
    position: 'Developer',
    image: '/assets/officer/WeiSeng.png',
  },
  {
    name: 'Rayyan Waris',
    position: 'Developer',
    image: '/assets/officer/RayyanWaris.png',
  },
  {
    name: 'Victoria Vynnychok',
    position: 'Developer',
    image: '/assets/officer/VictoriaVynnychok.png',
  },
  {
    name: 'Anh Tu Do',
    position: 'Developer',
    image: '/assets/officer/AnhTuDo.png',
  },
  {
    name: 'Kelly Zhou',
    position: 'Maketing Lead',
    image: '/assets/officer/KellyZhou.png',
  },
  {
    name: 'Mitchell Vu',
    position: 'Video Editor',
    image: '/assets/officer/MitchellVu.png',
  },
  {
    name: 'Shaz Kumar',
    position: 'Social Media',
    image: '/assets/officer/ShazKumar.png',
  },
  {
    name: 'Jordan Tan',
    position: 'Designer',
    image: '/assets/officer/JordanTan.png',
  },
  {
    name: 'Alyssa To',
    position: 'Designer/UI/UX',
    image: '/assets/officer/AlyssaTo.png',
  },
  {
    name: 'Ann Jayan',
    position: 'Designer',
    image: '/assets/officer/AnnJayan.png',
  },
  {
    name: 'Sarah Jacob',
    position: 'Designer',
    image: '/assets/officer/SarahJacob.png',
  },
  {
    name: 'Caleb Bae',
    position: 'Outreach',
    image: '/assets/officer/CalebBae.png',
  },
  {
    name: 'Ayusha Timalsena',
    position: 'Finance',
    image: '/assets/officer/AyushaTimalsena.png',
  },
  {
    name: 'Michael Zhao',
    position: 'Advisor',
    image: '/assets/officer/MichaelZhao.png',
  },
];

export const hackTestimony: Testimony[] = [
{
  quote: `Being on the HackUTD team has given me the chance to build something incredible with a group of people who care just as much as I do. It’s so rewarding to see the event come to life after months of planning!`
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
  answer: `HackUTD is the official student-run hackathon of UT Dallas, organized by ACM. It’s the largest university hackathon in North Texas, welcoming hundreds of students to build innovative projects over a weekend.`
},
{
  question: `Do I need prior coding experience to participate in HackUTD?`,
  answer: `Not at all! HackUTD is beginner-friendly and offers workshops, mentors, and starter kits to help you learn and build, even if it's your first hackathon.`
,
},
{
  question: `How can I get involved with the HackUTD team?`,
  answer: `Recruitment typically happens at the start of each semester through ACM UTD. Keep an eye out for applications, and don’t be afraid to reach out to current team members for advice!`
}]
export const hackCarouselImages: CarouselImage[] = [
  {
    imageLink: '/assets/about/hackutd/hackutd.png',
    title: 'HackUTD X',
    date: new Date('2024-03-16'),
  },
  {
    imageLink: '/assets/about/hackutd/hackutd.png',
    title: 'HackUTD X',
    date: new Date('2024-03-16'),
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