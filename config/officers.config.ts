import { boardOfficers } from './board.config';
import { communityOfficers } from './community.config';
import { developmentOfficers } from './development.config';
import { educationOfficers } from './education.config';
import { hackOfficers } from './hack.config';
import { industryOfficers } from './industry.config';
import { mediaOfficers } from './media.config';
import { projectsOfficers } from './projects.config';
import { researchOfficers } from './research.config';
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
  board: boardOfficers,
  community: communityOfficers,
  development: developmentOfficers,
  education: educationOfficers,
  hackutd: hackOfficers,
  industry: industryOfficers,
  media: mediaOfficers,
  research: researchOfficers,
  projects: projectsOfficers,
};
