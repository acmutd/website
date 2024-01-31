import DivisionOfficers from '@/components/Divisions/Shared/DivisionOfficers';
import { ProjHeader } from '@/components/Divisions/Projects/ProjHeader';
import DivisionCarousel from '@/components/Divisions/Shared/DivisionsCarousel';
import Navigator from '@/components/Divisions/Shared/Navigator';
import DivisionExperience from '@/components/Divisions/Shared/DivisionExperience';
import WinningProjects from '@/components/Divisions/Shared/WinningProjects';
import DivisionFAQ from '@/components/Divisions/Shared/DivisionFAQ';

export default function Page() {
  return (
    <div className="relative w-full bg-[url(/assets/projects/proj-bg.png)] bg-cover bg-center py-20">
      <Navigator division="projects" />
      <DivisionCarousel division="projects" />
      <div className="pl-28">
        <ProjHeader />
        <DivisionOfficers division="projects" />
        <DivisionExperience division="projects" />
        <WinningProjects division="projects" />
        <DivisionFAQ division="projects" />
      </div>
    </div>
  );
}
