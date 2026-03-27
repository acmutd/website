import { Question, Testimony } from '../lib/types';
import {
  developmentCarouselImages,
  developmentFAQ,
  developmentTestimony,
} from './development.config';
import {
  educationFAQ,
  educationImages,
  educationTestimony,
} from './education.config';
import {
  hackTestimony,
  hackFAQ,
  hackWinners,
  hackCarouselImages,
} from './hack.config';
import {
  projectImages,
  projectsFAQ,
  projectsTestimony,
  projectsWinners,
} from './projects.config';
import {
  researchCarousel,
  researchFAQ,
  researchTestimony,
  researchWinners,
} from './research.config';
import { mediaTestimony, mediaFAQ, mediaCarousel } from './media.config';
import {
  communityImages,
  communityTestimony,
  communityFAQ,
} from './community.config';
import {
  industryCarouselImages,
  industryFAQ,
  industryTestimony,
} from './industry.config';

type Division =
  | {
    division:
    | 'projects'
    | 'research'
    | 'development'
    | 'media'
    | 'industry'
    | 'hackutd';
  }
  | {
    division: 'education';
    sub?: 'tip' | 'mentor';
  }
  | {
    division: 'community';
    sub?: 'campus' | 'outreach';
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

export type ProjectLink = {
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
  manager?: string;
};

export function getTestimony(section: Division): Testimony[] {
  switch (section.division) {
    case 'projects':
      return projectsTestimony;
    case 'research':
      return researchTestimony;
    case 'education':
      return section.sub ? educationTestimony[section.sub] : [];
    case 'development':
      return developmentTestimony;
    case 'media':
      return mediaTestimony;
    case 'hackutd':
      return hackTestimony;
    case 'community':
      return section.sub ? communityTestimony[section.sub] : [];
    case 'industry':
      return industryTestimony;
  }
}

export function getFAQ(section: Division): Question[] {
  switch (section.division) {
    case 'education':
      return section.sub ? educationFAQ[section.sub] : [];
    case 'projects':
      return projectsFAQ;
    case 'research':
      return researchFAQ;
    case 'development':
      return developmentFAQ;
    case 'media':
      return mediaFAQ;
    case 'hackutd':
      return hackFAQ;
    case 'community':
      return section.sub ? communityFAQ[section.sub] : [];
    case 'industry':
      return industryFAQ;
  }
}

export function getCarouselImages(section: Division): CarouselImage[] {
  switch (section.division) {
    case 'education':
      return section.sub ? educationImages[section.sub] : [];
    case 'projects':
      return projectImages;
    case 'research':
      return researchCarousel;
    case 'development':
      return developmentCarouselImages;
    case 'media':
      return mediaCarousel;
    case 'hackutd':
      return hackCarouselImages;
    case 'community':
      return section.sub ? communityImages[section.sub] : [];
    case 'industry':
      return industryCarouselImages;
  }
}

type WinningProjectSelector = 'projects' | 'research' | 'hackutd';


export function getWinningProjects(selector: WinningProjectSelector): Projects[] {
  switch (selector) {
    case 'projects':
      return projectsWinners;
    case 'research':
      return researchWinners;
    case 'hackutd':
      return hackWinners;
  }
}
