import React from 'react';

export default function Divisions({ data }: any) {
  const imageElements = data.divisions.map((division: string, index: number) => {
    const isLast = index === data.divisions.length - 1;

    return (
      <img src={`/assets/about/${division}.png`} alt={division} key={division} className='h-20' />
    );
  });

  return (
    <div className="flex flex-col items-center text-primary">
      <div className="text-5xl font-medium">Divisions</div>
      <div className="text-xl max-w-4xl">{data.description}</div>
      <div className="grid w-fit grid-cols-2 gap-4">{imageElements}</div>
    </div>
  );
}
