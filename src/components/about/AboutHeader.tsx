import Image from 'next/image';
import React from 'react';

interface AboutHeaderProps {
  pageDescription: string;
}

function AboutHeader({ pageDescription }: AboutHeaderProps) {
  return (
    <div className="flex h-full items-center justify-center bg-[url(/assets/about/about-header-bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="flex h-full w-full max-w-[120rem] flex-col-reverse items-center gap-x-4 gap-y-4 p-6 md:flex-row md:p-0">
        <div className="h-fit w-full max-w-lg lg:max-w-max">
          <Image
            src="/assets/about/about.jpg"
            alt="ACM UTD"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
        <div className="flex h-fit w-full flex-col items-center text-center align-middle">
          <div className="max-w-lg text-left text-4xl font-bold text-primary xl:text-5xl">
            we&apos;re just a group of people
          </div>
          <div className="bg-about-graident relative mt-4 max-w-lg rounded-3xl bg-opacity-10 p-8 text-primary shadow-2xl backdrop-blur-xl">
            <div className="absolute left-0 top-0 h-full w-full rounded-3xl border border-primary/50 opacity-50"></div>
            <p className="text-sm lg:text-lg">{pageDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
