import Calendar from '@/components/Events/Calendar';

export default function Events() {
  return (
    <div className="h-screen w-full bg-[url(/assets/apply/apply-bg.png)] bg-cover bg-center py-20">
      <div className="mx-20 flex justify-between pt-16">
        <div className="flex flex-col">
          <h1 className="text-4xl text-white">Upcoming Events</h1>
        </div>
        <Calendar />
      </div>
    </div>
  );
}
