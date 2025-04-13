import EventComponent from './EventDays';
import type { Event } from '@/../lib/types.d.ts';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type Props = {
  year: number;
  month: number;
  events: Event[];
};

export default function CalendarBody({ year, month, events }: Props) {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const firstDayIndex = firstDayOfMonth.getDay();
  const lastDayIndex = lastDayOfMonth.getDay();
  const lastDay = lastDayOfMonth.getDate();

  const daysInMonth = Array.from({ length: lastDay }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-0.5 md:gap-1">
      {daysOfWeek.map((day) => (
        <div
          key={day}
          className="text-center text-[10px] text-xs font-semibold uppercase text-gray-300 md:text-sm"
        >
          {day}
        </div>
      ))}
      {Array.from({ length: firstDayIndex }).map((_, i) => (
        <div key={i} className="rounded-lg bg-white/10" />
      ))}
      {daysInMonth.map((day) => (
        <div
          key={day}
          className="relative rounded-lg bg-white p-1.5 md:p-2 text-center text-gray-800 shadow transition-all hover:bg-gray-200 h-16 md:h-24"
        >
          <p className="absolute right-1.5 top-1.5 md:right-2 md:top-2 text-[10px] text-xs font-bold md:text-sm">{day}</p>
          <div className="mt-3 md:mt-4">
            {events.map((event) => (
              <EventComponent key={event.id} event={event} day={day} month={month} />
            ))}
          </div>
        </div>
      ))}
      {Array.from({ length: 6 - lastDayIndex }).map((_, i) => (
        <div key={i + lastDay} className="rounded-lg bg-white/10 h-16 md:h-24" />
      ))}
    </div>
  );
}
