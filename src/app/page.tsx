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
    <main className="relative flex h-fit flex-col gap-y-12 bg-[url(/assets/apply/apply-bg.png)] bg-cover py-10 text-white sm:gap-y-16 sm:py-16 md:gap-y-20 md:py-20 lg:gap-y-24">
      <ParallaxImages />
      <div className=" mt-10 flex flex-col gap-y-[5vh]">
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <div className="flex w-full flex-col gap-y-8 lg:w-3/5">
            <div
              className={`background-container z-10 flex w-full flex-col gap-y-4 rounded-3xl border border-primary/50 bg-gray-600/10 px-6 py-8 backdrop-blur-xl sm:px-12 sm:py-10 md:z-0 md:px-16 md:py-14 lg:px-24`}
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

            <div className="background-container mx-auto mt-20 flex w-[90%] flex-col gap-y-6 rounded-3xl border border-primary/50 bg-gray-600/10 p-6 backdrop-blur-xl sm:gap-y-8 sm:p-10 md:gap-y-10 md:p-14">
              <h3 className="text-2xl font-extralight sm:text-2xl md:text-3xl lg:text-6xl">
                Upcoming Events
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Come join us at any of our events on campus! We&apos;re sure you&apos;ll find
                something you like.
              </p>
            </div>

            <div className="background-container mx-auto flex w-[80%] flex-col gap-y-4 rounded-3xl border border-primary/50 bg-gray-600/10 p-3 text-center backdrop-blur-xl sm:gap-y-6 sm:p-5 md:gap-y-8 md:p-6">
              <h3 className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
                become an official acm member
              </h3>
              <div className="flex flex-col justify-between gap-y-8 sm:flex-row sm:gap-x-8 sm:gap-y-0 md:gap-x-16">
                <div className="flex flex-col items-center gap-y-4 sm:gap-y-7">
                  <p className="text-sm sm:text-base">
                    by becoming part of one of our semester long programs (projects, research, TIP,
                    mentor program)
                  </p>
                  <Button
                    href="https://portal.acmutd.co/opportunities"
                    text="apply today"
                    bgStyle="acm"
                  />
                </div>
                <p className="text-sm sm:text-base">OR</p>
                <div className="flex flex-col items-center gap-y-4 sm:gap-y-7">
                  <p className="text-sm sm:text-base">
                    by creating an ACM portal account and attending any three of our events per year
                  </p>
                  <div className="flex flex-col gap-y-3">
                    <Button href="https://portal.acmutd.co/" text="access portal" bgStyle="acm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex w-full flex-col gap-y-8 lg:mt-0 lg:w-2/5">
            <div className="background-container flex w-full flex-col items-center rounded-3xl border border-primary/50 bg-gray-600/10 backdrop-blur-xl sm:px-8 sm:py-10 sm:pb-0 md:py-14 md:pb-0">
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                <Image
                  src={`/assets/home/sage.png`}
                  width={500}
                  height={500}
                  alt="sage"
                  className="relative z-10 h-48 w-auto md:h-64 xl:h-80"
                />
              </div>
              <div className="mt-6 w-full self-end">
                <p className="content pl-3 text-center text-xl sm:text-base">
                  Sage, an AI-powered student advisor
                </p>
              </div>
            </div>

            <div className="background-container ml-[20%] mt-20 flex h-[50%] w-[60%] flex-col gap-y-6 rounded-3xl border border-primary/50 bg-gray-600/10 p-6 backdrop-blur-xl sm:gap-y-8 sm:p-10 md:gap-y-10 md:p-14">
              <h3 className="text-xl font-extralight sm:text-lg">ACM Research Symposium</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <Sponsors />
      </div>
    </main>
  );
}

export default Home;
