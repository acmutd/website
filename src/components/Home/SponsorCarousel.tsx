'use client';
import { useEffect, useState, useRef } from 'react';
import { homePageData } from '../../../config/home.config';
import Sponsor from './Sponsor';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const allSponsors = Object.entries(homePageData.sponsors).flatMap(([tierName, sponsors]) =>
  sponsors.map((sponsor) => ({
    name: sponsor,
    tier: tierName,
  })),
);

const AUTOPLAY_INTERVAL = 5_000;

const SponsorCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollByThree = (direction: 'prev' | 'next') => {
    if (!api) return;

    setIsAutoplayPaused(true);

    if (direction === 'next') {
      api.scrollTo(api.selectedScrollSnap() + 3);
    } else {
      api.scrollTo(api.selectedScrollSnap() - 3);
    }
  };

  useEffect(() => {
    if (!api) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (api && !isAutoplayPaused) {
        api.scrollTo(api.selectedScrollSnap() + 3);
      }
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isAutoplayPaused]);

  return (
    <div className="background-container relative z-10 flex max-w-[100vw] flex-col gap-y-8 rounded-r-3xl border-y border-r border-primary/50 bg-gradient-to-br from-gray-600/10 to-gray-800/5 p-10 text-center shadow-lg backdrop-blur-xl md:z-0 md:max-w-[90vw] lg:max-w-[85vw] lg:p-14">
      <h3 className="mb-6 text-2xl font-semibold text-primary lg:text-3xl">Our Sponsors</h3>

      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {allSponsors.map((sponsor, idx) => (
            <CarouselItem
              key={`${sponsor.name}-${idx}`}
              className="mx-auto py-10 pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
            >
              <Sponsor name={sponsor.name} tier={sponsor.tier} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={() => scrollByThree('prev')} />
        <CarouselNext onClick={() => scrollByThree('next')} />
      </Carousel>
    </div>
  );
};

export default SponsorCarousel;
