type Divisions = 'projects' | 'research' | 'education';

type Director = {
  name: string;
  image: string;
};

export const DivisionDirectors: Record<Divisions, Director[]> = {
  research: [
    {
      name: 'Saksham Sangrula',
      image: '/assets/projects/projdir_1.jpeg',
    },
    {
      name: 'Saksham Sangrula',
      image: '/assets/projects/projdir_1.jpeg',
    },
  ],
  education: [
    {
      name: 'Saksham Sangrula',
      image: '/assets/projects/projdir_1.jpeg',
    },
    {
      name: 'Saksham Sangrula',
      image: '/assets/projects/projdir_1.jpeg',
    },
  ],
  projects: [
    {
      name: 'David Tepeneu',
      image: '/assets/officer/projdir_1.jpeg',
    },
    {
      name: 'Karina Batra',
      image: '/assets/officer/projdir_1.jpeg',
    },
  ],
};
