'use client';
import React from 'react';
import Image from 'next/image';
import { homePageData } from '../../config/home.config';
import ParallaxImages from '@/components/parallaxImages';
import { Button } from '@/components/Button';
import Sponsors from '@/components/Home/SponsorCarousel';

function Home() {
  const icons = Object.keys(homePageData.community);
  const iconLinks = Object.values(homePageData.community);

  return (
    <main className="relative flex h-fit flex-col gap-y-20 sm:gap-y-32 md:gap-y-40 lg:gap-y-56 bg-[url(/assets/apply/apply-bg.png)] bg-cover py-10 sm:py-16 md:py-20 text-white">
      <ParallaxImages />
      <div className="flex flex-col gap-y-8 sm:gap-y-12 pt-[3rem] sm:pt-[4rem] md:pt-[5rem] px-4 sm:px-6 md:px-8 lg:px-0 lg:flex-row lg:gap-x-12">
        <div
          className={`background-container z-10 flex w-full flex-col gap-y-4 rounded-3xl sm:rounded-r-3xl border border-primary/50 sm:border-y sm:border-r bg-gray-600/10 px-6 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-10 md:py-14 backdrop-blur-xl md:z-0 lg:max-w-[55vw]`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            association for computing machinery
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            We&apos;re a team of students with one goal: building a greater, more collaborative
            computing community at The University of Texas at Dallas.
          </p>
          <div className="justify-content-center z-10 flex w-fit flex-row items-center gap-x-4 sm:gap-x-6 rounded-lg border border-primary/50 bg-gray-300/10 bg-acm-gradient px-4 sm:px-6 md:px-8 py-3 sm:py-4">
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
        <div className="z-10 flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-10 px-4 sm:px-6 md:px-8 lg:px-0 lg:items-start">
          {homePageData.cards.map((card, idx) => {
            return (
              <div
                className="background-container flex w-full sm:max-w-sm flex-col items-start rounded-3xl border border-primary/50 bg-gray-600/10 py-4 sm:py-6 px-6 sm:px-8 backdrop-blur-xl"
                key={idx}
              >
                <p className="content text-lg sm:text-xl">{card.description}</p>
                <div className="mt-4 self-end">
                  <Button
                    href={card.link}
                    text={card.linkText}
                    bgStyle="acm"
                    textStyles="text-sm sm:text-base md:text-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="background-container mx-4 sm:mx-6 md:mx-8 lg:ml-auto flex w-full lg:max-w-[65vw] flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 rounded-3xl sm:rounded-l-3xl border border-primary/50 sm:border-y sm:border-l bg-gray-600/10 p-6 sm:p-10 md:p-14 text-center backdrop-blur-xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">become an official acm member</h3>
        <div className="flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-y-0 sm:gap-x-8 md:gap-x-16">
          <div className="flex flex-col items-center gap-y-4 sm:gap-y-7">
            <p className="text-sm sm:text-base">
              by becoming part of one of our semester long programs (projects, research, TIP, mentor
              program)
            </p>
            <Button
              href="https://portal.acmutd.co/opportunities"
              text="apply today"
              bgStyle="acm"
            />
          </div>
          <p className="text-sm sm:text-base">OR</p>
          <div className="flex flex-col items-center gap-y-4 sm:gap-y-7">
            <p className="text-sm sm:text-base">by creating an ACM portal account and attending any three of our events per year</p>
            <div className="flex flex-col gap-y-3">
              <Button href="https://portal.acmutd.co/" text="access portal" bgStyle="acm" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
        <Sponsors />
      </div>
    </main>
  );
}

export default Home;
