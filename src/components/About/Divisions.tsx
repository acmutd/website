import React from 'react';
import Image from 'next/image';
import { Division } from '../../../lib/types';
import Link from 'next/link';
import { Button } from '../Button';

interface DivisionsProps {
  data: { [key: string]: Division };
  description: string;
}

export default function Divisions({ data, description }: DivisionsProps) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  console.log(values);
  const divisionCard = keys.map((division: string, index: number) => {
    const divisionData = values[index];

    return (
      <div className={`relative m-10 h-20 w-72 rounded-md p-4`} key={division}>
        <div className="relative h-full w-full">
          <Image
            src={`/assets/about/${division}/${division}.png`}
            alt={division}
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-4">
          {divisionData.links && (
            <div className="m-5 flex flex-col gap-2">
              {divisionData.links.map((link, i) => (
                <Button
                  key={i}
                  href={link.link.startsWith('http') ? link.link : `https://${link.link}`}
                  bgStyle={division}
                  width="w-[13.5rem]"
                  text={link.name}
                ></Button>
              ))}
            </div>
          )}
        </div>
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
            {divisionCard.slice(0, 6)}
          </div>
          <div className="mt-4 flex justify-center gap-4">{divisionCard.slice(6)}</div>
        </div>
      </div>
    </div>
  );
}
