'use client';

import { useEffect, useState } from 'react';
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
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-1.5 truncate rounded bg-green-200 px-2 py-1.5 text-[10px] sm:text-xs font-medium text-green-800 cursor-pointer hover:bg-green-300 transition-colors">
          {event.title}
        </div>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-md p-4 sm:p-6">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-base sm:text-lg md:text-xl">{event.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 sm:space-y-4">
          {localStartDate && (
            <div className="space-y-1">
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-200">Date</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100">{formatDate(localStartDate)}</p>
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
  );
};

export default EventComponent;
