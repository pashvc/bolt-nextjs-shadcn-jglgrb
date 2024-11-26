'use client';

import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LandingButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'default' | 'outline';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function LandingButton({ 
  href, 
  children, 
  icon: Icon, 
  variant = 'default',
  className,
  onClick
}: LandingButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size="lg"
      className={cn(
        'group relative overflow-hidden transition-all hover:scale-105',
        className
      )}
    >
      <Link href={href} className="flex items-center gap-2" onClick={onClick}>
        {children}
        {Icon && (
          <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    </Button>
  );
}