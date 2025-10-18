import { Question, Testimony } from '../lib/types';
import {
  developmentCarouselImages,
  developmentDirectors,
  developmentFAQ,
  developmentTestimony,
} from './development.config';
import {
  educationDirectors,
  educationFAQ,
  educationImages,
  educationTestimony,
} from './education.config';
import {
  hackDirectors,
  hackTestimony,
  hackFAQ,
  hackWinners,
  hackCarouselImages,
} from './hack.config';
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
import { mediaDirectors, mediaTestimony, mediaFAQ, mediaCarousel } from './media.config';
import {
  communitCarouselImages,
  communityDirectors,
  communityOutreachCarouselImages,
  communityOutreachFAQ,
  communityOutreachTestimony,
  communityCampusCarouselImages,
  communityCampusFAQ,
  communityCampusTestimony,
  communityFAQ,
  communityTestimony,
} from './community.config';
import {
  industryCarouselImages,
  industryDirectors,
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
        | 'hackutd'
        | 'community';
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

export function getDirectors(division: Division['division']): Director[] {
  switch (division) {
    case 'projects':
      return projectDirectors;
    case 'research':
      return researchDirectors;
    case 'development':
      return developmentDirectors;
    case 'education':
      return educationDirectors;
    case 'media':
      return mediaDirectors;
    case 'hackutd':
      return hackDirectors;
    case 'community':
      return communityDirectors;
    case 'industry':
      return industryDirectors;
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
    case 'development':
      return developmentTestimony;
    case 'media':
      return mediaTestimony;
    case 'hackutd':
      return hackTestimony;
    case 'community':
      // section may have a sub if it's community; try to read it safely
      // @ts-ignore
      if ((section as any).sub === 'campus') return communityCampusTestimony;
      return communityOutreachTestimony;
    case 'industry':
      return industryTestimony;
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
    case 'development':
      return developmentFAQ;
    case 'media':
      return mediaFAQ;
    case 'hackutd':
      return hackFAQ;
    case 'community':
      // @ts-ignore
      if ((section as any).sub === 'campus') return communityCampusFAQ;
      return communityOutreachFAQ;
    case 'industry':
      return industryFAQ;
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
    case 'development':
      return developmentCarouselImages;
    case 'media':
      return mediaCarousel;
    case 'hackutd':
      return hackCarouselImages;
    case 'community':
      // @ts-ignore
      if ((section as any).sub === 'campus') return communityCampusCarouselImages;
      return communityOutreachCarouselImages;
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
