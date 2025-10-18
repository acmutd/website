import type { Metadata } from 'next';
import DivisionOfficers from '@/components/Divisions/Shared/DivisionOfficers';
import DivisionCarousel from '@/components/Divisions/Shared/DivisionsCarousel';
import Navigator from '@/components/Divisions/Shared/Navigator';
import DivisionExperience from '@/components/Divisions/Shared/DivisionExperience';
import WinningProjects from '@/components/Divisions/Shared/WinningProjects';
import DivisionFAQ from '@/components/Divisions/Shared/DivisionFAQ';
import WorkShops from '@/components/Divisions/Shared/WorkShops';
import { ProjHeader } from '@/components/Divisions/Projects/ProjHeader';
import { DevHeader } from '@/components/Divisions/Development/DevHeader';
import { ResearchHeader } from '@/components/Divisions/Research/ResearchHeader';
import { TIPHeader } from '@/components/Divisions/TIP/TIPHeader';
import { HackHeader } from '@/components/Divisions/Hack/HackHeader';
import { MentorHeader } from '@/components/Divisions/Mentor/MentorHeader';
import { notFound } from 'next/navigation';
import {
  DivisionProps,
  hasEducationSub,
  getDivisionConfig,
  validDivisions,
  educationSubs,
  DivisionConfig,
  Division,
} from '@/components/Divisions/Shared/divisionUtil';
import { MediaHeader } from '@/components/Divisions/Media/MediaHeader';
import { CommunityHeader } from '@/components/Divisions/Community/CommunityHeader';
import { CampusHeader } from '@/components/Divisions/Campus/CampusHeader';
import { IndustryHeader } from '@/components/Divisions/Industry/IndustryHeader';
import IndustrySponsors from '@/components/Divisions/Industry/IndustrySponsors';
import DevProjects from '@/components/Divisions/Development/DevProjects';

type DivisionMetadata = {
  title: string;
  description: string;
  division: string;
  keywords: string[];
  slug: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

const getDivisionMetadata = (props: DivisionProps): DivisionMetadata => {
  if (props.division === 'education' && 'sub' in props) {
    if (props.sub === 'tip') {
      return {
        title: 'Technical Interview Prep (TIP) - ACM UTD',
        description:
          "Master technical interviews with ACM UTD's Technical Interview Prep program. Practice coding problems, system design, and interview techniques to land your dream tech job.",
        division: 'TIP',
        keywords: [
          'technical interviews',
          'coding interviews',
          'interview prep',
          'programming practice',
          'system design',
          'algorithms',
          'data structures',
        ],
        slug: 'education/tip',
        image: '/assets/about/education/education.png',
        imageWidth: 669,
        imageHeight: 180,
      };
    }
    if (props.sub === 'mentor') {
      return {
        title: 'Mentor Program - ACM UTD',
        description:
          "Connect with experienced students and industry professionals through ACM UTD's Mentor Program. Get guidance on academics, career development, and professional growth.",
        division: 'Mentor Program',
        keywords: [
          'mentorship',
          'career guidance',
          'professional development',
          'networking',
          'academic support',
          'industry professionals',
        ],
        slug: 'education/mentor',
        image: '/assets/about/education/education.png',
        imageWidth: 669,
        imageHeight: 180,
      };
    }
  }

  const divisionMetadata: Record<Exclude<Division, 'education'>, DivisionMetadata> = {
    projects: {
      title: 'Projects Division - ACM UTD',
      description:
        'Build real-world applications with ACM UTD Projects. A semester-long guided initiative for students new to software development, teaching collaborative tools and core development principles.',
      division: 'Projects',
      keywords: [
        'software projects',
        'web development',
        'mobile apps',
        'collaborative development',
        'programming',
        'software engineering',
      ],
      slug: 'projects',
      image: '/assets/about/projects/projects.png',
      imageWidth: 630,
      imageHeight: 188,
    },
    development: {
      title: 'Development Division - ACM UTD',
      description:
        "Design, build, and maintain web applications that support ACM's operations. Work on projects like the Member Portal and UTD Grades to serve the campus community.",
      division: 'Development',
      keywords: [
        'web development',
        'full-stack development',
        'software engineering',
        'web applications',
        'member portal',
        'utd grades',
      ],
      slug: 'development',
      image: '/assets/about/development/development.png',
      imageWidth: 853,
      imageHeight: 198,
    },
    research: {
      title: 'Research Division - ACM UTD',
      description:
        'Engage in cutting-edge computer science research with ACM UTD Research. From AI and machine learning to systems and security, explore the frontiers of technology.',
      division: 'Research',
      keywords: [
        'computer science research',
        'artificial intelligence',
        'machine learning',
        'systems research',
        'cybersecurity',
        'research symposium',
      ],
      slug: 'research',
      image: '/assets/about/research/research.png',
      imageWidth: 630,
      imageHeight: 183,
    },
    media: {
      title: 'Media Division - ACM UTD',
      description:
        "The creative force behind ACM UTD's campaigns. Talented marketing specialists, designers, and videographers who craft engaging content and amplify our community.",
      division: 'Media',
      keywords: [
        'digital marketing',
        'graphic design',
        'videography',
        'content creation',
        'social media',
        'branding',
      ],
      slug: 'media',
      image: '/assets/about/media/media.png',
      imageWidth: 669,
      imageHeight: 185,
    },
    hackutd: {
      title: 'HackUTD - ACM UTD',
      description:
        'The premier 24-hour hackathon at UT Dallas. Join 1000+ participants in building innovative solutions, competing for prizes, and networking with industry sponsors.',
      division: 'HackUTD',
      keywords: [
        'hackathon',
        'coding competition',
        'innovation',
        'entrepreneurship',
        'startup',
        'programming contest',
      ],
      slug: 'hackutd',
      image: '/assets/about/hackutd/hackutd.png',
      imageWidth: 669,
      imageHeight: 189,
    },
    community: {
      title: 'Community Division - ACM UTD',
      description:
        'Building bridges between ACM UTD and the broader community. Increase STEM engagement in K-12 schools and organize social events that bring students together.',
      division: 'Community',
      keywords: [
        'community outreach',
        'STEM education',
        'K-12 outreach',
        'social events',
        'community service',
        'volunteering',
      ],
      slug: 'community/outreach',
      image: '/assets/about/community/community.png',
      imageWidth: 697,
      imageHeight: 191,
    },
    industry: {
      title: 'Industry Division - ACM UTD',
      description:
        'Connect students with leading tech companies through workshops, networking events, and career opportunities. Bridge the gap between academics and professional careers.',
      division: 'Industry',
      keywords: [
        'career development',
        'industry partnerships',
        'networking',
        'internships',
        'job opportunities',
        'professional workshops',
      ],
      slug: 'industry',
      image: '/assets/about/industry/industry.png',
      imageWidth: 282,
      imageHeight: 94,
    },
  };

  return divisionMetadata[props.division as Exclude<Division, 'education'>];
};

export const generateMetadata = async (props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> => {
  const params = await props.params;
  const divisionProps = parseDivisionSlug(params.slug);
  if (!divisionProps) {
    return {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }

  const config = getDivisionConfig(divisionProps);
  const divisionInfo = getDivisionMetadata(divisionProps);

  return {
    title: divisionInfo.title,
    description: divisionInfo.description,
    keywords: [
      'ACM UTD',
      'UT Dallas',
      'UTD',
      divisionInfo.division,
      ...divisionInfo.keywords,
      'student organization',
      'computer science',
      'engineering',
      'technology',
    ],
    openGraph: {
      title: divisionInfo.title,
      description: divisionInfo.description,
      url: `https://acmutd.co/${divisionInfo.slug}`,
      siteName: 'ACM UTD',
      images: [
        {
          url: divisionInfo.image,
          width: divisionInfo.imageWidth,
          height: divisionInfo.imageHeight,
          alt: `${divisionInfo.title} - ACM UTD`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: divisionInfo.title,
      description: divisionInfo.description,
      images: [divisionInfo.image],
      creator: '@acmutd',
    },
    alternates: {
      canonical: `/${divisionInfo.slug}`,
    },
  };
};

export function generateStaticParams() {
  const params = [
    { slug: ['projects'] },
    { slug: ['development'] },
    { slug: ['research'] },
    { slug: ['education'] },
    { slug: ['education', 'tip'] },
    { slug: ['education', 'mentor'] },
    { slug: ['media'] },
    { slug: ['hackutd'] },
  { slug: ['community', 'outreach'] },
  { slug: ['community', 'campus'] },
    { slug: ['industry'] },
  ];

  return params;
}

const headerComponents = {
  project: ProjHeader,
  development: DevHeader,
  research: ResearchHeader,
  tip: TIPHeader,
  mentor: MentorHeader,
  hackutd: HackHeader,
  education: () => notFound(),
  media: MediaHeader,
  industry: IndustryHeader,
};

function Header(props: DivisionProps & { config: DivisionConfig }) {
  const { headerType } = props.config;

  if (props.division === 'community' && 'sub' in props) {
    if (props.sub === 'outreach') return <CommunityHeader />;
    if (props.sub === 'campus') return <CampusHeader />;
  }

  const HeaderComponent = headerComponents[headerType as keyof typeof headerComponents];
  return <HeaderComponent />;
}

const parseDivisionSlug = (slug: string[]): DivisionProps | null => {
  if (!slug || slug.length === 0) return null;

  const division = slug[0];

  if (validDivisions.includes(division as any) && division !== 'education') {
    if (slug.length === 1) {
      return { division: division as Exclude<(typeof validDivisions)[number], 'education'> };
    }
    return null;
  }

  if (division === 'education') {
    if (slug.length === 1) {
      return null;
    }

    const sub = slug[1];
    if (educationSubs.includes(sub as any)) {
      return { division: 'education', sub: sub as (typeof educationSubs)[number] };
    }
  }

  return null;
};

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const divisionProps = parseDivisionSlug(params.slug);
  if (!divisionProps) {
    return notFound();
  }

  const config = getDivisionConfig(divisionProps);

  return (
    <div
      className={`relative w-full ${config.bgImage} mt-10 bg-cover bg-center py-10 md:mt-0 md:py-20`}
    >
      <Navigator {...divisionProps} />
      <DivisionCarousel {...divisionProps} />

      <div className={config.containerClass}>
        <div className="flex flex-col items-center justify-between gap-10 px-4 md:flex-row md:px-40">
          <Header {...divisionProps} config={config} />
          <DivisionOfficers division={divisionProps.division} />
        </div>

        <div className="flex justify-center px-4 md:px-0">
          <DivisionExperience {...divisionProps} />
        </div>

        {config.showWinningProjects && (
          <div className="flex justify-center px-4 md:px-0">
            <WinningProjects division={divisionProps.division as 'projects' | 'research'} />
          </div>
        )}

        {divisionProps.division === 'development' && (
          <div className="flex justify-center px-4 md:px-0">
            <DevProjects />
          </div>
        )}

        {config.showWorkshops && hasEducationSub(divisionProps) && (
          <div className="flex justify-center px-4 md:px-0">
            <WorkShops sub={divisionProps.sub} />
          </div>
        )}

        <div className="flex justify-center px-4 md:px-0">
          <DivisionFAQ {...divisionProps} />
        </div>
        {divisionProps.division === 'industry' && <IndustrySponsors />}
      </div>
    </div>
  );
}
