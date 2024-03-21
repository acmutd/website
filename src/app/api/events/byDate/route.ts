import { NextResponse } from 'next/server';
import { GET as getEvents } from '../route';
import type { Event } from '@/../lib/types.d.ts';

const calendarId =
  'c_893d7ec01b0d651ddfadf46f6792b1d470abe97c6d9f33157a1f4be2d4420a51@group.calendar.google.com';
const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const year = parseInt(url.searchParams.get('year') || '', 10);
  const month = parseInt(url.searchParams.get('month') || '', 10);

  const filteredEvents = await byDate(month, year);

  return new NextResponse<Event[]>(JSON.stringify(filteredEvents));
}

export async function byDate(month: number, year: number): Promise<Event[]> {
  const data = await getEvents().then((res) => res.json());
  const events = data.map((item: any) => ({
    ...item,
    start: new Date(item.start),
  }));

  const earliest = new Date(year, month, 1);
  const latest = new Date(year, month + 1, 0);

  // Filter events by date
  const filteredEvents = events.filter((event: Event) => {
    if (!event.start) return false;
    const eventDate = new Date(event.start);
    return eventDate >= earliest && eventDate <= latest;
  });

  return filteredEvents;
}
