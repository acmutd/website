import React from 'react';

export default function Divisions({ data, description }: any) {
  console.log(`/assets/about/${data[0]}/${data[0]}.png`);
  const imageElements = data.map((division: string, index: number) => {
    const isLast = index === data.length - 1;
    return (
      <img
        src={`/assets/about/${division}/${division}.png`}
        alt={division}
        key={division}
        className="h-20"
      />
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
