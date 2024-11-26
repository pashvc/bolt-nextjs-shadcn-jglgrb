'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockEvents } from '@/lib/mock-data';
import { Calendar, DollarSign, MoreVertical, Plus, Ticket, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MyEventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Events</h1>
          <p className="text-muted-foreground">
            Create and manage your events
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/my-events/new">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockEvents.map((event) => (
          <Card key={event.id}>
            <div className="relative aspect-video">
              <Image
                src={event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'}
                alt={event.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date} at {event.time}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Ticket className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {event.ticketsSold} / {event.capacity}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      ${event.price}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}