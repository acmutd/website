'use client';
import React from "react";
import SponsorImageCarousel from "@/components/Sponsor/SponsorImageCarousel";

import { sponsors, sponsorFaqs } from "../../../config/sponsors.config";

function Sponsor() {
  return (
    <div className="h-fit w-full py-20 flex flex-col items-center px-4 sm:px-6 md:px-8">
      {/* Sponsors Grid */}
      <div className="w-full max-w-5xl mx-auto rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-8 mb-12 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          our sponsors
        </h2>
        <p className="text-center md:px-12 text-lg md:text-xl text-white/80 mb-12">
          Our sponsors are at the heart of what we do. Through their support,
          we&apos;re able to provide students with top-tier resources, events, and
          opportunities that help them grow both professionally and personally.
        </p>
        <div className="flex flex-col gap-8 items-center">
          {/* Gold Sponsors */}
          <div className="relative bg-yellow-400/20 rounded-xl p-6 w-full max-w-2xl flex flex-col items-center">
            <span className="mb-4 text-xs uppercase text-yellow-400 font-bold tracking-wide">
              gold
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 w-full mb-4">
              {sponsors.filter(s => s.tier === 'gold').slice(0, -1).map((s) => (
                <img
                  key={s.name}
                  src={s.logo}
                  alt={s.name}
                  className="h-12 w-full object-contain mx-auto"
                />
              ))}
            </div>
            {/* Last sponsor is centered */}
            <div className="flex justify-center w-full mt-2">
              <img
                src={sponsors.filter(s => s.tier === 'gold').slice(-1)[0].logo}
                alt={sponsors.filter(s => s.tier === 'gold').slice(-1)[0].name}
                className="h-20 max-w-[140px] w-full object-contain mx-auto"
              />
            </div>
          </div>
          {/* Silver Sponsors */}
          <div className="relative bg-gray-300/20 rounded-xl p-6 w-full max-w-2xl flex flex-col items-center space-y-4 mb-12">
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs uppercase text-gray-300 font-bold tracking-wide">
              silver
            </span>
            <div className="flex justify-center items-center w-full">
              {sponsors.filter(s => s.tier === 'silver').map(s => (
                <img
                  key={s.name}
                  src={s.logo}
                  alt={s.name}
                  className="h-12 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Image Carousel */}
      <div className="w-full max-w-5xl mb-20 ">
        <SponsorImageCarousel />
      </div>

      {/* Sponsor FAQ Section */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold pb-12 sm:pb-20">
        sponsor faq
      </h1>

      <div className="flex flex-col gap-y-12 w-full max-w-5xl">
        {sponsorFaqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-primary/50 bg-gray-600/10 px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10"
          >
            <h2 className="md:text-lg sm:text-xl font-bold mb-4">
              Q: {faq.question}
            </h2>
            <p className="md:text-l sm:text-base text-gray-300">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;