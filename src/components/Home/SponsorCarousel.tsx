'use client';
import { useEffect, useRef, useState } from 'react';
import { homePageData } from '../../../config/home.config';
import Sponsor from './Sponsor';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const allSponsors = Object.entries(homePageData.sponsors).flatMap(([tierName, sponsors]) =>
  sponsors.map((sponsor) => ({
    name: sponsor,
    tier: tierName,
  })),
);

const SponsorCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  return (
    <div className="background-container relative z-10 flex w-full flex-col gap-y-4 rounded-3xl border border-primary/50 bg-gradient-to-br from-gray-600/10 to-gray-800/5 p-6 text-center shadow-lg backdrop-blur-xl sm:gap-y-6 sm:rounded-r-3xl sm:border-y sm:border-r sm:p-8 md:gap-y-8 md:p-10 lg:p-14">
      <h3 className="text-xl font-semibold text-primary sm:text-2xl md:text-3xl">our sponsors</h3>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          slidesToScroll: isMobile ? 1 : 3,
        }}
        className="w-full"
        plugins={[plugin.current]}
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {allSponsors.map((sponsor, idx) => (
            <CarouselItem
              key={`${sponsor.name}-${idx}`}
              className="pl-2 sm:basis-1/2 sm:pl-4 lg:basis-1/3"
            >
              <Sponsor name={sponsor.name} tier={sponsor.tier} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex justify-center gap-x-2 sm:mt-6 sm:gap-x-4">
          <CarouselPrevious className="static left-0 right-0 h-8 w-8 translate-y-0 sm:h-10 sm:w-10" />
          <CarouselNext className="static left-0 right-0 h-8 w-8 translate-y-0 sm:h-10 sm:w-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default SponsorCarousel;
