import PastEventTime from "./PastEventTime";

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
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 p-4 md:p-8">
      {res.events.map((event) => (
        <div
          className="flex h-auto min-h-[14rem] md:min-h-[16rem] w-full md:w-[20rem] flex-col items-start justify-between rounded-3xl border border-[#ffffff40] bg-gradient-to-br from-[#ffffff1f] from-[3.07%] to-[#ffffff08] to-[96.39%] p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#ffffff] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:translate-y-[-2px]"
          key={event.id}
        >
          <div className="space-y-4 w-full">
            <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
              {event.title}
            </h3>
            <div className="space-y-2.5">
              {event.location && (
                <p className="text-xs md:text-sm text-[#CACACA] flex items-center gap-1.5 opacity-90">
                  <span className="inline-block text-[#EFEFEF]">📍</span> {event.location}
                </p>
              )}
              {event.start && (
                <PastEventTime dateString={event.start} />
              )}
            </div>
            {event.description && (
              <p className="text-xs md:text-sm text-[#CACACA] line-clamp-3 overflow-hidden text-ellipsis opacity-85">
                {event.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
