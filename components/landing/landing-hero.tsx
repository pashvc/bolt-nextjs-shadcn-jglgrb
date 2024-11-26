'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import { LandingButton } from './landing-button';

const benefits = [
  'No setup or hidden fees',
  'Real-time ticket validation',
  'Comprehensive analytics',
];

export function LandingHero() {
  return (
    <section className="gradient-hero space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Advanced Event Management & Ticketing System
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Seamlessly manage events, sell tickets, and engage with your audience. QR-check provides everything you need for successful event organization.
        </p>
        <div className="mx-auto mt-4 flex max-w-xl flex-col gap-4 md:flex-row md:gap-8">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="space-x-4">
          <LandingButton href="/register" icon={ArrowRight}>
            Get Started
          </LandingButton>
          <LandingButton 
            href="#features" 
            variant="outline" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </LandingButton>
        </div>
      </div>
    </section>
  );
}