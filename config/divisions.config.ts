import { Question, Testimony } from '../lib/types';
import {
  educationDirectors,
  educationFAQ,
  educationImages,
  educationTestimony,
} from './education.config';
import {
  projectDirectors,
  projectImages,
  projectsFAQ,
  projectsTestimony,
  projectsWinners,
} from './projects.config';
import {
  researchCarousel,
  researchDirectors,
  researchFAQ,
  researchTestimony,
  researchWinners,
} from './research.config';

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

export type CarouselImage = {
  imageLink: string;
  title: string;
  date: Date;
};

type ProjectLink = {
  type: 'github' | 'video';
  link: string;
};

export type Projects = {
  placement: string;
  name: string;
  desc: string;
  image: string;
  members: string[];
  links: ProjectLink[];
  manager: string;
};

export function getDirectors(division: Division['division']): Director[] {
  switch (division) {
    case 'projects':
      return projectDirectors;
    case 'research':
      return researchDirectors;
    case 'education':
      return educationDirectors;
  }
}

export function getTestimony(section: Division): Testimony[] {
  switch (section.division) {
    case 'projects':
      return projectsTestimony;
    case 'research':
      return researchTestimony;
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
      return researchFAQ;
  }
}

export function getCarouselImages(section: Division): CarouselImage[] {
  switch (section.division) {
    case 'education':
      return educationImages[section.sub];
    case 'projects':
      return projectImages;
    case 'research':
      return researchCarousel;
  }
}

type WinningProjectSelector = 'projects' | 'research';

export function getWinningProjects(selector: WinningProjectSelector): Projects[] {
  switch (selector) {
    case 'projects':
      return projectsWinners;
    case 'research':
      return researchWinners;
  }
}
