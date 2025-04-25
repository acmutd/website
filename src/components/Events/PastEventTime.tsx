'use client';

type Props = {
  dateString: string;
};

export default function PastEventTime({ dateString }: Props) {
  const date = new Date(dateString);
  return (
    <p className="text-xs md:text-sm text-[#CACACA] flex items-center gap-1.5 opacity-90">
      <span className="inline-block text-[#EFEFEF]">🕒</span>
      <span>
        {date.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })}{' '}
        <span className="text-[#EFEFEF] font-medium">
          at{' '}
          {date?.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: date.getMinutes() > 0 ? 'numeric' : undefined,
            timeZoneName: 'short',
          })}
        </span>
      </span>
    </p>
  );
}
