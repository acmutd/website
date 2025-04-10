import React from 'react';
import Image from 'next/image';
import { homePageData } from '../../../../config/home.config';

const IndustrySponsors: React.FC = () => {
  const { sponsors } = homePageData;

  return (
    <div className="mt-8 md:mt-16 flex flex-col items-center px-4 md:px-6">
      <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center">
        Our Sponsors
      </h2>
      <div className="w-full max-w-6xl">
        {Object.entries(sponsors).map(([tierName, tier], idx) => {
          if ((idx === 2 || idx === 3) && tier.length === 0) return null; // Hide Bronze section if empty

          return (
            <div key={idx} className="mb-6 md:mb-12">
              <div className="flex items-stretch justify-center">
                <div
                  className={`flex w-full flex-col items-center justify-between rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg ${
                    idx === 0
                      ? 'bg-gold-gradient'
                      : idx === 1
                      ? 'bg-silver-gradient'
                      : 'bg-bronze-gradient'
                  }`}
                >
                  <h3
                    className={`mb-4 md:mb-6 text-lg md:text-xl lg:text-2xl font-bold ${
                      idx === 0
                        ? 'text-yellow-600'
                        : idx === 1
                        ? 'text-slate-300'
                        : 'text-amber-600'
                    }`}
                  >
                    {tierName}
                  </h3>
                  <div className="flex w-full flex-wrap items-center justify-center gap-4 md:gap-8">
                    {(tier as string[]).map((sponsor: string) => (
                      <div
                        key={sponsor}
                        className="flex items-center justify-center p-2 md:p-4 transition-transform hover:scale-105"
                      >
                        <Image
                          src={`/assets/home/sponsors/${sponsor}.png`}
                          alt={sponsor.toUpperCase()}
                          className="object-contain"
                          width={idx === 0 ? 300 : idx === 1 ? 250 : 200}
                          height={idx === 0 ? 120 : 100}
                          style={{
                            width: `${
                              idx === 0
                                ? 'min(250px, 100%)'
                                : idx === 1
                                ? 'min(200px, 100%)'
                                : 'min(150px, 100%)'
                            }`,
                            height: 'auto',
                          }}
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