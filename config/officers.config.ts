import { communityOfficers } from './community.config';
import { educationOfficers } from './education.config';
import { industryOfficers } from './industry.config';
import { mediaOfficers } from './media.config';
import { projectsOfficers } from './projects.config';
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
  community: communityOfficers,
  development: Array.from({ length: 12 }, () => defaultOfficer),
  education: educationOfficers,
  hackutd: Array.from({ length: 12 }, () => defaultOfficer),
  industry: industryOfficers,
  media: mediaOfficers,
  research: Array.from({ length: 12 }, () => defaultOfficer),
  projects: projectsOfficers,
};
