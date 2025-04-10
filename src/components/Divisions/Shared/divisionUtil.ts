export type Division = 'projects' | 'development' | 'research' | 'education' | 'media' | 'industry' | 'hackutd' | 'community'
export type EducationSub = 'tip' | 'mentor';

export type DivisionProps =
  | { division: Exclude<Division, 'education'> }
  | { division: 'education'; sub: EducationSub };

export const isEducationDivision = (props: DivisionProps): props is { division: 'education'; sub: EducationSub } => {
  return props.division === 'education';
};

export const hasEducationSub = (props: DivisionProps): props is { division: 'education'; sub: EducationSub } => {
  return props.division === 'education' && !!props.sub;
};

export const validDivisions: Division[] = ['projects', 'development', 'research', 'education', 'media', 'hackutd', 'community', 'industry'];
export const educationSubs: EducationSub[] = ['tip', 'mentor'];

// Helper to parse division path
export const parseDivisionPath = (path: string): DivisionProps | null => {
  if (path.includes('/')) {
    const [divisionPart, subPart] = path.split('/');

    if (divisionPart === 'education' && (subPart === 'tip' || subPart === 'mentor')) {
      return { division: 'education', sub: subPart };
    }

    return null;
  }

  if (['projects', 'development', 'research', 'hackutd'].includes(path)) {
    return { division: path as Exclude<Division, 'education'> };
  }

  return null;
};

export type DivisionConfig = {
  bgImage: string;
  containerClass: string;
  headerType: 'project' | 'development' | 'research' | 'tip' | 'mentor' | 'education' | 'media' | 'industry' | 'hackutd' | 'community'
  showWinningProjects?: boolean;
  showWorkshops?: boolean;
  centerExperience?: boolean;
  centerFAQ?: boolean;
};

// Default configuration that applies to all divisions
const defaultConfig = {
  containerClass: 'px-4md:px-28',
  centerExperience: true,
  centerFAQ: true,
};

export const divisionConfigs: Record<Division, DivisionConfig | Record<EducationSub, DivisionConfig>> = {
  projects: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'project',
    showWinningProjects: true,
  },
  development: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'development',
  },
  research: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'research',
    showWinningProjects: true,
  },
  education: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'education',

    tip: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
      headerType: 'tip',
      showWorkshops: true,
    },
    mentor: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/about/about-header-bg.png)]',
      headerType: 'mentor',
      showWorkshops: true,
    },
  },
  media: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'media',
  },
  hackutd: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'hackutd',
    showWinningProjects: true
  },
  community: {
    ...defaultConfig,
      bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'community',
  },
  industry: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'industry',
  }
};

export const getDivisionConfig = (props: DivisionProps): DivisionConfig => {
  if (isEducationDivision(props) && props.sub) {
    return (divisionConfigs.education as any)[props.sub];
  }

  if (isEducationDivision(props) && !props.sub) {
    const { tip, mentor, ...baseConfig } = divisionConfigs.education as any;
    return baseConfig;
  }

  return divisionConfigs[props.division] as DivisionConfig;
};
