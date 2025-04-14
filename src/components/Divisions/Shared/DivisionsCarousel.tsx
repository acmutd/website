'use client';

import Image from 'next/image';
import { DivisionProps } from './divisionUtil';
import { getCarouselImages } from '../../../../config/divisions.config';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export default function DivisionsCarousel(props: DivisionProps) {
  const images = getCarouselImages(props);
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <div
        className="relative h-56 sm:h-64 md:h-96 w-full overflow-hidden group"
      >
        <Carousel
          className={`w-full h-full bg-${props.division}-gradient`}
          opts={{
            loop: true,
            align: "center",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, i) => (
              <CarouselItem key={i}>
                <div className="relative h-56 sm:h-64 md:h-96 w-full flex items-center justify-center p-2 sm:p-3 md:p-4">
                  <Image
                    src={image.imageLink}
                    alt={image.title}
                    className="h-full w-full object-contain"
                    fill
                    priority={i === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 sm:p-2 rounded-full text-white opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-none hover:bg-black/60" />
          <CarouselNext className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 sm:p-2 rounded-full text-white opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-none hover:bg-black/60" />
        </Carousel>

        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              className={`h-2 sm:h-2.5 md:h-3 w-2 sm:w-2.5 md:w-3 rounded-full transition-all duration-300 ${
                i === current
                  ? 'scale-110 bg-white shadow-md'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col sm:flex-row w-full justify-between bg-${props.division}-gradient p-3 sm:p-4 md:p-5 text-white`}
      >
        <p className="font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg">{images[current].title}</p>
        <p className="text-xs sm:text-sm text-center sm:text-right mt-1 sm:mt-0 opacity-90">
          Shot{' '}
          {images[current].date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
          {images[current].date.getHours() !== 0 || images[current].date.getMinutes() !== 0 ? (
            <>
              {' at '}
              {images[current].date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: images[current].date.getMinutes() > 0 ? 'numeric' : undefined,
                timeZoneName: 'short',
              })}
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}
