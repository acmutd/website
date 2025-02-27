'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { type Division } from './divisionUtil';
import { getCarouselImages } from '../../../../config/divisions.config';

type CarouselProps =
  | { division: Exclude<Division, 'education'> }
  | {
      division: 'education';
      sub: 'mentor' | 'tip';
    };

export default function Carousel(props: CarouselProps) {
  const images = getCarouselImages(props);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="relative h-96 w-full max-w-4xl overflow-hidden rounded-t-lg mx-auto">
        <Image
          src={images[index].imageLink}
          alt={images[index].title}
          className={`h-full w-full object-contain bg-${props.division}-gradient pt-3`}
          fill
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition ${
                i === index ? 'scale-110 bg-white' : 'bg-gray-400'
              } cursor-pointer`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      </div>
      <div
        className={`flex w-full max-w-4xl justify-between rounded-b-lg bg-${props.division}-gradient p-4 text-white mx-auto`}
      >
        <p className="font-semibold">{images[index].title}</p>
        <p className="text-sm">
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
