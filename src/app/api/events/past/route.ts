import type { Event } from '@/../lib/types.d.ts';
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

const calendarId = process.env.CALENDAR_ID;
const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`;

type CalendarApiResponse = {
  items?: CalendarEvent[];
  error?: {
    code: number;
    message: string;
  };
}

type CalendarEvent = {
  id: string;
  summary: string;
  location?: string;
  description?: string;
  start?: {
    dateTime?: string;
    date?: string;
  };
  end?: {
    dateTime?: string;
    date?: string;
  };
}

export async function GET() {
  try {
    if (!process.env.CALENDAR_API_KEY) {
      return NextResponse.json(
        { error: 'Calendar API key is not configured' },
        { status: 500 }
      );
    }
    else if (!process.env.CALENDAR_ID) {
      return NextResponse.json(
        { error: 'Calendar ID is not configured' },
        { status: 500 }
      );
    }

    // Set timeMax to now to get past events
    const now = new Date();
    const timeMax = now.toISOString();

    // Set timeMin to 1 year ago to limit the search range
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const timeMin = oneYearAgo.toISOString();

    const apiUrl = `${endpoint}?key=${process.env.CALENDAR_API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&orderBy=startTime&singleEvents=true`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Calendar API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json() as CalendarApiResponse;

    if (data.error) {
      return NextResponse.json(
        { error: `Calendar API error: ${data.error.message}` },
        { status: data.error.code || 500 }
      );
    }

    const items = data.items || [];

    if (items.length === 0) {
      return NextResponse.json({ events: [] });
    }

    // Parse and sort events in descending order (most recent first)
    const events = parseItems(items)
      .sort((a, b) => {
        if (!a.start) return -1;
        if (!b.start) return 1;
        return b.start.getTime() - a.start.getTime();
      })
      .slice(0, 3); // Get only the three most recent events

    return NextResponse.json({ events });
  } catch (error) {
    console.error('Error fetching past calendar events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch past calendar events' },
      { status: 500 }
    );
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

      // Handle both timed events (dateTime) and full-day events (date)
      if (item.start?.dateTime) {
        toAdd.start = new Date(item.start.dateTime);
        toAdd.isAllDay = false;
        res.push(toAdd);
      } else if (item.start?.date) {
        // For full-day events, create date at noon local time to avoid timezone shifts
        const [startYear, startMonth, startDay] = item.start.date.split('-').map(Number);
        const startDate = new Date(startYear, startMonth - 1, startDay, 12, 0, 0);

        // Check if it's a multi-day event
        if (item.end?.date) {
          const [endYear, endMonth, endDay] = item.end.date.split('-').map(Number);
          const endDate = new Date(endYear, endMonth - 1, endDay, 12, 0, 0);

          // Create an event for each day in the range
          const currentDate = new Date(startDate);
          while (currentDate < endDate) {
            const eventCopy: Event = {
              ...toAdd,
              id: `${item.id}-${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`,
              start: new Date(currentDate),
              isAllDay: true,
            };
            res.push(eventCopy);
            currentDate.setDate(currentDate.getDate() + 1);
          }
        } else {
          // Single-day event
          toAdd.start = startDate;
          toAdd.isAllDay = true;
          res.push(toAdd);
        }
      }
    } catch (err) {
      console.warn(`Failed to parse event: ${item.id}`, err);
    }
  }

  return res;
}