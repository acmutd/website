import React from 'react';
import ApplyProgramCard from './ApplyProgramCard';
import { applyPageData } from '../../../config/apply.config';
import type { ProgramInfo } from '../../../lib/types';
import { Button } from '../Button';

function ApplyPrograms() {
  return (
    <div className="flex h-full w-full flex-col px-4 sm:px-6 md:pl-10">
      <h1 className="mb-6 sm:mb-10 text-3xl sm:text-4xl font-bold text-primary xl:text-5xl">our programs</h1>
      <p className="text-lg sm:text-xl font-medium text-primaryDark xl:text-2xl">
        ACM offers a multitude of programs all targetted towards helping students get a start on
        their career
      </p>
      <div className="flex w-full justify-center sm:justify-end pr-0 sm:pr-10">
        {/* <Link
          href="https://portal.acmutd.co/opportunities"
          className="mt-6 flex h-12 w-64 items-center justify-center rounded-lg border border-primary/50 bg-gray-300/10 bg-acm-gradient py-2 text-2xl font-bold text-primary shadow-2xl md:text-3xl"
        >
          apply now
        </Link> */}
        <Button
          href="https://portal.acmutd.co/opportunities"
          text="apply now"
          bgStyle="acm"
          width="w-full sm:w-64"
          height="h-12"
          textStyles="text-xl sm:text-2xl md:text-3xl text-primary"
          addtitionalStyles="mt-6"
        />
      </div>
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
