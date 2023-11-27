import type { Event } from '../../../lib/types';
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
    <div className="grid grid-cols-7 gap-1">
      {daysOfWeek.map((day) => (
        <div key={day} className="text-center text-xs uppercase text-white">
          {day}
        </div>
      ))}
      {Array.from({ length: firstDayIndex }).map((_, i) => (
        <div key={i} className="rounded-lg bg-white py-2" />
      ))}
      {daysInMonth.map((day) => (
        <div
          key={day}
          className="relative h-20 w-20 rounded-lg bg-white py-2 text-center text-slate-700"
        >
          <p className="absolute right-2 top-2">{day}</p>
          <div>
            {events.map((event) => {
              if (event.date.getDate() !== day) return;
              return (
                <div key={event.id} className="h-4 w-full bg-green-300 first:mt-5">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs">
                    {event.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      {Array.from({ length: 6 - lastDayIndex }).map((_, i) => (
        <div key={i + lastDay} className="rounded-lg bg-white py-2" />
      ))}
    </div>
  );
}
