'use client';

import { EventCard } from '@/components/events/event-card';
import { EventFilters } from '@/components/events/event-filters';
import { mockEvents } from '@/lib/mock-data';
import { EventFilters as EventFiltersType } from '@/types/event';
import { useState } from 'react';

export default function EventsPage() {
  const [filters, setFilters] = useState<EventFiltersType>({});

  // In a real app, this would be filtered on the server
  const filteredEvents = mockEvents.filter((event) => {
    if (filters.search && !event.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.category && filters.category !== 'all' && event.category !== filters.category) {
      return false;
    }
    if (filters.artist && event.artist?.toLowerCase().includes(filters.artist.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Discover Events</h1>
      </div>
      <EventFilters filters={filters} onFiltersChange={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}