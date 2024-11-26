'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, DollarSign, Ticket, User } from 'lucide-react';

interface Activity {
  id: string;
  type: 'ticket_sale' | 'event_created' | 'payment_received' | 'user_registered';
  description: string;
  timestamp: string;
}

const activityIcons = {
  ticket_sale: Ticket,
  event_created: Calendar,
  payment_received: DollarSign,
  user_registered: User,
};

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'ticket_sale',
    description: 'New ticket sale for Summer Music Festival',
    timestamp: '2 minutes ago',
  },
  {
    id: '2',
    type: 'payment_received',
    description: 'Payment received for VIP package',
    timestamp: '1 hour ago',
  },
  {
    id: '3',
    type: 'event_created',
    description: 'New event "Tech Conference 2024" created',
    timestamp: '3 hours ago',
  },
  {
    id: '4',
    type: 'user_registered',
    description: 'New user registration from promotional link',
    timestamp: '5 hours ago',
  },
];

export function ActivityList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {mockActivities.map((activity) => {
            const Icon = activityIcons[activity.type];
            return (
              <div key={activity.id} className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}