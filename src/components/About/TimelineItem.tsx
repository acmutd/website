import { TimelineItem, timeline } from '../../../config/timeline.config';
import { Calendar } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export default function TimelineItemComponent({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
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
        <HoverCard openDelay={10} closeDelay={10}>
          <HoverCardTrigger asChild>
            <div
              className={`group relative cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:scale-105 sm:rounded-xl sm:p-6 ${
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
          </HoverCardTrigger>
          <HoverCardContent
            className={`w-64 ${
              isLast
                ? 'border-blue-400/50 bg-gray-900/95 shadow-lg shadow-blue-500/20 backdrop-blur-sm'
                : 'border-gray-700 bg-gray-900/95 backdrop-blur-sm'
            }`}
            side={isEven ? 'right' : 'left'}
            align="center"
          >
            <p className={`text-sm leading-relaxed ${isLast ? 'text-gray-300' : 'text-gray-400'}`}>
              {item.description}
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
}
