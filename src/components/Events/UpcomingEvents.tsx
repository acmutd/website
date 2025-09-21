
"use client";
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/Button';
import type { Event } from '@/../lib/types';
import EventTime from './EventTime';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

const colors = [
  { from: 'from-[#008CF1]', to: 'to-[#00ECEC]' },
  { from: 'from-[#EA7F01]', to: 'to-[#FFC700]' },
  { from: 'from-[#78DFCD]', to: 'to-[#E1EE93]' },
];

// Fetch function for events
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


export default function UpcomingEvents() {
  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const getGoogleCalendarUrl = (event: Event) => {
    if (!event.start) return '#';
    const formatDateTime = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    };
    const start = formatDateTime(event.start);
    const endDate = new Date(event.start.getTime() + 60 * 60 * 1000);
    const end = formatDateTime(endDate);
    const details = event.description || "";
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=ACM%20UTD:%20${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}${event.location ? `&location=${encodeURIComponent(event.location)}` : ''}`;
  };

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-2 md:p-4 md:w-96">
        <div className="text-center text-red-500">Failed to load events</div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2 md:p-4 md:w-96">
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        events.slice(0, 3).map((event, i) => (
          <Dialog key={event.id}>
            <DialogTrigger asChild>
              <div
                className={`my-2 md:my-4 flex h-auto w-full flex-col justify-center bg-gradient-to-r ${colors[i % 3].from} ${colors[i % 3].to} hover:opacity-80 transition-all rounded-lg p-1 shadow-lg cursor-pointer`}
              >
                <div className="rounded-lg p-3 md:p-4 backdrop-blur-sm backdrop-filter">
                  <h2 className="text-base font-bold lowercase text-gray-900 md:text-xl">{event.title}</h2>
                  {event.start && (
                    <EventTime dateString={event.start.toISOString()} location={event.location} />
                  )}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md p-4 sm:p-10">
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-base sm:text-lg md:text-xl">{event.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 sm:space-y-4">
                {event.start && (
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-200">Date & Time</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-100">
                      {formatDate(event.start)}{" "}at{" "}
                      <span className="font-semibold">
                        {event.start.toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                          timeZoneName: 'short',
                        })}
                      </span>
                    </p>
                  </div>
                )}
                {event.location && (
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-200">Location</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-100">{event.location}</p>
                  </div>
                )}
                {event.description && (
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-200">Description</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-100">{event.description}</p>
                  </div>
                )}
                {event.start && (
                  <div className="pt-2">
                    <Button
                      href={getGoogleCalendarUrl(event)}
                      text='Add to Google Calendar'
                      textStyles="text-xs sm:text-sm"
                      addtitionalStyles="px-4 sm:px-6"
                      bgStyle='acm'
                      external
                    />
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))
      )}
    </div>
  );
}
