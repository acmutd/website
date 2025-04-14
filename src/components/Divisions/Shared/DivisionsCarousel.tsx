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
    <>
      <div
        className="relative h-64 md:h-96 w-full max-w-4xl overflow-hidden mx-auto group pt-10 md:pt-0"
      >
        <Carousel
          className={`w-full h-full bg-${props.division}-gradient rounded-t-lg`}
          opts={{
            loop: true,
            align: "center",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, i) => (
              <CarouselItem key={i}>
                <div className="relative h-64 md:h-96 w-full">
                  <Image
                    src={image.imageLink}
                    alt={image.title}
                    className={`h-full w-full object-contain md:pt-3`}
                    fill
                    priority={i === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-1.5 md:p-2 rounded-full text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity border-none" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-1.5 md:p-2 rounded-full text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity border-none" />
        </Carousel>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition-all duration-300 ${
                i === current
                  ? 'scale-110 bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col md:flex-row w-full max-w-4xl justify-between rounded-b-lg bg-${props.division}-gradient p-3 md:p-4 text-white mx-auto text-sm md:text-base`}
      >
        <p className="font-semibold text-center md:text-left">{images[current].title}</p>
        <p className="text-xs md:text-sm text-center md:text-right mt-1 md:mt-0">
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
    </>
  );
}
