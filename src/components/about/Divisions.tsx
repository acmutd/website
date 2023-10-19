import React from 'react';
import Image from 'next/image';
import type { Link } from '../../../lib/types';

interface DivisionsProps {
  data: string[],
  description: string,
}

export default function Divisions({ data, description }: DivisionsProps) {
  const imageElements = data.map((division: string, index: number) => {
    return (
      <div className="relative h-20 w-72" key={division}>
        <Image
          src={`/assets/about/${division}/${division}.png`}
          alt={division}
          fill
          className="object-contain"
        />
      </div>
    );
  });

  return (
    <div className="flex h-full items-center justify-center bg-[url(/assets/about/about-divisions-bg.png)] bg-contain bg-center bg-no-repeat">
      <div className="mx-auto w-full max-w-[120rem]">
        <div className="flex flex-col items-start p-6 text-primary md:items-center md:p-0">
          <h1 className="mb-2 text-5xl font-medium">Divisions</h1>
          <p className="mb-10 max-w-4xl text-start text-xl md:text-center">{description}</p>
          <div className="grid w-fit grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {imageElements}
          </div>
        </div>
      </div>
    </div>
  );
}
