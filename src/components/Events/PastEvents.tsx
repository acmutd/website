const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  type Event = {
    id: string;
    title: string;
    location?: string;
    start?: string;
    description?: string;
  }
export default async function PastEvents() {
  const res: { events: Event[] } = await fetch(`${BASE_API_URL}/api/events/past`, { next: { revalidate: 60 } }).then((res) => res.json());
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 p-4 md:p-8">
      {res.events.map((event) => (
        <div
          className="flex h-[14rem] md:h-[16rem] w-full md:w-[20rem] flex-col items-start justify-between rounded-3xl border border-[#ffffff82] bg-gradient-to-br from-[#ffffff1f] from-[3.07%] to-[#ffffff08] to-[96.39%] p-6 md:p-8 backdrop-blur-xl transition-all hover:border-[#ffffff] hover:shadow-lg"
          key={event.id}
        >
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {event.title}
            </h3>
            {event.location && (
              <p className="text-xs md:text-sm text-[#CACACA]">
                📍 {event.location}
              </p>
            )}
            {event.description && (
              <p className="text-xs md:text-sm text-[#CACACA] line-clamp-3 overflow-hidden text-ellipsis mt-2">
                {event.description}
              </p>
            )}
          </div>

          {event.start && (
            <p className="text-xs md:text-sm text-[#CACACA]">
              🕒 {new Date(event.start).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
