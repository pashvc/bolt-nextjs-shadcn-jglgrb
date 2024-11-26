'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockEvents } from '@/lib/mock-data';
import { Calendar, MapPin, QrCode } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TicketEvent extends (typeof mockEvents)[0] {
  ticketId: string;
  purchaseDate: string;
  status: 'unused' | 'used' | 'expired';
}

const mockTickets: TicketEvent[] = mockEvents.slice(0, 2).map(event => ({
  ...event,
  ticketId: `TICKET-${event.id}-${Date.now()}`,
  purchaseDate: '2024-03-26',
  status: 'unused',
}));

export default function TicketsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Tickets</h1>
        <p className="text-muted-foreground">
          View and manage your event tickets
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {mockTickets.map((event) => (
          <Card key={event.id}>
            <div className="relative aspect-video">
              <Image
                src={event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'}
                alt={event.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2">
                <Button
                  size="sm"
                  className={
                    event.status === 'unused'
                      ? 'bg-green-500 hover:bg-green-600'
                      : event.status === 'used'
                      ? 'bg-gray-500 hover:bg-gray-600'
                      : 'bg-red-500 hover:bg-red-600'
                  }
                >
                  {event.status === 'unused'
                    ? 'Valid'
                    : event.status === 'used'
                    ? 'Used'
                    : 'Expired'}
                </Button>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>Purchased on {event.purchaseDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {event.date} at {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm">
                  <QrCode className="mr-2 h-4 w-4" />
                  Ticket ID: {event.ticketId}
                </div>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/tickets/${event.id}`}>
                    View Ticket
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}