import type { Event } from '@/../lib/types.d.ts';
import { NextResponse } from 'next/server';
const calendarId =
  'c_893d7ec01b0d651ddfadf46f6792b1d470abe97c6d9f33157a1f4be2d4420a51@group.calendar.google.com';
const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;
export async function GET() {
  const data = await fetch(endpoint + `?key=${process.env.CALENDAR_API_KEY}`).then((res) =>
    res.json(),
  );

  const items = data.items as unknown[] | undefined;

  if (!items) return new Response('No events found', { status: 404 });
  const events = parseItems(items).sort((a, b) => {
    if (!a.start) return -1;
    if (!b.start) return 1;
    return a.start.getTime() - b.start.getTime();
  });

  const now = new Date();
  const upcoming = events.filter((event) => event.start && event.start > now);

  return new NextResponse<Event[]>(JSON.stringify(upcoming));
}

function parseItems(list: unknown[]): Event[] {
  const res: Event[] = [];
  for (const item of list) {
    if (!item || typeof item !== 'object') continue;
    if (!('id' in item) || !('summary' in item)) continue;
    const toAdd: Event = {
      id: item.id as string,
      title: item.summary as string,
    };

    if ('location' in item && typeof item.location === 'string') toAdd.location = item.location;
    if (!('start' in item) || !item.start || typeof item.start !== 'object') continue;
    if (!('dateTime' in item.start) || typeof item.start.dateTime !== 'string') continue;

    toAdd.start = new Date(item.start.dateTime);
    res.push(toAdd);
  }
  return res;
}
