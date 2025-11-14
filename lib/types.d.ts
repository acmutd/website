// About page types
export type DivisionLink = {
  name: string;
  link: string;
};

export type Division = {
  section: string;
  description: string;
  links: Link[];
  linkStyles?: string; // This field is optional, indicated by the "?"
};

export type Link = {
  name: string;
  link: string;
};

export type AboutPageData = {
  pageDescription: string;
  divisionDescription: string;
  divisions: {
    [key: string]: Division;
  };
};

// Apply page types
export type ProgramInfo = {
  programName: string;
  division: string;
  program: string;
  programImage: string;
  link: string;
};

export type ApplyPageData = {
  programs: ProgramInfo[];
};

// Event Page Types
export type Event = {
  id: string;
  title: string;
  start?: Date;
  location?: string;
  description?: string;
  isAllDay?: boolean;
};

export type WorkShopLink = { type: 'github' | 'video'; link: string };
export type PastWorkshop = {
  title: string;
  description: string;
  links: WorkShopLink[];
};

// Home Page Types
export type HomePageData = {
  orgStatement: string;
  community: CommunityIconsData;
  whyJoinCards: HomeCard[];
  sponsors: Record<SponsorType, string[]>;
};

type SponsorType = 'gold' | 'silver' | 'bronze' | 'custom';

export type CommunityIconsData = {
  linkedin: string;
  instagram: string;
  discord: string;
  github: string;
  youtube: string;
};

export type HomeCard = {
  title: string;
  description: string;
};

// Footer Types
export type Footer = {
  links: FooterLink[];
  contact: string;
  community: CommunityIconsData;
};

export type FooterLink = {
  text: string;
  link: string;
};

export type Division = 'projects' | 'research' | 'education' | 'development';
export type ExtendedDivisions = Exclude<
  Division | 'education.mentor' | 'education.tip',
  'education'
>;

export type Testimony = {
  quote: string;
  name?: string;
};

export type Question = {
  question: string;
  answer: string;
  images?: string[];
};

export type ProjectLink = {
  type: 'github' | 'site';
  link: string;
};

export type DevProjects = {
  title: string;
  description: string;
  links: ProjectLink[];
  image: string;
};
