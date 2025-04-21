'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Division } from '../../../lib/types';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ChevronDown } from 'lucide-react';

interface DivisionCardProps {
  division: string;
  divisionData: Division;
}

export default function DivisionCard({ division, divisionData }: DivisionCardProps) {
  const learnMoreLink = divisionData.links.find(link => link.name.toLowerCase().includes('learn more'));
  const restLinks = divisionData.links.filter(link => !link.name.toLowerCase().includes('learn more'));

  const LinksContent = () => (
    <div className="flex flex-col gap-1">
      {restLinks.map((link, i) => (
        <Link
          key={i}
          href={link.link}
          className="block w-full rounded-md px-3 py-2 text-sm font-medium text-primary transition-all duration-200 ease-in-out hover:bg-primary/10 text-center"
          target={link.link.includes('http') ? '_blank' : '_self'}
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
            <div className={`flex items-center rounded-lg bg-${division}-gradient p-[1px]`}>
              {learnMoreLink ? <Link
                href={learnMoreLink.link}
                className="flex w-[13rem] items-center justify-center rounded-l-lg bg-gray-300/10 px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                target={learnMoreLink.link.includes('http') ? '_blank' : '_self'}
              >
                Learn more
              </Link> : ( <div className="flex w-[13rem] items-center justify-center rounded-l-lg bg-gray-300/10 px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                Learn more
              </div>)
              }

              {restLinks.length > 0 && (
                <Popover>
                  <PopoverTrigger>
                    <div className={`flex w-[42px] rounded-r-lg h-[42px] items-center justify-center bg-gray-300/10 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105`}>
                        <ChevronDown className="h-5 w-5 stroke-[2.5]" />
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
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
