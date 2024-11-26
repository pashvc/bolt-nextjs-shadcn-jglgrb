'use client';

import { Calendar, DollarSign, Ticket, TrendingUp } from 'lucide-react';
import { StatsCard } from './stats-card';

export function QuickStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Revenue"
        value="$45,231.89"
        description="Total revenue from all events"
        icon={DollarSign}
        trend={{ value: 12, isPositive: true }}
      />
      <StatsCard
        title="Ticket Sales"
        value="2,345"
        description="Total tickets sold this month"
        icon={Ticket}
        trend={{ value: 8, isPositive: true }}
      />
      <StatsCard
        title="Active Events"
        value="12"
        description="Currently active events"
        icon={Calendar}
      />
      <StatsCard
        title="Conversion Rate"
        value="3.2%"
        description="Visits to ticket sales"
        icon={TrendingUp}
        trend={{ value: 2, isPositive: false }}
      />
    </div>
  );
}