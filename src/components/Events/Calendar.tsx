'use client';

import { useReducer, useState } from 'react';
import CalendarBody from './CalendarBody';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
type State = { currentYear: number; currentMonth: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'NEXT_MONTH':
      const nextMonth = state.currentMonth + 1;
      return {
        currentMonth: nextMonth > 11 ? 0 : nextMonth,
        currentYear: nextMonth > 11 ? state.currentYear + 1 : state.currentYear,
      };
    case 'PREV_MONTH':
      const prevMonth = state.currentMonth - 1;
      return {
        currentMonth: prevMonth < 0 ? 11 : prevMonth,
        currentYear: prevMonth < 0 ? state.currentYear - 1 : state.currentYear,
      };
  }
}

function Calendar() {
  // Get current date information
  const [state, dispatch] = useReducer(reducer, {
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
  });

  return (
    <div className="rounded-lg bg-gray-800 p-5 shadow-md">
      <div className="mb-5 flex items-center justify-center space-x-4 text-white">
        <button onClick={() => dispatch({ type: 'PREV_MONTH' })}>{`<`}</button>
        <span className="w-20 text-center text-2xl font-semibold">
          {monthNames[state.currentMonth]}
        </span>
        <button onClick={() => dispatch({ type: 'NEXT_MONTH' })}>{`>`}</button>
      </div>
      <CalendarBody month={state.currentMonth} year={state.currentYear} />
    </div>
  );
}

export default Calendar;
