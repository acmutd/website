import React from 'react';
import { aboutPageData } from '../../../config/about.config';
import Divisions from '@/components/About/Divisions';
import AboutHeader from '@/components/About/AboutHeader';
import { AboutPageData } from '../../../lib/types';

export default function About() {
  const { pageDescription, divisionDescription, divisions }: AboutPageData = aboutPageData;

  return (
    <div className="py-20 text-center">
      <AboutHeader pageDescription={pageDescription} />
      <div className="flex flex-col items-center md:gap-y-36">
        <Divisions data={divisions} description={divisionDescription} />
      </div>
    </div>
  );
}
