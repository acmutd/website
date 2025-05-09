import Calendar from '@/components/Events/Calendar';
import PastEvents from '@/components/Events/PastEvents';
import UpcomingEvents from '@/components/Events/UpcomingEvents';

type Params = {
  month: string | null;
  year: string | null;
};

export default function Events({ searchParams }: { searchParams: Params }) {
  const today = new Date();
  const month = parseInt(searchParams.month || today.getMonth().toString());
  const year = parseInt(searchParams.year || today.getFullYear().toString());

  return (
    <div className="h-fit w-full bg-[url(/assets/apply/apply-bg.png)] bg-cover bg-center py-8 md:py-20 pt-20">
      <div className="flex flex-col px-4 pt-8 md:flex-row md:justify-between md:pt-16 md:px-20">
        <div className="flex flex-col">
          <div className="relative">
            <h1 className="text-3xl md:text-4xl text-white">upcoming events</h1>
            <div className="h-[1px] w-28 bg-[#cacacab0]" />
          </div>
          <UpcomingEvents />
        </div>
        <Calendar month={month} year={year} />
      </div>
      <div className="flex flex-col px-4 pt-8 md:mx-40 md:pt-16">
        <div className="relative">
          <h1 className="text-3xl md:text-4xl text-white">past events</h1>
          <div className="h-[1px] w-28 bg-[#cacacab0]" />
        </div>
        <PastEvents />
      </div>
    </div>
  );
}
