import Calendar from '@/components/Events/Calendar';
import PastEvents from '@/components/Events/PastEvents';
import UpcomingEvents from '@/components/Events/UpcomingEvents';
import type { Event } from '@/../lib/types';
import { Metadata } from 'next';

type Params = {
  month: string | null;
  year: string | null;
};

const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

const fetchEvents = async (): Promise<Event[]> => {
  const minTime = new Date().toISOString();
  const res = await fetch(`${BASE_API_URL}/api/events?timeMin=${minTime}`);
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  const data = await res.json();
  const events: Event[] = data.events.map((item: any) => {
    let start: Date | undefined = undefined;
    if (item.start) {
      start = new Date(item.start);
    }
    return {
      id: item.id,
      title: item.title,
      start,
      location: item.location,
      description: item.description,
    };
  });
  return events;
};

export const generateMetadata = async (): Promise<Metadata> => {
  const events = await fetchEvents();

  // Create dynamic description based on upcoming events
  let description = 'Upcoming and past events from ACM UTD';
  if (events.length > 0) {
    const nextEvent = events[0];
    const eventDate = nextEvent.start
      ? nextEvent.start.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })
      : '';
    description = `Join us for ${nextEvent.title}${eventDate ? ` on ${eventDate}` : ''}${
      nextEvent.location ? ` at ${nextEvent.location}` : ''
    }. View all upcoming and past ACM UTD events.`;
  }

  // Prepare events data for OG image (limit to first 3 events)
  const eventsForOg = events.slice(0, 3).map((event) => ({
    id: event.id,
    title: event.title,
    start: event.start?.toISOString(),
    location: event.location,
    description: event.description,
  }));

  const ogImageUrl = `${BASE_API_URL}/api/og/events${
    eventsForOg.length > 0 ? `?events=${encodeURIComponent(JSON.stringify(eventsForOg))}` : ''
  }`;

  return {
    title: 'Events - ACM UTD',
    description,
    keywords: [
      'ACM UTD',
      'UT Dallas',
      'UTD',
      'events',
      'computer science events',
      'programming events',
      'tech events',
      'student organization',
      'workshops',
      'meetings',
      'hackathons',
    ],
    openGraph: {
      title: 'Events - ACM UTD',
      description,
      url: 'https://acmutd.co/events',
      siteName: 'ACM UTD',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'ACM UTD Events',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Events - ACM UTD',
      description,
      images: [ogImageUrl],
      creator: '@acmutd',
    },
    alternates: {
      canonical: '/events',
    },
  };
};

export default async function Events(props: { searchParams: Promise<Params> }) {
  const searchParams = await props.searchParams;
  const today = new Date();
  const month = parseInt(searchParams.month || today.getMonth().toString());
  const year = parseInt(searchParams.year || today.getFullYear().toString());

  return (
    <div className="h-fit w-full bg-[url(/assets/apply/apply-bg.png)] bg-cover bg-center py-8 pt-20 md:py-20">
      <div className="flex flex-col px-4 pt-8 md:flex-row md:justify-between md:px-20 md:pt-16">
        <div className="flex flex-col">
          <div className="relative">
            <h1 className="text-3xl text-white md:text-4xl">upcoming events</h1>
            <div className="h-[1px] w-28 bg-[#cacacab0]" />
          </div>
          <UpcomingEvents />
        </div>
        <Calendar month={month} year={year} />
      </div>
      <div className="flex flex-col px-4 pt-8 md:mx-40 md:pt-16">
        <div className="relative">
          <h1 className="text-3xl text-white md:text-4xl">past events</h1>
          <div className="h-[1px] w-28 bg-[#cacacab0]" />
        </div>
        <PastEvents />
      </div>
    </div>
  );
}
