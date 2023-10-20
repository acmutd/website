import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ApplyProgramCardProps {
  division: string;
  title: string;
  image: string;
  link: string;
}

function ApplyProgramCard({ division, title, image, link }: ApplyProgramCardProps) {
  return (
    <Link
      href={link}
      className="relative flex  w-full items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-70"
    >
      <Image
        src={`/assets/divisions/${division}.png`}
        width={500}
        height={500}
        alt={division}
        className="absolute left-8 top-5 z-10 flex h-8 w-auto transform flex-col md:left-10 md:top-6 md:h-12 xl:h-16"
      />

      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col">
        <h1 className=" mt-4 text-center text-4xl font-bold text-white lg:text-5xl">{title}</h1>
      </div>
      <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform flex-col bg-black/70" />

      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
    </Link>
  );
}

export default ApplyProgramCard;
