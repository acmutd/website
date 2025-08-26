'use client';

type Props = {
  dateString: string;
  location?: string;
};

export default function UpcomingEventCard({ dateString, location }: Props) {
  const date = new Date(dateString);
  return (
    <div className="text-black rounded-xl p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-2 h-2 mr-4 text-2xl">
            📍
          </span>
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-2 h-2 mr-4 text-2xl">
            📅
          </span>
          <span>
            {date.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}{' '}
            at{' '}
            {date?.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: date.getMinutes() > 0 ? 'numeric' : undefined,
              timeZoneName: 'short',
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
