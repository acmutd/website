import DivisionOfficers from '@/components/Divisions/Shared/DivisionOfficers';
import DivisionCarousel from '@/components/Divisions/Shared/DivisionsCarousel';
import Navigator from '@/components/Divisions/Shared/Navigator';
import DivisionExperience from '@/components/Divisions/Shared/DivisionExperience';
import WinningProjects from '@/components/Divisions/Shared/WinningProjects';
import DivisionFAQ from '@/components/Divisions/Shared/DivisionFAQ';
import { ResearchHeader } from '@/components/Divisions/Research/ResearchHeader';

export default function Page() {
  return (
    <div className="relative w-full bg-[url(/assets/projects/proj-bg.png)] bg-cover bg-center py-20">
      <Navigator division="research" />
      <DivisionCarousel division="research" />
      <div className="pl-28">
        <ResearchHeader />
        <DivisionOfficers division="research" />
        <DivisionExperience division="research" />
        <WinningProjects division="research" />
        <DivisionFAQ division="research" />
      </div>
    </div>
  );
}
