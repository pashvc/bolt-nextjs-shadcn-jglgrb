'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Ticket } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '10K+',
    label: 'Events Managed',
    description: 'Successfully organized events',
  },
  {
    icon: Users,
    value: '1M+',
    label: 'Happy Attendees',
    description: 'Across all events',
  },
  {
    icon: Ticket,
    value: '5M+',
    label: 'Tickets Sold',
    description: 'Securely processed',
  },
];

export function LandingStats() {
  return (
    <section className="container py-8 md:py-12">
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {stats.map(({ icon: Icon, value, label, description }) => (
          <Card key={label}>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Icon className="h-12 w-12 text-primary mb-4" />
              <div className="space-y-1">
                <h3 className="text-3xl font-bold">{value}</h3>
                <p className="font-medium">{label}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}