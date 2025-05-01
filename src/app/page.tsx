'use client';
import React from 'react';
import Image from 'next/image';
import { homePageData, upcomingEvents } from '../../config/home.config';
import ParallaxImages from '@/components/parallaxImages';
import { Button } from '@/components/Button';
import Sponsors from '@/components/Home/SponsorCarousel';
import { FlexCarousel } from '@/components/Home/FlexCarousel';
import { developmentCarouselImages } from '../../config/development.config';
import { EventCarousel } from '@/components/Home/EventCarousel';

function Home() {
  const icons = Object.keys(homePageData.community);
  const iconLinks = Object.values(homePageData.community);

  return (
    <main className="relative flex h-fit flex-col gap-y-16 bg-[url(/assets/apply/apply-bg.png)] bg-cover py-5 text-white sm:gap-y-20 sm:py-16 md:gap-y-24 md:py-20 lg:gap-y-20 lg:py-32">
      <ParallaxImages />
      <div className="flex flex-col gap-y-8 px-4 pt-[3rem] sm:gap-y-12 sm:px-6 sm:pt-[4rem] md:px-8 md:pt-[5rem] lg:flex-row lg:gap-x-12 lg:px-0">
        <div
          className={`background-container z-10 flex w-full flex-col gap-y-4 rounded-3xl border border-primary/50 bg-gray-600/10 px-6 py-8 backdrop-blur-xl sm:rounded-r-3xl sm:border-y sm:border-r sm:px-12 sm:py-10 md:z-0 md:px-16 md:py-14 lg:max-w-[55vw] lg:px-24`}
        >
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
            association for computing machinery
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            We&apos;re a team of students with one goal: building a greater, more collaborative
            computing community at The University of Texas at Dallas.
          </p>
          <div className="justify-content-center z-10 flex w-fit flex-row items-center gap-x-4 rounded-lg border border-primary/50 bg-gray-300/10 bg-acm-gradient px-4 py-3 sm:gap-x-6 sm:px-6 sm:py-4 md:px-8">
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
        <FlexCarousel items={developmentCarouselImages} />
      </div>

      <div className="flex flex-col gap-x-8 px-4 sm:px-6 md:px-8 lg:flex-row lg:px-12">
        <div className="flex flex-col gap-y-8 lg:w-[60%]">
          <div className="background-container flex w-full flex-col gap-y-4 rounded-3xl border border-primary/50 bg-gray-600/10 p-6 backdrop-blur-xl sm:p-10">
            <h2 className="text-3xl font-medium md:text-5xl lg:text-6xl">Upcoming Events</h2>
            <p className="text-lg md:text-xl">
              Come join us at any of our events on campus! We&apos;re sure you&apos;ll find
              something you like.
            </p>
          </div>

          <div className="background-container flex w-full flex-col gap-y-6 rounded-3xl border border-primary/50 bg-gray-600/10 p-6 backdrop-blur-xl sm:p-10">
            <h3 className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
              become an official acm member
            </h3>
            <div className="flex flex-col justify-between gap-y-8 sm:flex-row sm:gap-x-8 sm:gap-y-0">
              <div className="flex flex-col items-center gap-y-4">
                <p className="text-center text-sm sm:text-base">
                  by becoming part of one of our semester long programs (projects, research, TIP,
                  mentor program)
                </p>
                <Button
                  href="https://portal.acmutd.co/opportunities"
                  text="apply today"
                  bgStyle="acm"
                />
              </div>
              <p className="self-center text-sm sm:text-base">OR</p>
              <div className="flex flex-col items-center gap-y-4">
                <p className="text-center text-sm sm:text-base">
                  by creating an ACM portal account and attending any three of our events per year
                </p>
                <Button href="https://portal.acmutd.co/" text="access portal" bgStyle="acm" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%]">
          <EventCarousel items={upcomingEvents} />
        </div>
      </div>

      <div className="flex flex-row px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <Sponsors />
      </div>
    </main>
  );
}

export default Home;
