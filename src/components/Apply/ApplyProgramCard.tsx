import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ApplyProgramCardProps {
  title: string;
  image: string;
  link: string;
  division: string;
}

function ApplyProgramCard({ title, image, link, division }: ApplyProgramCardProps) {
  return (
    <Link
      href={link}
      className="relative flex  w-full items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-70"
    >
      <Image
        src={`/assets/about/${division}/${division}.png`}
        width={500}
        height={500}
        alt={division}
        className="absolute left-8 top-5 z-10 flex h-8 w-auto transform flex-col md:left-10 md:top-6 md:h-12 xl:h-16"
      />
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col">
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl font-bold text-primary md:text-4xl xl:text-5xl">
          {title}
        </h1>
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-3xl bg-black/70" />

      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="aspect-[7/3] w-full rounded-3xl object-cover"
      />
    </Link>
  );
}

export default ApplyProgramCard;
