'use client';

import { useReducer } from 'react';
import CalendarBody from './CalendarBody';
import type { Event } from '../../../lib/types';

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

type Action = { type: 'NEXT_MONTH' } | { type: 'PREV_MONTH' };
type State = { currentYear: number; currentMonth: number; events: Event[] };

function reducer(state: State, action: Action): State {
  const newEvent: Event = {
    date: new Date(state.currentYear, state.currentMonth, 27),
    title: 'Projects Presentation Night',
    id: '1',
    location: '',
  };
  switch (action.type) {
    case 'NEXT_MONTH':
      const nextMonth = state.currentMonth + 1;
      return {
        currentMonth: nextMonth > 11 ? 0 : nextMonth,
        currentYear: nextMonth > 11 ? state.currentYear + 1 : state.currentYear,
        events: [newEvent],
      };
    case 'PREV_MONTH':
      const prevMonth = state.currentMonth - 1;
      return {
        currentMonth: prevMonth < 0 ? 11 : prevMonth,
        currentYear: prevMonth < 0 ? state.currentYear - 1 : state.currentYear,
        events: [],
      };
  }
}

function Calendar() {
  const [state, dispatch] = useReducer(reducer, {
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    events: [{ date: new Date(), title: 'Projects Presentation Night', id: '1', location: '' }],
  });

  return (
    <div className="rounded-3xl border border-[#ffffff82] bg-gradient-to-tr from-[#ffffff1f] from-[3.07%] to-[#ffffff08] to-[96.39%] p-5 shadow-md backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between text-white">
        <button className="w-10" onClick={() => dispatch({ type: 'PREV_MONTH' })}>{`<`}</button>
        <span className="w-32 text-center text-2xl font-semibold">
          {monthNames[state.currentMonth]}
        </span>
        <button className="w-10" onClick={() => dispatch({ type: 'NEXT_MONTH' })}>{`>`}</button>
      </div>
      <CalendarBody month={state.currentMonth} year={state.currentYear} events={state.events} />
    </div>
  );
}

export default Calendar;
