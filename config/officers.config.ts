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
  socialLinks?: Record<string, string>;
};

export type ExportedOfficer = {
  firstName: string;
  lastName: string;
  photo: {
    url: string;
  };
  socialLinks: Record<string, string>;
  level: number;
  title: string;
};

type Divisions =
  | 'advisor'
  | 'executive'
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
  advisor: [
    {
      image: '/assets/officer/JohnCole.png',
      name: 'John Cole',
      position: 'ACM Faculty Sponsor',
    },
  ],
  executive: boardOfficers,
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

function splitName(name: string) {
  const trimmedName = name.trim();
  const nameParts = trimmedName.split(/\s+/);

  if (nameParts.length === 0) {
    return { firstName: '', lastName: '' };
  }

  if (nameParts.length === 1) {
    return { firstName: nameParts[0], lastName: '' };
  }

  return {
    firstName: nameParts[0],
    lastName: nameParts.slice(1).join(' '),
  };
}

function toExportedOfficer(officer: Officer): ExportedOfficer {
  const { firstName, lastName } = splitName(officer.name);

  return {
    firstName,
    lastName,
    photo: {
      url: officer.image,
    },
    socialLinks: {},
    level: 0,
    title: officer.position,
  };
}

export const officersByDivision: Record<string, ExportedOfficer[]> = {
  Advisor: divisionOfficerMap.advisor.map(toExportedOfficer),
  Executive: divisionOfficerMap.executive.map(toExportedOfficer),
  Media: divisionOfficerMap.media.map(toExportedOfficer),
  Research: divisionOfficerMap.research.map(toExportedOfficer),
  Development: divisionOfficerMap.development.map(toExportedOfficer),
  Projects: divisionOfficerMap.projects.map(toExportedOfficer),
  Education: divisionOfficerMap.education.map(toExportedOfficer),
  Community: divisionOfficerMap.community.map(toExportedOfficer),
  HackUTD: divisionOfficerMap.hackutd.map(toExportedOfficer),
  Industry: divisionOfficerMap.industry.map(toExportedOfficer),
};
