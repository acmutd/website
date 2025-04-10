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
  DivisionConfig
} from '@/components/Divisions/Shared/divisionUtil';
import { MediaHeader } from '@/components/Divisions/Media/MediaHeader';
import { CommunityHeader } from '@/components/Divisions/Community/CommunityHeader';
import { IndustryHeader } from '@/components/Divisions/Industry/IndustryHeader';
import IndustrySponsors from '@/components/Divisions/Industry/IndustrySponsors';

export function generateStaticParams() {
  const params = [
    { slug: ['projects'] },
    { slug: ['development'] },
    { slug: ['research'] },
    { slug: ['education'] },
    { slug: ['education', 'tip'] },
    { slug: ['education', 'mentor'] },
    { slug: ['media']},
    { slug: ['hackutd']},
    { slug: ['community']},
    { slug: ['industry']},
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
  community: CommunityHeader,
  industry: IndustryHeader,
}

function Header(props: DivisionProps & { config: DivisionConfig }) {
  const { headerType } = props.config;
  const HeaderComponent = headerComponents[headerType as keyof typeof headerComponents];
  return <HeaderComponent />
}

const parseDivisionSlug = (slug: string[]): DivisionProps | null => {
  if (!slug || slug.length === 0) return null;

  const division = slug[0];

  if (validDivisions.includes(division as any) && division !== 'education') {
    if (slug.length === 1) {
      return { division: division as Exclude<typeof validDivisions[number], 'education'> };
    }
    return null;
  }

  if (division === 'education') {
    if (slug.length === 1) {
      return null;
    }

    const sub = slug[1];
    if (educationSubs.includes(sub as any)) {
      return { division: 'education', sub: sub as typeof educationSubs[number] };
    }
  }

  return null;
};

export default function Page({ params }: { params: { slug: string[] } }) {
  const divisionProps = parseDivisionSlug(params.slug);
  if (!divisionProps) {
    return notFound();
  }

  const config = getDivisionConfig(divisionProps);

  return (
    <div className={`relative w-full ${config.bgImage} bg-cover bg-center py-10 md:py-20`}>
      <Navigator {...divisionProps} />
      <DivisionCarousel {...divisionProps} />

      <div className={config.containerClass}>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between px-4 md:px-40">
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

        {config.showWorkshops && hasEducationSub(divisionProps) && (
          <div className="flex justify-center px-4 md:px-0">
            <WorkShops sub={divisionProps.sub} />
          </div>
        )}

        <div className="flex justify-center px-4 md:px-0">
          <DivisionFAQ {...divisionProps} />
        </div>
        {divisionProps.division === 'industry' && (
          <IndustrySponsors />
        )}
      </div>
    </div>
  );
}