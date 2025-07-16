import React from 'react';
import { Division } from '../../../lib/types';
import DivisionCard from './DivisionCard';

interface DivisionsProps {
  data: { [key: string]: Division };
  description: string;
}

export default function Divisions({ data, description }: DivisionsProps) {
  const keys = Object.keys(data);
  const values = Object.values(data);

  const divisionCards = keys.map((division: string, index: number) => (
    <DivisionCard
      key={division}
      division={division}
      divisionData={values[index]}
    />
  ));

  return (
    <div className="flex h-full items-center justify-center bg-[url(/assets/about/about-divisions-bg.png)] bg-contain bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-6">
        <div className="flex flex-col items-center p-6 text-primary md:p-0">
          <h1 className="mb-2 text-5xl font-medium">Divisions</h1>
          <p className="mb-10 max-w-4xl text-center text-xl">{description}</p>
          <div className="grid w-full place-items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {divisionCards.slice(0, 6)}
          </div>
          <div className="mt-4 flex max-sm:flex-wrap sm:flex-row w-full justify-center gap-4">
            {divisionCards.slice(6)}
          </div>
        </div>
      </div>
    </div>
  );
}
