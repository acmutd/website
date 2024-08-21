import { educationDirectors } from './education.config'
import { type Officer } from './officers.config'
import { projectDirectors } from './projects.config'

export const boardOfficers: Officer[] = [
  {
    image: '/assets/officer/FarhanJamil.png',
    name: 'Farhan Jamil',
    position: 'ACM President',
  },
  {
    image: '/assets/officer/ShoaibHuq.png',
    name: 'Shoaib Huq',
    position: 'ACM Vice President',
  },
  {
    image: '/assets/officer/MichaelHellman.png',
    name: 'Michael Hellman',
    position: 'ACM Vice President',
  },
  {
    image: '/assets/officer/BradleyMixon.png',
    name: 'Bradley Mixon',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/IsindiCela.png',
    name: 'Isindi Cela',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/ShazKumar.png',
    name: 'Shaz Kumar',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/MikeNguyen.png',
    name: 'Mike Nguyen',
    position: 'Director of Development',
  },
  ...educationDirectors,
  {
    name: 'Purva Pawar',
    position: 'HackUTD Director',
    image: '/assets/officer/PurvaPawar.png',
  },
  {
    name: 'Salman Jaher',
    position: 'HackUTD Director',
    image: '/assets/officer/SalmanJaher.png',
  },
  {
    name: 'Kristine Thomas',
    position: 'Director of Industry',
    image: '/assets/officer/KristineThomas.png'
  },
  ...projectDirectors,
  {
    name: 'Oscar Lay',
    position: 'Research Director',
    image: '/assets/officer/OscarLay.png',
  },
  {
    name: 'Elijah Walker',
    position: 'Research Director',
    image: '/assets/officer/ElijahWalker.png',
  },
]