'use client';
import React from "react";
import Image from "next/image";
import SponsorImageCarousel from "@/components/Sponsor/SponsorImageCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { sponsors, sponsorFaqs } from "../../../config/sponsors.config";

function Sponsor() {
  return (
    <div className="h-fit w-full bg-[url(/assets/projects/proj-bg.png)] bg-cover py-20 flex flex-col items-center px-4 sm:px-6 md:px-8">
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
              {/* sponsors.filter(s => s.tier === 'gold').slice(0, -1).map((s) -> ( if odd number of sponsors */}
              {sponsors.filter(s => s.tier === 'gold').map((s) => (
                <Image
                  key={s.name}
                  src={s.logo}
                  alt={s.name}
                  width={200}
                  height={60}
                  className="h-12 w-full object-contain mx-auto"
                />
              ))}
            </div>
            {/* Last sponsor is centered - ONLY INCLUDE IF ODD NUM OF SPONSORS
            <div className="flex justify-center w-full mt-2">
              <img
                src={sponsors.filter(s => s.tier === 'gold').slice(-1)[0].logo}
                alt={sponsors.filter(s => s.tier === 'gold').slice(-1)[0].name}
                className="h-20 max-w-[140px] w-full object-contain mx-auto"
              />
            </div> */}
          </div>
          {/* Silver Sponsors */}
          <div className="relative bg-gray-300/20 rounded-xl p-6 w-full max-w-2xl flex flex-col items-center space-y-4 mb-12">
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs uppercase text-gray-300 font-bold tracking-wide">
              silver
            </span>
            <div className="flex justify-center items-center w-full">
              {sponsors.filter(s => s.tier === 'silver').map(s => (
                <Image
                  key={s.name}
                  src={s.logo}
                  alt={s.name}
                  width={200}
                  height={60}
                  className="h-12 w-full object-contain mx-auto"
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
      <div id="faq" className="pt-12 text-[#CACACA] w-full max-w-4xl items-center flex flex-col">
        <h1 className="text-3xl md:text-4xl">frequently asked questions</h1>
        <div className="mb-10 md:mb-20 h-[1px] w-40 bg-[#cacacab0]" />

        <div className="flex flex-col gap-y-12 w-full max-w-5xl">
          <Accordion type="multiple" className="w-full max-w-4xl text-[#CACACA]">
            {sponsorFaqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i} className="border-b border-[#cacacab0] pb-4">
                <AccordionTrigger className="flex items-start text-lg md:text-xl text-white hover:no-underline hover:text-[#CACACA] transition-colors">
                  <span className="flex items-start text-left">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-6">
                  <p className="text-base text-[#CACACA] leading-relaxed mb-4">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;