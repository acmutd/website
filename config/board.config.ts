import { educationDirectors } from './education.config'
import { type Officer } from './officers.config'
import { projectDirectors } from './projects.config'

export const boardOfficers: Officer[] = [
  {
    image: '/assets/officer/MichaelHellman.jpg',
    name: 'Michael Hellman',
    position: 'ACM President',
  },
  {
    image: '/assets/officer/ElijahWalker.jpg',
    name: 'Elijah Walker',
    position: 'ACM Vice President',
  },
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
    name: 'Ayusha Timalsena',
    position: 'Director of Finance',
    image: '/assets/officer/AyushaTimalsena.jpg',
  },
  {
    name: 'Anika Guin',
    position: 'Director of Industry',
    image: ''
  },
   {
    name: 'Nihita Soma',
    position: 'Director of Industry',
    image: ''
  },
  ...projectDirectors,
  {
    name: 'Purva Patel',
    position: 'Director of Research',
    image: '',
  },
  {
    name: 'Sahas Sharma',
    position: 'Director of Research',
    image: '/assets/officer/SahasSharma.jpg',
  },
  {
    image: '/assets/officer/HibaMubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'Director of Media',
  },
  {
    image: '',
    name: 'Sneha Maram',
    position: 'Director of Media',
  },
    {
    image: '/assets/officer/EvanWright.png',
    name: 'Evan Wright',
    position: 'Director of Development',
  },
  ...educationDirectors,
  {
    image: '',
    name: 'Vyshnav Vijish',
    position: 'Director of Community',
  },
  {
    image: '/assets/officer/MercedesXiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Director of Community',
  },
]