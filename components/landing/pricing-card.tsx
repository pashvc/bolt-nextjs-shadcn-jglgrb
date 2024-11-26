'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ name, description, price, features, popular }: PricingCardProps) {
  return (
    <Card className={popular ? 'border-primary shadow-lg' : undefined}>
      <CardHeader>
        {popular && (
          <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground mb-2">
            Most Popular
          </div>
        )}
        <CardTitle>{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline text-2xl font-bold">
          {price}
          <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
        </div>
        <ul className="mt-4 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-sm">
              <Check className="mr-2 h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={popular ? 'default' : 'outline'}>
          <Link href="/register">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}