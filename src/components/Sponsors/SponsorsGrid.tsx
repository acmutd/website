import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sponsors } from "../../../config/sponsors.config";

export default function SponsorsGrid() {
  // Gold
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const goldIsOdd = goldSponsors.length % 2 === 1;
  // Silver
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');
  const silverIsOdd = silverSponsors.length % 2 === 1;

  return (
    <div className="flex flex-col gap-8 items-center">
      {/* Gold Sponsors */}
      <div className="relative bg-yellow-400/20 rounded-xl p-6 w-full max-w-2xl flex flex-col items-center">
        <span className="mb-4 text-xs uppercase text-yellow-400 font-bold tracking-wide">gold</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 w-full">
          {(goldIsOdd ? goldSponsors.slice(0, -1) : goldSponsors).map((s) => (
            <Link key={s.name} href={s.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={s.logo}
                alt={s.name}
                width={200}
                height={60}
                className="h-12 w-full object-contain mx-auto my-4 transition-transform hover:scale-105"
              />
            </Link>
          ))}
        </div>
        {goldIsOdd && goldSponsors.length > 0 && (
          <div className="flex justify-center w-full">
            <Link href={goldSponsors[goldSponsors.length - 1].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={goldSponsors[goldSponsors.length - 1].logo}
                alt={goldSponsors[goldSponsors.length - 1].name}
                width={200}
                height={60}
                className="h-12 w-full object-contain mx-auto my-4 transition-transform hover:scale-105"
              />
            </Link>
          </div>
        )}
      </div>
      {/* Silver Sponsors */}
      <div className="relative bg-gray-300/20 rounded-xl p-6 w-full max-w-2xl flex flex-col items-center space-y-4 mb-12">
        <span className="absolute top-4 text-xs uppercase text-gray-300 font-bold tracking-wide">silver</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 w-full mb-4">
          {(silverIsOdd ? silverSponsors.slice(0, -1) : silverSponsors).map((s) => (
            <Link key={s.name} href={s.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={s.logo}
                alt={s.name}
                width={200}
                height={60}
                className="h-12 w-full object-contain mx-auto my-4 transition-transform hover:scale-105"
              />
            </Link>
          ))}
        </div>
        {silverIsOdd && silverSponsors.length > 0 && (
          <div className="flex justify-center w-full mt-2">
            <Link href={silverSponsors[silverSponsors.length - 1].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={silverSponsors[silverSponsors.length - 1].logo}
                alt={silverSponsors[silverSponsors.length - 1].name}
                width={200}
                height={60}
                className="h-12 max-w-[140px] w-full object-contain mx-auto transition-transform hover:scale-105"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
