import DivisionOfficers from '@/components/Divisions/Shared/DivisionOfficers';
import DivisionCarousel from '@/components/Divisions/Shared/DivisionsCarousel';
import Navigator from '@/components/Divisions/Shared/Navigator';
import DivisionExperience from '@/components/Divisions/Shared/DivisionExperience';
import DivisionFAQ from '@/components/Divisions/Shared/DivisionFAQ';
import { DevHeader } from '@/components/Divisions/Development/DevHeader';

export default function Page() {
  return (
    <div className="relative w-full bg-[url(/assets/projects/proj-bg.png)] bg-cover bg-center py-20">
      <Navigator division="development" />
      <DivisionCarousel division="development" />
      <div className="px-28">
        <div className="flex gap-10">
          <DevHeader />
          <DivisionOfficers division="development" />
        </div>
        <div className="flex justify-center">
          <DivisionExperience division="development" />
        </div>
        <div className="flex justify-center">
          <DivisionFAQ division="development" />
        </div>
      </div>
    </div>
  );
}
