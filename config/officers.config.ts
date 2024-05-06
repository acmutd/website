export type Officer = {
  name: string;
  position: string;
  image: string;
};

const defaultOfficer: Officer = {
  name: 'Saksham Sangrula',
  position: 'President',
  image: '/assets/officer/OfficerImage.png',
};

type Divisions =
  | 'board'
  | 'media'
  | 'research'
  | 'development'
  | 'projects'
  | 'education'
  | 'community'
  | 'hackutd'
  | 'industry';

export const divisionOfficerMap: Record<Divisions, Officer[]> = {
  board: Array.from({ length: 12 }, () => defaultOfficer),
  community: Array.from({ length: 12 }, () => defaultOfficer),
  development: Array.from({ length: 12 }, () => defaultOfficer),
  education: Array.from({ length: 12 }, () => defaultOfficer),
  hackutd: Array.from({ length: 12 }, () => defaultOfficer),
  industry: Array.from({ length: 12 }, () => defaultOfficer),
  media: Array.from({ length: 12 }, () => defaultOfficer),
  research: Array.from({ length: 12 }, () => defaultOfficer),
  projects: [
    {
      name: 'David Tepeneu',
      position: 'Projects Director',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Karina Batra',
      position: 'Projects Director',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Abel Thomas',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Abis Naqvi',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Avanthi Reddy',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Clara Conner',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Harper Wood',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Kacie Yee',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Kanchan Javalkar',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Muaaz Abed',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Nadeeba Atiqui',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Ridwan Amin',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
    {
      name: 'Safa Mohammed',
      position: 'Project Lead',
      image: '/assets/officer/OfficerImage.png',
    },
  ],
};
