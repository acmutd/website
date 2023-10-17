import React from 'react';
import Image from 'next/image';

export default function Divisions({ data, description }: any) {
  console.log(`/assets/about/${data[0]}/${data[0]}.png`);
  const imageElements = data.map((division: string, index: number) => {
    const isLast = index === data.length - 1;
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
    <div className="flex flex-col items-center text-primary">
      <div className="text-5xl font-medium">Divisions</div>
      <div className="max-w-4xl text-xl">{description}</div>
      <div className="grid w-fit grid-cols-2 gap-4">{imageElements}</div>
    </div>
  );
}
