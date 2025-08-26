
"use client";
import React, { useState } from "react";
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


export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Fetch events on mount
  React.useEffect(() => {
    async function fetchEvents() {
      const res = await fetch(`${BASE_API_URL}/api/events`, { next: { revalidate: 60 } });
      const data = await res.json();
      const events: Event[] = data.events.map((item: any) => ({
        id: item.id,
        title: item.title,
        start: item.start ? new Date(item.start) : undefined,
        location: item.location,
        description: item.description,
      }));
      setEvents(events);
      setLoading(false);
    }
    fetchEvents();
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2 md:p-4 md:w-96">
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        events.slice(0, 3).map((event, i) => (
          <Dialog key={event.id}>
            <DialogTrigger asChild>
              <div
                className={`my-2 md:my-4 flex h-auto w-full flex-col justify-center bg-gradient-to-r ${colors[i % 3].from} ${colors[i % 3].to} rounded-lg p-1 shadow-lg cursor-pointer`}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="rounded-lg p-3 md:p-4 backdrop-blur-sm backdrop-filter">
                  <h2 className="text-base font-bold lowercase text-gray-900 md:text-xl">{event.title}</h2>
                  {event.start && (
                    <EventTime dateString={event.start.toISOString()} location={event.location} />
                  )}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md p-4 sm:p-6">
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-base sm:text-lg md:text-xl">{event.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 sm:space-y-4">
                {event.start && (
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-200">Date</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-100">{event.start.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}</p>
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
              </div>
            </DialogContent>
          </Dialog>
        ))
      )}
    </div>
  );
}
