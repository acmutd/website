export type Division = 'projects' | 'development' | 'research' | 'education' | 'media' | 'industry' | 'hackutd' | 'community'
export type EducationSub = 'tip' | 'mentor';
export type CommunitySub = 'outreach' | 'campus';

export type DivisionProps =
  | { division: Exclude<Division, 'education' | 'community'> }
  | { division: 'education'; sub?: EducationSub }
  | { division: 'community'; sub?: CommunitySub };

export const isEducationDivision = (props: DivisionProps): props is { division: 'education' } => {
  return props.division === 'education';
};

export const hasEducationSub = (props: DivisionProps): props is { division: 'education'; sub: EducationSub } => {
  return props.division === 'education' && (props as any).sub !== undefined;
};

export const isCommunityDivision = (props: DivisionProps): props is { division: 'community' } => {
  return props.division === 'community';
};

export const hasCommunitySub = (props: DivisionProps): props is { division: 'community'; sub: CommunitySub } => {
  return props.division === 'community' && (props as any).sub !== undefined;
};

export const validDivisions: Division[] = ['projects', 'development', 'research', 'education', 'media', 'hackutd', 'community', 'industry'];
export const educationSubs: EducationSub[] = ['tip', 'mentor'];
export const communitySubs: CommunitySub[] = ['outreach', 'campus'];

// Helper to parse division path
export const parseDivisionPath = (path: string): DivisionProps | null => {
  if (path.includes('/')) {
    const [divisionPart, subPart] = path.split('/');

    if (divisionPart === 'education' && (subPart === 'tip' || subPart === 'mentor')) {
      return { division: 'education', sub: subPart };
    }

    if (divisionPart === 'community' && (subPart === 'outreach' || subPart === 'campus')) {
      return { division: 'community', sub: subPart };
    }

    return null;
  }

  if (['projects', 'development', 'research', 'hackutd'].includes(path)) {
    return { division: path as Exclude<Division, 'education' | 'community'> };
  }

  if (path === 'education') {
    return { division: 'education' };
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

export const divisionConfigs: Record<Division, DivisionConfig | Record<EducationSub | CommunitySub, DivisionConfig>> = {
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
    outreach: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
      headerType: 'community',
    },
    campus: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
      headerType: 'community',
    },
  },
  industry: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/projects/proj-bg.png)]',
    headerType: 'industry',
  }
};

export const getDivisionConfig = (props: DivisionProps): DivisionConfig => {
  if (hasEducationSub(props)) {
    return (divisionConfigs.education as any)[props.sub!];
  }

  if (isEducationDivision(props) && !('sub' in props)) {
    const { tip, mentor, ...baseConfig } = divisionConfigs.education as any;
    return baseConfig;
  }

  if (hasCommunitySub(props)) {
    return (divisionConfigs.community as any)[props.sub!];
  }

  if (isCommunityDivision(props) && !('sub' in props)) {
    // Fall back to base community config if ever needed (but routing should require sub)
    const { outreach, campus, ...baseConfig } = divisionConfigs.community as any;
    return baseConfig;
  }

  const divisionKey = (props as any).division as Division;
  return divisionConfigs[divisionKey] as DivisionConfig;
};
