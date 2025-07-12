'use client';
import React from 'react';
import { aboutPageData } from '../../../config/about.config';
import Divisions from '@/components/About/Divisions';

const DivisionsGrid: React.FC = () => {
  const { divisions, divisionDescription } = aboutPageData;

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16">
      <div className="w-full max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Our Divisions
          </h2>
          <p className="mt-3 text-sm text-gray-300 sm:text-base md:text-lg">
            Our chapter is comprised of eight divisions — each serving a different topic and mission
          </p>
        </div>

        {/* Use the existing Divisions component but remove its own header and description */}
        <div className="[&>div]:bg-transparent [&>div]:bg-none [&_h1]:hidden [&_p]:hidden">
          <Divisions data={divisions} description={divisionDescription} />
        </div>
      </div>
    </section>
  );
};

export default DivisionsGrid;
