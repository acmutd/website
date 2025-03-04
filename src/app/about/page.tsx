import React from 'react';
import { aboutPageData } from '../../../config/about.config';
import Divisions from '@/components/About/Divisions';
import DivisionCard from '@/components/About/DivisionCard';
import AboutHeader from '@/components/About/AboutHeader';
import { AboutPageData, Division } from '../../../lib/types';

export default function About() {
  const { pageDescription, divisionDescription, divisions }: AboutPageData = aboutPageData;
  const keys = Object.keys(divisions);
  const values = Object.values(divisions);

  console.log(values);

  return (
    <div className="py-20 text-center">
      <AboutHeader pageDescription={pageDescription} />
      <div className="mt-28 flex flex-col gap-y-36">
        <Divisions data={keys} description={divisionDescription} />
        {/* <div className="flex flex-col gap-y-9">
          {values.map((data: Division, index: number) => {
            return <DivisionCard data={data} key={index} />;
          })}
        </div> */}
      </div>
    </div>
  );
}
