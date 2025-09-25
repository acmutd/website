import OfficerHeader from '@/components/Officers/OfficerHeader';
import { divisionOfficerMap } from '../../../config/officers.config';
import OfficerClient from '@/components/Officers/OfficerClient';
import { divisions, allDivisions, titleMap } from '@/components/Officers/constants';

function Officers() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="fixed inset-0 bg-[url(/assets/officer/officer-bg.png)] bg-cover bg-center bg-no-repeat" />

      <div className="relative z-10">
        <OfficerHeader />

        <div className="container mx-auto px-4 py-8 lg:px-8">
          <OfficerClient
            divisions={divisions}
            allDivisions={allDivisions}
            titleMap={titleMap}
            divisionOfficerMap={divisionOfficerMap}
          />
        </div>
      </div>
    </div>
  );
}

export default Officers;
