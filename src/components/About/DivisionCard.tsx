'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Division } from '../../../lib/types';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface DivisionCardProps {
  division: string;
  divisionData: Division;
}

export default function DivisionCard({ division, divisionData }: DivisionCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const LinksContent = () => (
    <div className="flex flex-col gap-1">
      {divisionData.links.map((link, i) => (
        <Link
          key={i}
          href={link.link}
          className="block w-full rounded-md px-3 py-2 text-sm font-medium text-primary transition-all duration-200 ease-in-out hover:bg-primary/10 text-center"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div
      className="relative flex min-w-[300px] w-full max-w-[400px] flex-col rounded-3xl bg-white/5 p-4"
      key={division}
    >
      <div className="relative h-[100px] sm:h-[120px] w-full">
        <Image
          src={`/assets/about/${division}/${division}.png`}
          alt={division}
          fill
          className="object-contain"
        />
      </div>
      <div className="mt-4 flex-grow">
        {divisionData.links && (
          <div className="m-5 flex flex-col items-center gap-2">
            {isMobile ? (
              <Popover>
                <PopoverTrigger>
                  <div className={`flex w-[13rem] items-center justify-center rounded-lg border border-primary/50 bg-gray-300/10 bg-${division}-gradient px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary hover:shadow-lg cursor-pointer`}>
                    Learn more
                  </div>
              </PopoverTrigger>
                <PopoverContent
                  className="w-[13.5rem] rounded-lg border border-primary bg-gray-600/50 backdrop-blur-sm p-1.5 shadow-lg transition-all duration-300 ease-in-out z-50"
                  align="center"
                  sideOffset={2}
                >
                  <LinksContent />
                </PopoverContent>
              </Popover>
            ) : (
              <HoverCard openDelay={20}>
                <HoverCardTrigger asChild>
                  <div className={`flex w-[13rem] items-center justify-center rounded-lg border border-primary/50 bg-gray-300/10 bg-${division}-gradient px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary hover:shadow-lg cursor-pointer`}>
                    Learn more
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  className="w-[13.5rem] rounded-lg border border-primary bg-gray-600/50 backdrop-blur-sm p-1.5 shadow-lg transition-all duration-300 ease-in-out z-50"
                  align="center"
                  sideOffset={2}
                >
                  <LinksContent />
                </HoverCardContent>
              </HoverCard>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
