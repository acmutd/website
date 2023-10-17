import Image from 'next/image';
import React from 'react';

function ApplyHeader() {
  return (
    <div className="relative flex h-full w-full justify-end rounded-3xl md:h-[40%] lg:h-[55%]">
      <Image
        src="/assets/apply/apply-header-bg.png"
        alt="apply"
        width={1470.405}
        height={314}
        className="w-full rounded-[5rem]"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center space-x-10 md:flex-row ">
        <div className="w-full max-w-xl">
          <h1 className="mb-10 text-3xl font-bold text-primary xl:text-5xl">apply</h1>
          <p className="text-lg font-medium text-primaryDark xl:text-2xl">
            Become a part of ACM today by applying to one of our semester long programs or to be an
            officer!
            <br />
            <br />
            All open applications can be found in our member portal at
            portal.acmutd.co/applications'
          </p>
        </div>
        <Image
          src="/assets/apply/apply-header-image.png"
          width={500}
          height={500}
          alt="apply"
          className="w-full max-w-xl"
        />
      </div>
    </div>
  );
}

export default ApplyHeader;
