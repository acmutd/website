import React from 'react';
import { aboutPageData } from '../../../config/about.config';
import Divisions from '@/components/about/Divisions';
import DivisionCard from '@/components/about/DivisionCard';

export default function page() {
  const { pageDescription, divisionDescription, divisions } = aboutPageData;
  const keys = Object.keys(divisions);
  const values = Object.values(divisions)

  return (
    <div className="mx-7 my-4 text-center">
      <div className="flex flex-row items-center gap-x-4">
        <img className="h-[35rem] w-auto" src="/assets/about/about.png" alt="Your Company" />
        <div className="flex h-fit w-full flex-col items-center text-center align-middle">
          <div className="text-5xl font-semibold text-primary">
            we&apos;re just a group of people
          </div>
          <div className="relative mt-4 max-w-4xl rounded-3xl bg-opacity-10 bg-gradient-to-br p-8 text-primary backdrop-blur-md">
            <div className="absolute left-0 top-0 h-full w-full rounded-3xl border-l-2 border-t-2 border-gray-300 opacity-50"></div>
            <div>{pageDescription}</div>
          </div>
        </div>
      </div>
      <div className="mt-28 flex flex-col gap-y-36">
        <Divisions data={keys} description={divisionDescription} />
        {values.map((data: any, index: number) => {
          return <DivisionCard data={data} titleImage={keys[index]} key={index} />
        })}
      </div>
    </div>
  );
}
