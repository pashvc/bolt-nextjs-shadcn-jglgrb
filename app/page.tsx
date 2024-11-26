'use client';

import { useAuth } from '@/providers/auth-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LandingHero } from '@/components/landing/landing-hero';
import { LandingFeatures } from '@/components/landing/landing-features';
import { LandingStats } from '@/components/landing/landing-stats';
import { LandingPricing } from '@/components/landing/landing-pricing';
import { LandingTestimonials } from '@/components/landing/landing-testimonials';
import { LandingCTA } from '@/components/landing/landing-cta';

export default function Home() {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <LandingHero />
      <LandingFeatures />
      <LandingStats />
      <LandingPricing />
      <LandingTestimonials />
      <LandingCTA />
    </div>
  );
}