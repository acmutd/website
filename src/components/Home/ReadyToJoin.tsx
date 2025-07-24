'use client';
import React from 'react';
import { Button } from '@/components/Button';

function ReadyToJoin() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
      <div className="flex w-full max-w-4xl flex-col items-center gap-y-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          ready to join acm?
        </h2>
        <p className="text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
          take the first step towards advancing your career in computing
          <br />
          join our community of passionate technologists today
        </p>
        <div className="mt-4">
          <Button
            href="/apply"
            text="start your journey →"
            bgStyle="acm"
            height="h-12 sm:h-14"
            textStyles="text-base sm:text-lg font-semibold"
            addtitionalStyles="px-8 sm:px-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToJoin;
