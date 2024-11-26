'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Event } from '@/types/event';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4'}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="space-y-1">
          <h3 className="font-semibold leading-none tracking-tight">{event.title}</h3>
          {event.artist && (
            <p className="text-sm text-muted-foreground">{event.artist}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          {event.date} at {event.time}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          {event.location}
        </div>
        <div className="text-lg font-semibold">
          ${event.price.toFixed(2)}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/dashboard/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}