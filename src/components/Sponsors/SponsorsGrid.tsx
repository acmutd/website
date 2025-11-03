import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sponsors } from '../../../config/sponsors.config';

export default function SponsorsGrid() {
  const goldSponsors = sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = sponsors.filter((s) => s.tier === 'silver');

  const SponsorLogo = ({ sponsor }: { sponsor: (typeof sponsors)[0] }) => (
    <Link
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-24 w-full flex-1 basis-[45%] items-center justify-center p-4 transition-transform hover:scale-105"
    >
      <div className="relative h-full w-full">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className={`object-contain ${
            sponsor.name === 'NorthMark' ? 'hue-rotate-180 invert' : ''
          }`}
        />
      </div>
    </Link>
  );

  return (
    <div className="flex flex-col items-center gap-8">
      {goldSponsors.length > 0 && (
        <div className="relative flex w-full max-w-2xl flex-col items-center rounded-xl bg-yellow-400/20 p-6">
          <span className="mb-4 text-xs font-bold uppercase tracking-wide text-yellow-400">
            gold
          </span>
          <div className="flex w-full flex-row flex-wrap justify-center gap-4">
            {goldSponsors.map((sponsor) => (
              <SponsorLogo key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      )}

      {silverSponsors.length > 0 && (
        <div className="relative mb-12 flex w-full max-w-2xl flex-col items-center rounded-xl bg-gray-300/20 p-6">
          <span className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-300">
            silver
          </span>
          <div className="flex w-full flex-row flex-wrap justify-center gap-4">
            {silverSponsors.map((sponsor) => (
              <SponsorLogo key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
