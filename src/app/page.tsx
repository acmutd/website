'use client';
import React from 'react';
import Image from 'next/image';
import { homePageData } from '../../config/home.config';
import ParallaxImages from '@/components/parallaxImages';
import Sponsors from '@/components/Home/SponsorCarousel';
import { NewsletterPopup } from '@/components/Home/NewsletterPopup';
import WhyJoin from '@/components/Home/WhyJoin';
import DivisionsGrid from '@/components/Home/DivisionsGrid';
import ReadyToJoin from '@/components/Home/ReadyToJoin';
import ScrollIndicator from '@/components/Home/ScrollIndicator';

function Home() {
  const icons = Object.keys(homePageData.community);
  const iconLinks = Object.values(homePageData.community);

  return (
    <main className="relative flex h-fit flex-col gap-y-12 bg-[url(/assets/apply/apply-bg.png)] bg-cover text-white">
      <ParallaxImages />
      <div className="relative flex h-screen flex-col items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24">
        <NewsletterPopup />
        <div className="flex flex-col items-center justify-center">
          <div className="z-10 flex w-full max-w-7xl flex-col gap-y-8">
            <div
              className={`background-container z-10 flex w-full flex-col items-center gap-y-4 rounded-3xl border border-primary/50 bg-gray-600/10 px-6 py-8 backdrop-blur-xl sm:px-12 sm:py-10 md:z-0 md:px-16 md:py-14 lg:px-24`}
            >
              <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
                association for computing machinery
              </h1>
              <p className="text-center text-base sm:text-lg md:text-md lg:text-xl">
                we&apos;re a team of students with one goal: building a greater, more collaborative
                computing community at The University of Texas at Dallas.
              </p>
              <div className="z-10 flex w-fit flex-row items-center justify-center gap-x-4 rounded-lg border border-primary/50 bg-gray-300/10 bg-acm-gradient px-4 py-3 sm:gap-x-6 sm:px-6 sm:py-4 md:px-8">
                {icons.map((icon: string, idx: number) => {
                  return (
                    <a href={iconLinks[idx]} key={idx}>
                      <Image
                        src={`/assets/home/icons/${icon}.png`}
                        alt=""
                        className="object-contain"
                        width={20}
                        height={20}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </div>

      <div id="why-join" className="py-10 sm:py-16 md:py-20 lg:py-24">
        <WhyJoin />
        <DivisionsGrid />
        <ReadyToJoin />
        <div className="flex w-full flex-col items-center justify-center px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16">
          <Sponsors />
        </div>
      </div>
    </main>
  );
}

export default Home;
