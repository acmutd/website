import DivisionOfficers from '@/components/Divisions/Shared/DivisionOfficers';
import DivisionCarousel from '@/components/Divisions/Shared/DivisionsCarousel';
import Navigator from '@/components/Divisions/Shared/Navigator';
import DivisionExperience from '@/components/Divisions/Shared/DivisionExperience';
import DivisionFAQ from '@/components/Divisions/Shared/DivisionFAQ';
import WorkShops from '@/components/Divisions/Shared/WorkShops';
import { TIPHeader } from '@/components/Divisions/TIP/TIPHeader';

export default function Page() {
  return (
    <div className="relative w-full bg-[url(/assets/projects/proj-bg.png)] bg-cover bg-center py-20">
      <Navigator division="education" sub="tip" />
      <DivisionCarousel division="education" sub="tip" />
      <div className="pl-28">
        <TIPHeader />
        <DivisionOfficers division="education" />
        <DivisionExperience division="education" sub="tip" />
        <WorkShops sub="tip" />
        <DivisionFAQ division="education" sub="tip" />
      </div>
    </div>
  );
}
