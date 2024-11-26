'use client';

import { cn } from '@/lib/utils';
import { useAuth } from '@/providers/auth-provider';
import {
  Calendar,
  LayoutDashboard,
  Settings,
  Ticket,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const viewerLinks = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'My Tickets',
    href: '/dashboard/tickets',
    icon: Ticket,
  },
  {
    title: 'Events',
    href: '/dashboard/events',
    icon: Calendar,
  },
];

const promoterLinks = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Events',
    href: '/dashboard/events',
    icon: Calendar,
  },
  {
    title: 'My Events',
    href: '/dashboard/my-events',
    icon: Calendar,
  },
  {
    title: 'Audience',
    href: '/dashboard/audience',
    icon: Users,
  },
];

const adminLinks = [
  ...promoterLinks,
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const { user } = useAuth();
  const pathname = usePathname();

  const links = user?.role === 'admin'
    ? adminLinks
    : user?.role === 'promoter'
      ? promoterLinks
      : viewerLinks;

  return (
    <div className="w-64 border-r bg-card">
      <nav className="space-y-2 p-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors',
              pathname === link.href
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <link.icon className="h-4 w-4" />
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}