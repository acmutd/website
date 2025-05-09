import Link from 'next/link';
import CalendarBody from './CalendarBody';

const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

type Props = {
  month: number;
  year: number;
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function changeMonth(amt: 'inc' | 'dec', { month, year }: { month: number; year: number }) {
  if (amt == 'inc') {
    if (month == 11) return { month: 0, year: year + 1 };
    else return { month: month + 1, year };
  }
  if (month == 0) return { month: 11, year: year - 1 };
  else return { month: month - 1, year };
}

async function Calendar({ month, year }: Props) {
  const res = await fetch(`${BASE_API_URL}/api/events?month=${month}&year=${year}`).then((res) => res.json());
  const nextParams = changeMonth('inc', { month, year });
  const prevParams = changeMonth('dec', { month, year });

  return (
    <div className="w-full rounded-3xl border border-[#ffffff82] bg-gradient-to-tr from-[#ffffff1f] from-[3.07%] to-[#ffffff08] to-[96.39%] p-3 md:p-5 shadow-md backdrop-blur-xl lg:w-2/3">
      <div className="mb-3 md:mb-5 flex items-center justify-between text-white">
        <Link
          className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center text-lg md:text-base rounded-full hover:bg-white/20 transition-colors"
          href={{
            pathname: '/events',
            query: { month: prevParams.month, year: prevParams.year },
          }}
        >{`<`}</Link>
        <span className="w-24 md:w-32 text-center text-lg md:text-2xl font-semibold">{monthNames[month]}</span>
        <Link
          className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center text-lg md:text-base rounded-full hover:bg-white/20 transition-colors"
          href={{
            pathname: '/events',
            query: { month: nextParams.month, year: nextParams.year },
          }}
        >{`>`}</Link>
      </div>
      <CalendarBody month={month} year={year} events={res.events} />
    </div>
  );
}

export default Calendar;
