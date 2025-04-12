
const BASE_API_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

  type Event = {
    id: string;
    title: string;
    location?: string;
    start?: string;
  }
export default async function PastEvents() {
  const res: { events: Event[] } = await fetch(`https://${BASE_API_URL}/api/events/past`).then((res) => res.json());
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-8">
      {res.events.map((event) => (
        <div
          className="flex h-[16rem] w-[20rem] flex-col items-start justify-between rounded-3xl border border-[#ffffff82] bg-gradient-to-br from-[#ffffff1f] from-[3.07%] to-[#ffffff08] to-[96.39%] p-8 backdrop-blur-xl transition-all hover:border-[#ffffff] hover:shadow-lg"
          key={event.id}
        >
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              {event.title}
            </h3>
            {event.location && (
              <p className="text-sm text-[#CACACA]">
                📍 {event.location}
              </p>
            )}
          </div>

          {event.start && (
            <p className="text-sm text-[#CACACA]">
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
