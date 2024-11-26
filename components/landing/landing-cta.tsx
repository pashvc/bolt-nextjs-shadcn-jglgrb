import { ArrowRight } from 'lucide-react';
import { LandingButton } from './landing-button';

export function LandingCTA() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[58rem] space-y-12 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Ready to revolutionize your events?
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join thousands of event organizers who trust QR-check for their ticketing needs.
        </p>
        <LandingButton href="/register" icon={ArrowRight}>
          Start Free Trial
        </LandingButton>
      </div>
    </section>
  );
}