import { timeline } from '../../../config/timeline.config';
import TimelineItemComponent from './TimelineItem';

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
