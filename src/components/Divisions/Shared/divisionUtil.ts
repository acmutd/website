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
  videos?: { src: string; thumbnail: string }[];
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
    videos: [
    {
      src: "/assets/videos/ProjectsVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
  },
  development: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/about/development/development-bg.png)]',
    headerType: 'development',
    videos: [
    {
      src: "/assets/videos/DevelopmentVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
    
  },
  research: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/about/research/research-bg.png)]',
    headerType: 'research',
    showWinningProjects: true,
    videos: [
    {
      src: "/assets/videos/ResearchVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
  },
  education: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/about/education/education-bg.png)]',
    headerType: 'education',

    tip: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/about/education/education-bg.png)]',
      headerType: 'tip',
      showWorkshops: true,
      videos: [
    {
      src: "/assets/videos/TIPVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
    },
    mentor: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/about/about-header-bg.png)]',
      headerType: 'mentor',
      showWorkshops: true,
      videos: [
    {
      src: "/assets/videos/MentorVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
    },
  },
  media: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/about/media/media-bg.png)]',
    headerType: 'media',
    videos: [
    {
      src: "/assets/videos/MediaVideo.mp4",
      thumbnail: "/assets/thumbnails/MediaThumbnail.png",
    }
  ]
  },
  hackutd: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/about/hackutd/hackutd-bg.png)]',
    headerType: 'hackutd',
    showWinningProjects: true,
    videos: [
    {
      src: "/assets/videos/HackUTDVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
  },
  community: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/about/about-divisions-bg.png)]',
    headerType: 'community',
    outreach: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/about/about-divisions-bg.png)]',
      headerType: 'community',
       videos: [
    {
      src: "/assets/videos/OutreachVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
      
    },
    campus: {
      ...defaultConfig,
      bgImage: 'bg-[url(/assets/about/about-divisions-bg.png)]',
      headerType: 'community',
       videos: [
    {
      src: "/assets/videos/CommunityVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
    },
  },
  industry: {
    ...defaultConfig,
    bgImage: 'bg-[url(/assets/about/industry/industry-bg.png)]',
    headerType: 'industry',
     videos: [
    {
      src: "/assets/videos/IndustryVideo.mp4",
      thumbnail: "/assets/about.jpg",
    }
  ]
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
