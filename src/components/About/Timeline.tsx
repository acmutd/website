import { timeline, TimelineItem } from '../../../config/timeline.config';
import { Calendar, Clock } from 'lucide-react';

export default function Timeline() {
  return (
    <div
      className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      id="our-journey"
    >
      <div className="mb-8 text-center sm:mb-12 lg:mb-16">
        <h2 className="mb-2 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl">
          Our Journey
        </h2>
        <p className="mx-auto max-w-2xl px-2 text-base text-gray-300 sm:text-lg">
          Fun fact: ACM UTD is the 77th student chapter of ACM founded. ACM&apos;s history is a
          little long, but what do you expect with the largest CS organization at UTD?
        </p>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 sm:left-8 md:left-1/2 md:-translate-x-1/2 md:transform"></div>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {timeline.map((item, index) => (
            <TimelineItemComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const isEven = index % 2 === 0;
  const isLast = index === timeline.length - 1;

  return (
    <div
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      <div
        className={`absolute left-6 z-10 h-3 w-3 rounded-full border-2 sm:left-8 sm:h-4 sm:w-4 sm:border-4 md:left-1/2 md:-translate-x-1/2 md:transform ${
          isLast
            ? 'animate-pulse border-blue-400 bg-blue-500 shadow-lg shadow-blue-500/50'
            : 'border-blue-500 bg-white shadow-lg shadow-blue-500/30'
        }`}
      >
        {isLast && (
          <>
            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-75"></div>
            <div className="absolute -inset-2 animate-pulse rounded-full bg-blue-400/30 blur-sm"></div>
          </>
        )}
      </div>

      <div
        className={`ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${
          isEven ? 'md:pr-8' : 'md:pl-8'
        } w-full pr-4 sm:pr-6 md:pr-0`}
      >
        <div
          className={`group relative rounded-lg border p-4 transition-all duration-300 hover:scale-105 sm:rounded-xl sm:p-6 ${
            isLast
              ? 'border-blue-400/50 bg-white/10 shadow-lg shadow-blue-500/30 backdrop-blur-sm hover:bg-white/15 hover:shadow-blue-500/40'
              : 'border-white/10 bg-white/5 shadow-lg backdrop-blur-sm hover:bg-white/10'
          }`}
        >
          <div
            className={`mb-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium sm:mb-3 sm:gap-2 sm:px-3 sm:text-sm ${
              isLast
                ? 'bg-blue-500/30 text-blue-200 shadow-lg shadow-blue-500/20'
                : 'bg-blue-500/20 text-blue-300'
            }`}
          >
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
            {item.date}
          </div>

          <h3
            className={`text-base font-semibold leading-tight sm:text-lg ${
              isLast ? 'text-blue-100 drop-shadow-lg' : 'text-white'
            }`}
          >
            {item.title}
          </h3>

          <div
            className={`absolute right-3 top-3 opacity-10 transition-opacity group-hover:opacity-40 sm:right-4 sm:top-4 sm:opacity-20 ${
              isLast ? 'text-blue-300' : 'text-blue-400'
            }`}
          ></div>

          <div
            className={`absolute top-1/2 hidden h-0 w-0 -translate-y-1/2 transform md:block ${
              isEven
                ? 'right-0 translate-x-full border-y-8 border-l-8 border-y-transparent'
                : 'left-0 -translate-x-full border-y-8 border-r-8 border-y-transparent'
            } ${
              isLast
                ? 'border-l-blue-400/50 border-r-blue-400/50'
                : 'border-l-white/10 border-r-white/10'
            }`}
          ></div>
        </div>
      </div>

      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
}
