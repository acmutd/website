import Image from 'next/image';
import React from 'react';

interface AboutHeaderProps {
  pageDescription: string;
}

function AboutHeader({ pageDescription }: AboutHeaderProps) {
  return (
    <div className="flex h-full items-center justify-center bg-[url(/assets/about/about-header-bg.png)] bg-cover bg-center bg-no-repeat pb-52">
      <div className="flex h-full w-full max-w-[120rem] flex-col-reverse items-center gap-x-4 gap-y-4 p-6 md:flex-row md:p-0">
        <div className="h-fit w-full max-w-lg lg:max-w-max">
          <Image
            src="/assets/about/about.jpg"
            alt="ACM UTD"
            className="object-contain"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex h-fit w-full flex-col items-center text-center align-middle">
          <div className="max-w-lg text-left text-4xl font-bold text-primary xl:text-5xl">
            The world&apos;s largest international computing society, here at UT Dallas
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
