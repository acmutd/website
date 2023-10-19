export type Link = {
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