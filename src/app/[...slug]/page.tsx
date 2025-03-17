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

export function generateStaticParams() {
  const params = [
    { slug: ['projects'] },
    { slug: ['development'] },
    { slug: ['research'] },
    { slug: ['education'] },
    { slug: ['education', 'tip'] },
    { slug: ['education', 'mentor'] },
  ];

  return params;
}

function Header(props: DivisionProps & { config: DivisionConfig }) {
  const { headerType } = props.config;

  if (headerType === 'project') return <ProjHeader />;
  if (headerType === 'development') return <DevHeader />;
  if (headerType === 'research') return <ResearchHeader />;
  if (headerType === 'tip') return <TIPHeader />;
  if (headerType === 'mentor') return <MentorHeader />;
  if (headerType === 'education') return notFound();

  return null;
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
    <div className={`relative w-full ${config.bgImage} bg-cover bg-center py-20`}>
      <Navigator {...divisionProps} />
      <DivisionCarousel {...divisionProps} />

      <div className={config.containerClass}>
        <div className="flex gap-10 items-center justify-between px-40">
          <Header {...divisionProps} config={config} />
          <DivisionOfficers division={divisionProps.division} />
        </div>

        <div className="flex justify-center">
          <DivisionExperience {...divisionProps} />
        </div>

        {config.showWinningProjects && (
          <div className="flex justify-center">
            <WinningProjects division={divisionProps.division as 'projects' | 'research'} />
          </div>
        )}

        {config.showWorkshops && hasEducationSub(divisionProps) && (
          <div className="flex justify-center">
            <WorkShops sub={divisionProps.sub} />
          </div>
        )}

        <div className="flex justify-center">
          <DivisionFAQ {...divisionProps} />
        </div>
      </div>
    </div>
  );
}