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
    <main className="relative flex h-fit flex-col gap-y-56 bg-[url(/assets/apply/apply-bg.png)] bg-cover py-20 text-white">
      <ParallaxImages />
      <div className="flex flex-col gap-x-12 pt-[5rem] md:flex-col lg:flex-row">
        <div
          className={`background-container z-10 flex max-w-[100vw] flex-col gap-y-4 rounded-r-3xl border-y border-r border-primary/50 bg-gray-600/10 px-24 py-14 backdrop-blur-xl md:z-0 md:max-w-[90vw] lg:max-w-[55vw]`}
        >
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
            association for computing machinery
          </h1>
          <p className="text-lg lg:text-2xl">
            We&apos;re a team of students with one goal: building a greater, more collaborative
            computing community at The University of Texas at Dallas.
          </p>
          <div className="justify-content-center z-10 flex w-fit flex-row items-center gap-x-6 rounded-lg border border-primary/50 bg-gray-300/10 bg-acm-gradient px-8 py-4">
            {icons.map((icon: string, idx: number) => {
              return (
                <a href={iconLinks[idx]} key={idx}>
                  <Image
                    src={`/assets/home/icons/${icon}.png`}
                    alt=""
                    className="object-contain"
                    width={25}
                    height={25}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="z-10 mx-10 mt-12 flex flex-col items-center gap-y-10 md:items-start lg:mx-0">
          {homePageData.cards.map((card, idx) => {
            return (
              <div
                className="background-container flex max-w-sm flex-col items-start rounded-3xl border border-primary/50 bg-gray-600/10 py-6 pl-8 pr-8 backdrop-blur-xl"
                key={idx}
              >
                <p className="content text-xl">{card.description}</p>
                <div className="mt-2 self-end">
                  <Button
                    href={card.link}
                    text={card.linkText}
                    bgStyle="acm"
                    textStyles="text-base md:text-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="background-container ml-auto flex max-w-[100vw] flex-col gap-y-10 rounded-l-3xl border-y border-l border-primary/50 bg-gray-600/10 p-14 text-center backdrop-blur-xl md:max-w-[90vw] lg:max-w-[65vw]">
        <h3 className="text-2xl font-medium lg:text-4xl">become an official acm member</h3>
        <div className="flex flex-row justify-between gap-x-16">
          <div className="flex flex-col items-center gap-y-7">
            <p>
              by becoming part of one of our semester long programs (projects, research, TIP, mentor
              program)
            </p>
            <Button
              href="https://portal.acmutd.co/opportunities"
              text="apply today"
              bgStyle="acm"
            />
          </div>
          <p>OR</p>
          <div className="flex flex-col items-center gap-y-7">
            <p>by creating an ACM portal account and attending any three of our events per year</p>
            <div className="flex flex-col gap-y-3">
              <Button href="https://portal.acmutd.co/" text="access portal" bgStyle="acm" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-10">
        <Sponsors />
      </div>
    </main>
  );
}

export default Home;
