'use client';

import { useAuth } from '@/providers/auth-provider';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogOut, QrCode } from 'lucide-react';
import Link from 'next/link';

export function MainNav() {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
  };

  if (isLoading) {
    return null;
  }

  // Don't show nav on auth pages
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return null;
  }

  // Don't show nav on dashboard pages
  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <QrCode className="h-6 w-6" />
          <span className="font-bold">QR-check</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Dashboard
              </Link>
              <span className="text-sm text-muted-foreground">
                {user?.name}
              </span>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Sign in
              </Link>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}