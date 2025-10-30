'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import type { Event } from '@/../lib/types.d.ts';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  event: Event;
  day: number;
  month: number;
};

const EventComponent = ({ event, day, month }: Props) => {
  const [localStartDate, setLocalStartDate] = useState<Date | null>(null);

  useEffect(() => {
    if (event.start) {
      const localDate = new Date(event.start);
      setLocalStartDate(localDate);
    }
  }, [event]);

  if (!localStartDate || localStartDate.getDate() !== day || localStartDate.getMonth() !== month) {
    return null;
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper to create Google Calendar event link
  const getGoogleCalendarUrl = () => {
    if (!localStartDate) return '#';
    const formatDateTime = (date: Date) => {
      // Google Calendar expects: YYYYMMDDTHHmmssZ
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    };
    const start = formatDateTime(localStartDate);
    // Default to 1 hour duration
    const endDate = new Date(localStartDate.getTime() + 60 * 60 * 1000);
    const end = formatDateTime(endDate);
    const details = [event.description || '', event.location ? `Location: ${event.location}` : ''].filter(Boolean).join('%0A');
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=ACM%20UTD:%20${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}${event.location ? `&location=${encodeURIComponent(event.location)}` : ''}`;
    return url;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-1.5 truncate rounded bg-green-200 px-2 py-1.5 text-[10px] sm:text-xs font-medium text-green-800 cursor-pointer hover:bg-green-300 transition-colors">
          {event.title}
        </div>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-md p-6 sm:p-10">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-base sm:text-lg md:text-xl">{event.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 sm:space-y-4">
          {localStartDate && (
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-200">Date & Time</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100">
                {formatDate(localStartDate)}
                {event.isAllDay ? (
                  <span className="font-semibold"> - All Day</span>
                ) : (
                  <>
                    {" "}at{" "}
                    <span className="font-semibold">
                      {localStartDate.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        timeZoneName: 'short',
                      })}
                    </span>
                  </>
                )}
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
          {localStartDate && (
            <div className="pt-2">
              <Button
                href={getGoogleCalendarUrl()}
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
  );
};

export default EventComponent;
