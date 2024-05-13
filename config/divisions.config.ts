import { Question, Testimony } from '../lib/types';
import { educationDirectors, educationFAQ, educationTestimony } from './education.config';
import { projectDirectors, projectsFAQ, projectsTestimony } from './projects.config';

type Division =
  | {
      division: 'projects' | 'research';
    }
  | {
      division: 'education';
      sub: 'tip' | 'mentor';
    };
export type Director = {
  name: string;
  position: string;
  image: string;
};

export function getDirectors(division: Division['division']): Director[] {
  switch (division) {
    case 'projects':
      return projectDirectors;
    case 'research':
      return [];
    case 'education':
      return educationDirectors;
  }
}

export function getTestimony(section: Division): Testimony[] {
  switch (section.division) {
    case 'projects':
      return projectsTestimony;
    case 'research':
      return [];
    case 'education':
      return educationTestimony[section.sub];
  }
}

export function getFAQ(section: Division): Question[] {
  switch (section.division) {
    case 'education':
      return educationFAQ[section.sub];
    case 'projects':
      return projectsFAQ;
    case 'research':
      return [];
  }
}
