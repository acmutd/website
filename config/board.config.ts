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
    name: 'Manasi Vipat',
    position: 'Director of Industry',
    image: '/assets/officer/ManasiVipat.jpg'
  },
  ...projectDirectors,
  {
    name: 'Oscar Lay',
    position: 'Director of Research',
    image: '/assets/officer/OscarLay.jpg',
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
    image: '/assets/officer/SusanZhang.jpg',
    name: 'Susan Zhang',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/FarhanJamil.jpg',
    name: 'Farhan Jamil',
    position: 'Director of Development',
  },
  ...educationDirectors,
  {
    image: '/assets/officer/ShannonCarter.jpg',
    name: 'Shannon Carter',
    position: 'Director of Community',
  },
  {
    image: '/assets/officer/MercedesXiong.jpg',
    name: 'Mercedes Xiong',
    position: 'Director of Community',
  },
]