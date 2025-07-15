'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { homePageData } from "../../../config/home.config";

function WhyJoin() {
  const reasons = homePageData.whyJoinCards;

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-6 py-16 sm:px-12 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Why Join ACM?
          </h2>
          <p className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl">
            Unlock opportunities for growth, learning, and professional development in computing
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden flex flex-col items-center">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent className="ml-0">
              {reasons.map((reason, index) => (
                <CarouselItem key={index} className="pl-4 basis-full">
                  <div className="flex flex-col items-center rounded-2xl border border-primary/30 bg-gray-600/10 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-gray-600/20">
                    <h3 className="mb-3 sm:mb-4 text-center text-base font-bold text-white sm:text-lg">
                      {reason.title}
                    </h3>
                    <p className="text-center text-xs text-gray-300 sm:text-sm">
                      {reason.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-primary/30 bg-gray-600/10 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-gray-600/20"
            >
              <h3 className="mb-3 sm:mb-4 text-center text-base font-bold text-white sm:text-lg lg:text-xl">
                {reason.title}
              </h3>
              <p className="text-center text-xs text-gray-300 sm:text-sm lg:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
