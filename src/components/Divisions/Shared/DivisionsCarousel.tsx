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

  const division = props.division || 'education'; // TIP and Mentor will default to Education division that way

  return (
    <div className={`w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg p-[2px] bg-${division}-gradient`}>
      <div className="relative aspect-video w-full overflow-hidden group bg-black rounded-lg">
        <Carousel
          className="w-full h-full"
          opts={{
            loop: true,
            align: "center",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, i) => (
              <CarouselItem key={i}>
                <div className="relative w-full h-full flex items-center justify-center aspect-video">
                  <Image
                    src={image.imageLink}
                    alt={image.title}
                    className="h-full w-full object-cover rounded-lg"
                    fill
                    priority={i === 0}
                  />
                  {/* Description box at bottom right */}
                  {i === current && (
                    <div className="absolute bottom-4 right-4 bg-black/60 rounded-md px-4 py-2 text-white text-sm md:text-base font-medium shadow-lg">
                      {image.title}
                    </div>
                  )}
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
              className={`h-2 sm:h-2.5 md:h-3 w-2 sm:w-2.5 md:w-3 rounded-full transition-all duration-300 ${i === current
                  ? 'scale-110 bg-white shadow-md'
                  : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
