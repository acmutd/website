import React from 'react';
import { aboutPageData } from '../../../config/about.config';
import Divisions from '@/components/About/Divisions';
import AboutHeader from '@/components/About/AboutHeader';
import { AboutPageData } from '../../../lib/types';
import Timeline from '@/components/About/Timeline';

export default function About() {
  const { divisionDescription, divisions }: AboutPageData = aboutPageData;

  return (
    <div className="py-20 text-center">
      <AboutHeader />
      <div className="flex flex-col items-center md:gap-y-36">
        <Divisions data={divisions} description={divisionDescription} />
        <Timeline />
      </div>
    </div>
  );
}
