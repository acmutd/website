'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { DivisionProps } from './divisionUtil';
import { getCarouselImages } from '../../../../config/divisions.config';

export default function Carousel(props: DivisionProps) {
  const images = getCarouselImages(props);
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const previousSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <>
      <div
        className="relative h-64 md:h-96 w-full max-w-4xl overflow-hidden rounded-t-lg mx-auto group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <Image
          src={images[index].imageLink}
          alt={images[index].title}
          className={`h-full w-full object-contain bg-${props.division}-gradient pt-3 transition-transform duration-500`}
          fill
          priority
        />

        <button
          onClick={previousSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-1.5 md:p-2 rounded-full text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-1.5 md:p-2 rounded-full text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next slide"
        >
          →
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition-all duration-300 ${
                i === index
                  ? 'scale-110 bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col md:flex-row w-full max-w-4xl justify-between rounded-b-lg bg-${props.division}-gradient p-3 md:p-4 text-white mx-auto text-sm md:text-base`}
      >
        <p className="font-semibold text-center md:text-left">{images[index].title}</p>
        <p className="text-xs md:text-sm text-center md:text-right mt-1 md:mt-0">
          Shot{' '}
          {images[index].date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
          {images[index].date.getHours() !== 0 || images[index].date.getMinutes() !== 0 ? (
            <>
              {' at '}
              {images[index].date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: images[index].date.getMinutes() > 0 ? 'numeric' : undefined,
                timeZoneName: 'short',
              })}
            </>
          ) : null}
        </p>
      </div>
    </>
  );
}
