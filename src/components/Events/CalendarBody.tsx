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
  const today = new Date();

  const firstDayIndex = firstDayOfMonth.getDay();
  const lastDayIndex = lastDayOfMonth.getDay();
  const lastDay = lastDayOfMonth.getDate();

  const daysInMonth = Array.from({ length: lastDay }, (_, i) => i + 1);

  const isToday = (day: number) => {
    return today.getDate() === day &&
           today.getMonth() === month &&
           today.getFullYear() === year;
  };

  return (
    <div className="grid grid-cols-7 gap-0.5 md:gap-1">
      {daysOfWeek.map((day) => (
        <div
          key={day}
          className="text-center text-[10px] sm:text-xs font-semibold uppercase text-gray-300 md:text-sm"
        >
          {day}
        </div>
      ))}
      {Array.from({ length: firstDayIndex }).map((_, i) => (
        <div key={i} className="rounded-lg bg-gray-200/20" />
      ))}
      {daysInMonth.map((day) => (
        <div
          key={day}
          className={`relative rounded-lg p-1 sm:p-1.5 md:p-2 text-center shadow transition-all min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] ${
            isToday(day)
              ? 'bg-green-100 text-green-800'
              : 'bg-white text-gray-800 hover:bg-gray-50'
          }`}
        >
          <p className={`absolute right-1 top-1 sm:right-1.5 sm:top-1.5 md:right-2 md:top-2 text-[10px] sm:text-xs font-bold md:text-sm ${
            isToday(day) ? 'text-green-800' : ''
          }`}>{day}</p>
          <div className="mt-3 sm:mt-4">
            {events.map((event) => (
              <EventComponent key={event.id} event={event} day={day} month={month} />
            ))}
          </div>
        </div>
      ))}
      {Array.from({ length: 6 - lastDayIndex }).map((_, i) => (
        <div key={i + lastDay} className="rounded-lg bg-gray-100/20 min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]" />
      ))}
    </div>
  );
}
