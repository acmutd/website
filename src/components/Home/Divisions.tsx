import React from 'react';
import { Division } from '../../../lib/types';
import DivisionCard from '../About/DivisionCard';

interface HomeDivisionsProps {
  data: { [key: string]: Division };
}

export default function HomeDivisions({ data }: HomeDivisionsProps) {
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
    <div className="mx-auto w-full max-w-[120rem]">
      <div className="grid w-full place-items-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {divisionCards.slice(0, 6)}
      </div>
      <div className="mt-4 flex max-sm:flex-wrap sm:flex-row w-full justify-center gap-4">
        {divisionCards.slice(6)}
      </div>
    </div>
  );
}
