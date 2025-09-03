import type { Event } from '@/../lib/types.d.ts';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const calendarId = process.env.CALENDAR_ID;
const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;
const calendarTimeZone = 'America/Chicago';

type CalendarApiResponse = {
  items?: CalendarEvent[];
  error?: {
    code: number;
    message: string;
  };
};

type CalendarEvent = {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start?: {
    dateTime?: string;
  };
};

export async function GET(request: Request) {
  try {
    if (!process.env.CALENDAR_API_KEY) {
      return NextResponse.json({ error: 'Calendar API key is not configured' }, { status: 500 });
    } else if (!process.env.CALENDAR_ID) {
      return NextResponse.json({ error: 'Calendar ID is not configured' }, { status: 500 });
    }

    const url = new URL(request.url);
    const yearParam = url.searchParams.get('year');
    const monthParam = url.searchParams.get('month');

    let apiUrl = `${endpoint}?key=${process.env.CALENDAR_API_KEY}`;

    if (yearParam && monthParam) {
      const year = parseInt(yearParam, 10);
      const month = parseInt(monthParam, 10);

      if (isNaN(year) || isNaN(month)) {
        return NextResponse.json({ error: 'Invalid year or month format' }, { status: 400 });
      }

      if (month < 0 || month > 11) {
        return NextResponse.json({ error: 'Month must be between 0 and 11' }, { status: 400 });
      }

      const timeMin = new Date(year, month, 1).toLocaleString('en-US', {
        timeZone: calendarTimeZone,
      });
      const timeMinString = new Date(timeMin).toISOString();
      const timeMax = new Date(year, month + 1, 1, 23, 59, 59, 999).toLocaleString('en-US', {
        timeZone: calendarTimeZone,
      });
      const timeMaxString = new Date(timeMax).toISOString();

      apiUrl += `&timeMin=${timeMinString}&timeMax=${timeMaxString}`;
    } else {
      // For upcoming events, set timeMin to now
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const nowString = now.toLocaleString('en-US', {
        timeZone: calendarTimeZone,
      });
      apiUrl += `&timeMin=${new Date(nowString).toISOString()}`;
    }
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Calendar API error: ${response.statusText}` },
        { status: response.status },
      );
    }

    const data = (await response.json()) as CalendarApiResponse;

    // Check for API errors
    if (data.error) {
      return NextResponse.json(
        { error: `Calendar API error: ${data.error.message}` },
        { status: data.error.code || 500 },
      );
    }

    const items = data.items || [];

    if (items.length === 0) {
      return NextResponse.json(
        { events: [] },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
    }

    const events = parseItems(items).sort((a, b) => {
      if (!a.start) return -1;
      if (!b.start) return 1;
      return a.start.getTime() - b.start.getTime();
    });

    return NextResponse.json(
      { events },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json({ error: 'Failed to fetch calendar events' }, { status: 500 });
  }
}

function parseItems(list: CalendarEvent[]): Event[] {
  const res: Event[] = [];

  for (const item of list) {
    try {
      if (!item.id || !item.summary) continue;

      const toAdd: Event = {
        id: item.id,
        title: item.summary,
        description: item.description,
      };

      if (item.location) {
        toAdd.location = item.location;
      }

      if (item.start?.dateTime) {
        toAdd.start = new Date(item.start.dateTime);
        res.push(toAdd);
      }
    } catch (err) {
      console.warn(`Failed to parse event: ${item.id}`, err);
    }
  }

  return res;
}
