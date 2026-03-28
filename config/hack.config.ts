import { Question, Testimony } from '../lib/types';
import { CarouselImage, Projects } from './divisions.config';

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