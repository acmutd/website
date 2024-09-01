'use client';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import { homePageData } from '../../config/home.config';
import { peechi, orb1, orb2, orb3, orb4, orb5, orb6 } from './data';
import ParallaxImages from '@/components/parallaxImages';

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
          <div className="justify-content-center z-10 flex w-fit flex-row items-center gap-x-6 bg-acm-gradient px-8 py-4">
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
                  <Link
                    href={card.link}
                    className="content z-20 flex h-[2.30rem] w-fit items-center justify-center rounded-md bg-acm-gradient px-4 py-2 text-base font-bold md:text-xl"
                  >
                    {card.linkText}
                  </Link>
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
            <Link
              href="https://portal.acmutd.co/opportunities"
              className="z-20 flex h-[3rem] w-fit items-center justify-center rounded-md bg-acm-gradient px-4 py-2 text-base font-bold md:h-[2.30rem] md:text-xl"
            >
              apply today
            </Link>
          </div>
          <p>OR</p>
          <div className="flex flex-col items-center gap-y-7">
            <p>by creating an ACM portal account and attending any three of our events per year</p>
            <div className="flex flex-col gap-y-3">
              <Link
                href="https://portal.acmutd.co/"
                className="z-20 flex h-[3rem] w-fit items-center justify-center rounded-md bg-acm-gradient px-4 py-2 text-base font-bold md:h-[2.30rem] md:text-xl"
              >
                access portal
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-10">
        <div className="background-container z-10 flex max-w-[100vw] flex-col gap-y-8 rounded-r-3xl border-y border-r border-primary/50 bg-gray-600/10 p-10 text-center shadow-lg backdrop-blur-xl md:z-0 md:max-w-[90vw] lg:max-w-[85vw] lg:p-14">
          <h3 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">Our Sponsors</h3>
          {Object.values(homePageData.sponsors).map((tier, idx) => (
            <div key={idx} className="content mb-8">
              <div className="flex items-stretch justify-center gap-6">
                <div
                  className={`flex h-[400px] w-5/6 flex-col items-center justify-between shadow-lg ${
                    idx === 0
                      ? 'bg-gold-gradient'
                      : idx === 1
                      ? 'bg-silver-gradient'
                      : idx === 2
                      ? 'bg-bronze-gradient'
                      : 'bg-green-gradient'
                  }`}
                >
                  <h1
                    className={`pt-8 text-xl font-bold lg:text-2xl ${
                      idx === 0
                        ? 'text-yellow-600'
                        : idx === 1
                        ? 'text-slate-300'
                        : idx === 2
                        ? 'text-amber-600'
                        : 'text-green-600'
                    }`}
                  >
                    {Object.keys(homePageData.sponsors)[idx]}
                  </h1>
                  <div className="flex w-full flex-1 items-center justify-center">
                    {tier.map((sponsor) => (
                      <div key={sponsor} className="flex items-center justify-center lg:p-16">
                        <Image
                          src={`/assets/home/sponsors/${sponsor}.png`}
                          alt={sponsor.toUpperCase()}
                          className="object-contain"
                          width={idx === 0 ? 300 : idx === 1 ? 250 : 200}
                          height={100}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
