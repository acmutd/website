import DivisionOfficers from '@/components/Divisions/Shared/DivisionOfficers';
import DivisionCarousel from '@/components/Divisions/Shared/DivisionsCarousel';
import Navigator from '@/components/Divisions/Shared/Navigator';
import DivisionExperience from '@/components/Divisions/Shared/DivisionExperience';
import DivisionFAQ from '@/components/Divisions/Shared/DivisionFAQ';
import WorkShops from '@/components/Divisions/Shared/WorkShops';

export default function Page() {
  return (
    <div className="relative w-full bg-[url(/assets/projects/proj-bg.png)] bg-cover bg-center py-20">
      <Navigator division="education" sub="mentor" />
      <DivisionCarousel division="education" sub="mentor" />
      <div className="pl-28">
        <DivisionOfficers division="education" />
        <DivisionExperience division="education" />
        <WorkShops sub="mentor" />
        <DivisionFAQ division="education" />
      </div>
    </div>
  );
}