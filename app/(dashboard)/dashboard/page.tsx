'use client';

import { ActivityList } from '@/components/dashboard/activity-list';
import { QuickStats } from '@/components/dashboard/quick-stats';
import { useAuth } from '@/providers/auth-provider';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
      <p className="text-muted-foreground">
        This is your {user?.role} dashboard. Start managing your events and tickets.
      </p>
      <QuickStats />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <ActivityList />
        </div>
      </div>
    </div>
  );
}