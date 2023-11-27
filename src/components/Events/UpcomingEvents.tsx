import { Event } from '../../../lib/types';

const events: Event[] = [
  {
    date: new Date(2023, 4, 27, 20),
    title: 'Projects Presentation Night',
    id: '1',
    location: 'SCI 1.220',
  },
  {
    date: new Date(2023, 5, 2, 20, 30),
    title: 'Research Symposium',
    id: '2',
    location: 'TI Auditorium',
  },
  {
    date: new Date(2023, 5, 4, 18),
    title: 'End of Semester Celebration',
    id: '3',
    location: 'SCI 1.210',
  },
];

const colors = ['red-600', 'green-600', 'blue-600'];

export default function UpcomingEvents() {
  return (
    <div className="flex h-full w-80 flex-col items-center justify-center">
      {events.map((event, i) => (
        <div
          key={event.id}
          className={`my-2 flex h-20 w-full flex-col justify-center bg-gradient-to-r from-${colors[i]} from-[7.24%] to-slate-300 to-[95.11%] p-5 text-left font-sans`}
        >
          <h2 className="text-xl font-bold lowercase">{event.title}</h2>
          <p className="text-sm font-medium">
            {event.date.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}{' '}
            at{' '}
            {event.date.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: event.date.getMinutes() > 0 ? 'numeric' : undefined,
              timeZoneName: 'short',
            })}{' '}
            in {event.location}
          </p>
        </div>
      ))}
    </div>
  );
}
