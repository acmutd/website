'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { type Division } from './divisionUtil';

export type CarouselImage = {
  imageLink: string;
  title: string;
  date: Date;
};

const proj_images: CarouselImage[] = [
  {
    imageLink: '/assets/projects/ProjectNight.jpeg',
    title: 'Projects Presentation Night 1',
    date: new Date(2022, 5, 29, 16, 7),
  },
  {
    imageLink: '/assets/projects/ProjectNight.jpeg',
    title: 'Projects Presentation Night 2',
    date: new Date(2022, 5, 29, 16, 7),
  },
  {
    imageLink: '/assets/projects/ProjectNight.jpeg',
    title: 'Projects Presentation Night 3',
    date: new Date(2022, 5, 29, 16, 7),
  },
];

const research_images: CarouselImage[] = [
  {
    date: new Date(2022, 5, 29, 16, 7),
    imageLink: '/assets/research/ResearchCarousel.png',
    title: 'Research Social',
  },
  {
    date: new Date(2022, 5, 29, 16, 7),
    imageLink: '/assets/research/ResearchCarousel.png',
    title: 'Research Social',
  },
  {
    date: new Date(2022, 5, 29, 16, 7),
    imageLink: '/assets/research/ResearchCarousel.png',
    title: 'Research Social',
  },
];
const image_dict: Record<Division, CarouselImage[]> = {
  projects: proj_images,
  research: research_images,
  education: [],
};

type CarouselProps = {
  division: Division;
};

export default function Carousel({ division }: CarouselProps) {
  const images = image_dict[division];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative h-96 w-[66rem]">
        <Image
          src={images[index].imageLink}
          alt={images[index].title}
          className="object-cover"
          fill
        />
        <div className="absolute bottom-0 right-0 flex">
          {images.map((_, i) => (
            <div
              key={i}
              className={`m-1 h-2 w-2 rounded-full transition ${
                i === index ? 'scale-105 bg-white' : 'bg-[#D9D9D9]'
              }`}
              onClick={() => setIndex(i)}
            ></div>
          ))}
        </div>
      </div>
      <div
        className={`flex w-[66rem] justify-between bg-${division}-gradient pl-9 pr-4 text-black`}
      >
        <p>{images[index].title}</p>
        <p>
          Shot{' '}
          {images[index].date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}{' '}
          at{' '}
          {images[index].date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: images[index].date.getMinutes() > 0 ? 'numeric' : undefined,
            timeZoneName: 'short',
          })}{' '}
        </p>
      </div>
    </>
  );
}
