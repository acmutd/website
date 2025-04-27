import Image from 'next/image';
import React from 'react';

function ApplyHeader() {
  return (
    <div className="flex min-h-[600px] w-full justify-end pl-10 md:min-h-[470px]">
      <div className="relative mb-6 w-full overflow-hidden rounded-bl-3xl rounded-tl-3xl border border-primary/50 bg-apply-gradient shadow-2xl">
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center p-6 md:flex-row md:space-x-10">
          <div className="w-full max-w-md lg:max-w-xl">
            <h1 className="mb-10 text-3xl font-bold text-primary xl:text-5xl">apply</h1>
            <p className="text-lg font-medium text-primaryDark xl:text-2xl">
              Become a part of ACM today by applying to one of our semester long programs or to be
              an officer!
              <br />
              <br />
              All open applications can be found in our member portal at{' '}
              <a
                href="https://portal.acmutd.co/opportunities"
                className="text-primary underline transition-colors hover:text-primaryDark"
                target="_blank"
              >
                portal.acmutd.co/opportunities
              </a>
            </p>
          </div>
          <Image
            src="/assets/apply/peechi.png"
            width={100}
            height={100}
            sizes="100vw"
            alt="apply"
            className="mt-6 w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:mt-0 lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ApplyHeader;
