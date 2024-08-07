import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { homePageData } from '../../config/home.config';

function Home() {
  const icons = Object.keys(homePageData.community);
  const iconLinks = Object.values(homePageData.community);

  return (
    <main className="flex h-fit flex-col gap-y-56 bg-[url(/assets/apply/apply-bg.png)] bg-cover py-20 text-white">
      <div className="flex flex-col gap-x-11 md:flex-col   lg:flex-row">
        <div className="flex max-w-3xl flex-col gap-y-4 rounded-r-2xl border-y border-r border-primary/50 bg-gray-300/10 px-24 py-14">
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-7xl">
            association of computing machinery
          </h1>
          <p className="text-lg lg:text-2xl">
            We&apos;re a team of students with one goal: building a greater, more collaborative
            computing community at The University of Texas at Dallas.
          </p>
          <div className="flex w-fit flex-row gap-x-6 bg-acm-gradient px-8 py-4">
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
        <div className="mt-12 flex flex-col gap-y-10">
          {homePageData.cards.map((card, idx) => {
            return (
              <div
                className="flex max-w-sm flex-col items-start rounded-2xl border-primary/50 bg-gray-300/10 py-6 pl-28 pr-3"
                key={idx}
              >
                <p className="text-xl">{card.description}</p>
                <div className="mt-2 self-end">
                  <Link
                    href={card.link}
                    className="flex h-[2.30rem] w-fit items-center justify-center bg-acm-gradient px-4 py-2 text-base font-bold md:text-xl"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ml-auto flex max-w-5xl flex-col gap-y-10 rounded-l-2xl border-y border-l border-primary/50 bg-gray-300/10 p-14 text-center">
        <h3 className="text-2xl font-medium lg:text-4xl">become an official acm member</h3>
        <div className="flex flex-row justify-between gap-x-16">
          <div className="flex flex-col items-center gap-y-7">
            <p>
              by becoming part of one of our semester long programs (projects, research, TIP, mentor
              program)
            </p>
            <Link
              href="/"
              className="flex h-[3rem] md:h-[2.30rem] w-fit items-center justify-center bg-acm-gradient px-4 py-2 text-base font-bold md:text-xl"
            >
              apply today
            </Link>
          </div>
          <p>OR</p>
          <div className="flex flex-col items-center gap-y-7">
            <p>
              by creating an ACM portal account and attending any five of our events per semester
            </p>
            <div className="flex flex-col gap-y-3">
              <Link
                href="/"
                className="flex h-[3rem] md:h-[2.30rem] w-fit items-center justify-center bg-acm-gradient px-4 py-2 text-base font-bold md:text-xl"
              >
                apply today
              </Link>
              <Link
                href="/"
                className="flex h-[3rem] md:h-[2.30rem] w-fit items-center justify-center bg-acm-gradient px-4 py-2 text-base font-bold md:text-xl"
              >
                apply today
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-10">
        <div className="flex flex-col gap-y-8 rounded-r-2xl border-y border-r border-primary/50 bg-gray-300/10 p-10 text-center shadow-lg lg:p-14">
          <h3 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">Our Sponsors</h3>
          {Object.values(homePageData.sponsors).map((tier, idx) => (
            <div key={idx} className="mb-8">
              <h1
                className={`mb-4 text-xl font-bold lg:text-2xl ${
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
              <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tier.map((sponsor) => (
                  <div key={sponsor} className="flex items-center justify-center rounded-lg p-4">
                    <Image
                      src={`/assets/home/sponsors/${sponsor}.png`}
                      alt={sponsor.toUpperCase()}
                      className="object-contain"
                      width={idx === 0 ? 350 : idx === 1 ? 300 : 250}
                      height={idx === 0 ? 350 : idx === 1 ? 300 : 250}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
