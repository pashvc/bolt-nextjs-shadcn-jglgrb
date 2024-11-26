'use client';

import { TicketSelection } from '@/components/events/ticket-selection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockEvents, mockServices, mockTicketTypes } from '@/lib/mock-data';
import { Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';

export default function EventDetailsPage() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';
  
  const event = mockEvents.find((e) => e.id === params.id);
  
  if (!event) {
    notFound();
  }

  const ticketTypes = mockTicketTypes[event.id] || [];
  const additionalServices = mockServices[event.id] || [];

  return (
    <div className="space-y-6">
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
        <Image
          src={event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{event.title}</h1>
            {event.artist && (
              <p className="text-lg text-muted-foreground">{event.artist}</p>
            )}
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="grid gap-4 p-6">
                <div className="flex items-center space-x-4 text-sm">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-muted-foreground">
                      {event.date} at {event.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <MapPin className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <Users className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Capacity</p>
                    <p className="text-muted-foreground">
                      {event.ticketsSold} / {event.capacity} tickets sold
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">About this event</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <TicketSelection
            eventId={event.id}
            ticketTypes={ticketTypes}
            additionalServices={additionalServices}
          />
        </div>
      </div>
    </div>
  );
}