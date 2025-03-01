import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ApplyProgramCardProps {
  title: string;
  image: string;
  link: string;
}

function ApplyProgramCard({ title, image, link }: ApplyProgramCardProps) {
  return (
    <Link href={link} className="relative flex w-full items-center justify-center">
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl font-bold text-primary xl:text-5xl">
        {title}
      </h1>
      <Image src={image} alt={title} width={500} height={500} className="w-full rounded-3xl" />
    </Link>
  );
}

export default ApplyProgramCard;
