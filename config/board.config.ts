import { educationDirectors } from './education.config'
import { type Officer } from './officers.config'
import { projectDirectors } from './projects.config'

export const boardOfficers: Officer[] = [
  {
    image: '/assets/officer/Michael_Hellman.jpg',
    name: 'Michael Hellman',
    position: 'ACM President',
  },
  {
    image: '/assets/officer/Elijah_Walker.jpg',
    name: 'Elijah Walker',
    position: 'ACM Vice President',
  },
  {
    name: 'Adelaide Dunning',
    position: 'Director of HackUTD',
    image: '/assets/officer/Addy_Dunning.jpg',
  },
  {
    name: 'Kelly Zhou',
    position: 'Director of HackUTD',
    image: '/assets/officer/Kelly_Zhou.jpg',
  },
  {
    name: 'Ayusha Timalsena',
    position: 'Director of Finance',
    image: '/assets/officer/Ayusha_Timalsena.jpg',
  },
  {
    name: 'Anika Guin',
    position: 'Director of Industry',
    image: '/assets/officer/Anika_Guin.jpg'
  },
   {
    name: 'Nihita Soma',
    position: 'Director of Industry',
    image: '/assets/officer/Nihita_Soma.JPG'
  },
  ...projectDirectors,
  {
    name: 'Purva Patel',
    position: 'Director of Research',
    image: '/assets/officer/Purva_Patel.jpg',
  },
  {
    name: 'Sahas Sharma',
    position: 'Director of Research',
    image: '/assets/officer/Sahas_Sharma.jpg',
  },
  {
    image: '/assets/officer/Hiba_Mubeen.jpg',
    name: 'Hiba Mubeen',
    position: 'Director of Marketing',
  },
  {
    image: '/assets/officer/Sneha_Maram.jpg',
    name: 'Sneha Maram',
    position: 'Director of Design',
  },
    {
    image: '/assets/officer/Evan_Wright.png',
    name: 'Evan Wright',
    position: 'Director of Development',
  },
  ...educationDirectors,
  {
    image: '/assets/officer/Vyshnav_Vijish.JPG',
    name: 'Vyshnav Vijish',
    position: 'Director of Outreach',
  },
  {
    image: '/assets/officer/Mercedes_Xiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Director of Campus',
  },
]