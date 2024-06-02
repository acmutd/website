import { educationDirectors } from './education.config'
import { type Officer } from './officers.config'
import { projectDirectors } from './projects.config'

export const boardOfficers: Officer[] = [
  {
    image: '/assets/officer/OfficerImage.png',
    name: 'Farhan Jamil',
    position: 'ACM President',
  },
  {
    image: '/assets/officer/OfficerImage.png',
    name: 'Shoaib Huq',
    position: 'ACM Vice President',
  },
  {
    image: '/assets/officer/OfficerImage.png',
    name: 'Michael Hellman',
    position: 'ACM Vice President',
  },
  {
    image: '/assets/officer/OfficerImage.png',
    name: 'Bradley Mixon',
    position: 'Co-Director of Community',
  },
  {
    image: '/assets/officer/OfficerImage.png',
    name: 'Isindi Cela',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/OfficerImage.png',
    name: 'Shaz Kumar',
    position: 'Director of Media',
  },
  {
    image: '/assets/officer/OfficerImage.png',
    name: 'Mike Nguyen',
    position: 'Director of Development',
  },
  ...educationDirectors,
  {
    name: 'Purva Pawar',
    position: 'HackUTD Director',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Salman Jaher',
    position: 'HackUTD Director',
    image: '/assets/officer/OfficerImage.png',
  },
  {
    name: 'Kristine Thomas',
    position: 'Director of Industry',
    image: '/assets/officer/OfficerImage.png'
  },
  ...projectDirectors
]