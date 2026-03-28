import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

type Event = {
  id: string;
  title: string;
  start?: Date;
  location?: string;
  description?: string;
};

// For the OG image, we'll accept events data as URL search params or use fallback data
const getEventsFromSearchParams = (searchParams: URLSearchParams): Event[] => {
  const eventsParam = searchParams.get('events');
  if (eventsParam) {
    try {
      const parsedEvents = JSON.parse(decodeURIComponent(eventsParam));
      return parsedEvents.map((event: any) => ({
        ...event,
        start: event.start ? new Date(event.start) : undefined,
      }));
    } catch {
      // If parsing fails, return empty array
      return [];
    }
  }
  return [];
};

const formatEventDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

const formatEventTime = (date: Date) => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let events = getEventsFromSearchParams(searchParams);

    // If no events in params, use sample data for demonstration
    if (events.length === 0) {
      events = [
        {
          id: 'sample-1',
          title: 'ACM General Meeting',
          start: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
          location: 'ECSW 1.315',
          description: 'Join us for our weekly general meeting!',
        },
        {
          id: 'sample-2',
          title: 'Workshop: React Fundamentals',
          start: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // In 3 days
          location: 'ECSS 2.311',
          description: 'Learn the basics of React development',
        },
      ];
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a', // slate-900
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #1e40af 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7c3aed 0%, transparent 50%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
                textAlign: 'center',
              }}
            >
              ACM UTD Events
            </h1>
          </div>

          {/* Events Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '90%',
              maxWidth: '900px',
            }}
          >
            {events.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <p
                  style={{
                    fontSize: '24px',
                    color: 'white',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  No upcoming events at the moment. Stay tuned!
                </p>
              </div>
            ) : (
              events.map((event, index) => {
                const gradients = [
                  'linear-gradient(135deg, #008CF1, #00ECEC)',
                  'linear-gradient(135deg, #EA7F01, #FFC700)',
                  'linear-gradient(135deg, #78DFCD, #E1EE93)',
                ];

                return (
                  <div
                    key={event.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '24px',
                      background: gradients[index % 3],
                      borderRadius: '16px',
                      color: '#1f2937', // gray-800
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '28px',
                          fontWeight: 'bold',
                          margin: 0,
                          marginBottom: '8px',
                        }}
                      >
                        {event.title}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          fontSize: '18px',
                          opacity: 0.8,
                        }}
                      >
                        {event.start && (
                          <span>
                            📅 {formatEventDate(event.start)} at {formatEventTime(event.start)}
                          </span>
                        )}
                        {event.location && <span>📍 {event.location}</span>}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '40px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '16px',
            }}
          >
            <p style={{ margin: 0 }}>Visit acmutd.co/events for more information</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error('Error generating OG image:', error);

    // Fallback image
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a',
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #1e40af 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7c3aed 0%, transparent 50%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              textAlign: 'center',
            }}
          >
            ACM UTD Events
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.7)',
              marginTop: '20px',
              textAlign: 'center',
            }}
          >
            Upcoming and past events from ACM UTD
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  }
}
