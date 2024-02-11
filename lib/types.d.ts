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

export type AboutPageData = {
  pageDescription: string;
  divisionDescription: string;
  divisions: {
    [key: string]: Division;
  };
};

// Apply page types
export type ProgramInfo = {
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
  date: Date;
  location: string;
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
  cards: HomeCard[];
  sponsors: string[];
}

export type CommunityIconsData = {
  linkedin: string;
  instagram: string;
  discord: string;
  github: string;
  youtube: string;
};

export type HomeCard = {
  description: string,
  link: string,
  linkText: string,
}

// Footer Types
export type Footer = {
  links: FooterLink[],
  contact: string,
  community: CommunityIconsData
}

export type FooterLink = {
  text: string;
  link: string;
}