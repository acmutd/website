import React from 'react';
import ApplyProgramCard from './ApplyProgramCard';
import { applyPageData } from '../../../config/apply.config';
import type { ProgramInfo } from '../../../lib/types';

function ApplyPrograms() {
  return (
    <div className="flex h-full w-full flex-col px-4 sm:px-6 md:pl-10">
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
        {applyPageData.programs.map((data: ProgramInfo, index: number) => {
          return (
            <ApplyProgramCard
              title={data.programName}
              image={`/assets/apply/programs/${data.programImage}.png`}
              link={data.link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ApplyPrograms;
