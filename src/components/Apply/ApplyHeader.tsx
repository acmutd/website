import Image from 'next/image';
import React from 'react';

function ApplyHeader() {
  return (
    <div className="flex h-[70%] w-full justify-end pl-10 md:h-[55%]">
      <div className="relative mb-6 w-full overflow-hidden rounded-bl-3xl rounded-tl-3xl border border-primary/50 bg-apply-gradient shadow-2xl">
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center p-6 md:flex-row md:space-x-10">
          <div className="w-full max-w-md lg:max-w-xl">
            <h1 className="mb-10 text-3xl font-bold text-primary xl:text-5xl">apply</h1>
            <p className="text-lg font-medium text-primaryDark xl:text-2xl">
              Become a part of ACM today by applying to one of our semester long programs or to be
              an officer!
              <br />
              <br />
              All open applications can be found in our member portal at
              portal.acmutd.co/applications
            </p>
          </div>
          <Image
            src="/assets/peechi.png"
            width={500}
            height={500}
            alt="apply"
            className="w-full max-w-xs lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ApplyHeader;
