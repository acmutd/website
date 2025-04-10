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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollByItems = (direction: 'prev' | 'next') => {
    if (!api) return;

    setIsAutoplayPaused(true);
    const scrollAmount = isMobile ? 1 : 3;

    if (direction === 'next') {
      api.scrollTo(api.selectedScrollSnap() + scrollAmount);
    } else {
      api.scrollTo(api.selectedScrollSnap() - scrollAmount);
    }
  };

  useEffect(() => {
    if (!api) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (api && !isAutoplayPaused) {
        const scrollAmount = isMobile ? 1 : 3;
        api.scrollTo(api.selectedScrollSnap() + scrollAmount);
      }
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isAutoplayPaused, isMobile]);

  return (
    <div className="background-container relative z-10 flex w-full flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 rounded-3xl sm:rounded-r-3xl border border-primary/50 sm:border-y sm:border-r bg-gradient-to-br from-gray-600/10 to-gray-800/5 p-6 sm:p-8 md:p-10 lg:p-14 text-center shadow-lg backdrop-blur-xl">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">Our Sponsors</h3>

      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {allSponsors.map((sponsor, idx) => (
            <CarouselItem
              key={`${sponsor.name}-${idx}`}
              className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Sponsor name={sponsor.name} tier={sponsor.tier} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-x-2 sm:gap-x-4 mt-4 sm:mt-6">
          <CarouselPrevious
            onClick={() => scrollByItems('prev')}
            className="static translate-y-0 left-0 right-0 h-8 w-8 sm:h-10 sm:w-10"
          />
          <CarouselNext
            onClick={() => scrollByItems('next')}
            className="static translate-y-0 left-0 right-0 h-8 w-8 sm:h-10 sm:w-10"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SponsorCarousel;
