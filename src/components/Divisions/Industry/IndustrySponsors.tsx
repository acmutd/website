import React from 'react';
import Image from 'next/image';
import { homePageData } from '../../../../config/home.config';

const IndustrySponsors: React.FC = () => {
  const { sponsors } = homePageData;

  return (
    <div className="mt-16 flex flex-col items-center">
      <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">Our Sponsors</h2>
      <div className="w-full max-w-6xl">
        {Object.entries(sponsors).map(([tierName, tier], idx) => {
          if ((idx === 2 || idx === 3) && tier.length === 0) return null; // Hide Bronze section if empty

          return (
            <div key={idx} className="mb-12">
              <div className="flex items-stretch justify-center">
                <div
                  className={`flex w-full flex-col items-center justify-between rounded-xl p-6 shadow-lg ${
                    idx === 0
                      ? 'bg-gold-gradient'
                      : idx === 1
                      ? 'bg-silver-gradient'
                      : 'bg-bronze-gradient'
                  }`}
                >
                  <h3
                    className={`mb-6 text-xl font-bold md:text-2xl ${
                      idx === 0
                        ? 'text-yellow-600'
                        : idx === 1
                        ? 'text-slate-300'
                        : 'text-amber-600'
                    }`}
                  >
                    {tierName}
                  </h3>
                  <div className="flex w-full flex-wrap items-center justify-center gap-8">
                    {(tier as string[]).map((sponsor: string) => (
                      <div
                        key={sponsor}
                        className="flex items-center justify-center p-4 transition-transform hover:scale-105"
                      >
                        <Image
                          src={`/assets/home/sponsors/${sponsor}.png`}
                          alt={sponsor.toUpperCase()}
                          className="object-contain"
                          width={idx === 0 ? 300 : idx === 1 ? 250 : 200}
                          height={idx === 0 ? 120 : 100}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustrySponsors;