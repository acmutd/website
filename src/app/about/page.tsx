import React from 'react';
import Divisions from '@/components/about/divisions';
import { aboutPageData } from '../../../config/about.config';

export default function page() {
  const { pageDescription, divisions } = aboutPageData;

  return (
    <div className="mx-7 my-4 text-center">
      <div className="flex flex-row items-center gap-x-4">
        <img className="h-[35rem] w-auto" src="/assets/about/about.png" alt="Your Company" />
        <div className="h-fit w-full text-center align-middle items-center flex flex-col">
          <div className="text-5xl font-semibold text-primary">
            we&apos;re just a group of people
          </div>
          <div className="relative mt-4 rounded-3xl bg-opacity-10 bg-gradient-to-br p-8 text-primary backdrop-blur-md max-w-4xl">
            <div className="absolute left-0 top-0 h-full w-full rounded-3xl border-l-2 border-t-2 border-gray-300 opacity-50"></div>
            <div>{pageDescription}</div>
          </div>
        </div>
      </div>
      <div className='mt-28'>
        <Divisions data={divisions} />
      </div>
    </div>
  );
}
