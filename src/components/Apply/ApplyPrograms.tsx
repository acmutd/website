import Link from 'next/link';
import React from 'react';
import ApplyProgramCard from './ApplyProgramCard';

function ApplyPrograms() {
  return (
    <div className="flex h-full w-full flex-col pl-10">
      <h1 className="mb-10 text-4xl font-bold text-primary xl:text-5xl">our programs</h1>
      <p className="text-xl font-medium text-primaryDark xl:text-2xl">
        ACM offers a multitude of programs all targetted towards helping students get a start on
        their career
      </p>
      <div className="flex w-full justify-end pr-10">
        <Link
          href="https://portal.acmutd.co"
          className="mt-6 flex h-12 w-64 items-center justify-center bg-acm-gradient py-2 text-2xl font-bold text-primary md:text-3xl"
        >
          apply now
        </Link>
      </div>
      <div className="mt-10 grid md:grid-cols-2">
        <ApplyProgramCard
          title="ACM Projects"
          image="/assets/apply/apply-projects.png"
          link="https://portal.acmutd.co/applications"
        />
        <ApplyProgramCard
          title="ACM Education"
          image="/assets/apply/apply-interview.png"
          link="https://portal.acmutd.co/applications"
        />
        <ApplyProgramCard
          title="ACM Research"
          image="/assets/apply/apply-research.png"
          link="https://portal.acmutd.co/applications"
        />
        <ApplyProgramCard
          title="ACM Education"
          image="/assets/apply/apply-mentor.png"
          link="https://portal.acmutd.co/applications"
        />
      </div>
    </div>
  );
}

export default ApplyPrograms;
