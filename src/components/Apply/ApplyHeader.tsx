import Image from 'next/image';
import React from 'react';

function ApplyHeader() {
  return (
    <div className="min-h-[600px] w-full px-4 sm:px-6 md:min-h-[470px] lg:px-10">
      <div className="mb-4 flex h-full w-full overflow-hidden rounded-2xl border border-primary/50 bg-apply-gradient p-4 shadow-2xl sm:mb-6 sm:rounded-3xl sm:p-6">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-8 lg:gap-10">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl">
            <h1 className="mb-4 text-2xl font-bold text-primary sm:mb-6 sm:text-3xl md:mb-8 xl:text-5xl">
              apply
            </h1>
            <p className="text-base font-medium text-primaryDark sm:text-lg lg:text-xl xl:text-2xl">
              become a part of ACM today by applying to one of our semester long programs or to be
              an officer!
              <br />
              <br />
              all open applications can be found in our member portal at{' '}
              <a
                href="https://portal.acmutd.co/opportunities"
                className="text-primary underline transition-colors hover:text-primaryDark"
                target="_blank"
              >
                portal.acmutd.co/opportunities
              </a>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/apply/peechi.png"
              width={100}
              height={100}
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 45vw, 40vw"
              priority
              alt="apply"
              className="w-full max-w-[250px] object-contain sm:max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyHeader;
