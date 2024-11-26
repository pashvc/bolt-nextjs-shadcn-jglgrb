'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockEvents } from '@/lib/mock-data';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import QRCode from 'qrcode.react';

export default function TicketPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event = mockEvents.find((e) => e.id === params.eventId);

  if (!event) {
    notFound();
  }

  // In a real app, this would be a unique ticket ID
  const ticketId = `TICKET-${event.id}-${Date.now()}`;

  return (
    <div className="container max-w-2xl space-y-8 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Your Ticket</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{event.title}</h2>
            {event.artist && (
              <p className="text-lg text-muted-foreground">{event.artist}</p>
            )}

            <div className="grid gap-4">
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
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <QRCode value={ticketId} size={200} />
            </div>
            <p className="text-sm text-muted-foreground">
              Ticket ID: {ticketId}
            </p>
          </div>

          <div className="flex justify-center">
            <Button>Download Ticket</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}