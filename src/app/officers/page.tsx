import OfficerHeader from '@/components/Officers/OfficerHeader';
import { divisionOfficerMap } from '../../../config/officers.config';
import OfficerClient from '@/components/Officers/OfficerClient';
import { divisions, allDivisions, titleMap } from '@/components/Officers/constants';

function Officers() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 bg-[url(/assets/officer/officer-bg.png)] bg-cover bg-center bg-no-repeat" />

      <div className="relative z-10">
        <OfficerHeader />

        <div className="relative">
          <div className="container relative z-10 mx-auto px-4 py-12 lg:px-8 lg:py-16">
            <OfficerClient
              divisions={divisions}
              allDivisions={allDivisions}
              titleMap={titleMap}
              divisionOfficerMap={divisionOfficerMap}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Officers;
