'use client';

import { PricingCard } from './pricing-card';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small events and workshops',
    price: '$29',
    features: [
      'Up to 100 tickets per event',
      'Basic analytics',
      'Email support',
      'QR code validation',
      'Mobile app access',
    ],
  },
  {
    name: 'Pro',
    description: 'Ideal for growing organizations',
    price: '$79',
    features: [
      'Up to 1,000 tickets per event',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'Additional services sales',
      'Audience engagement tools',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale events and festivals',
    price: '$199',
    features: [
      'Unlimited tickets',
      'Real-time analytics',
      '24/7 phone support',
      'White-label solution',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
    ],
  },
];

export function LandingPricing() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto md:max-w-[64rem] space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground">
          Choose the perfect plan for your event management needs
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 mt-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  );
}