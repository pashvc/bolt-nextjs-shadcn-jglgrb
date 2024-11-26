import { Calendar, QrCode, Users } from 'lucide-react';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Create and manage events with ease. Set up tickets, pricing, and additional services.',
  },
  {
    icon: QrCode,
    title: 'Digital Tickets',
    description: 'Secure QR code tickets with instant validation. No more paper tickets or fraud concerns.',
  },
  {
    icon: Users,
    title: 'Audience Engagement',
    description: 'Build and engage with your audience. Send invitations and special offers.',
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto md:max-w-[64rem] space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl">
          Everything You Need for Successful Events
        </h2>
        <p className="text-muted-foreground">
          Powerful tools and features designed to make event management effortless
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}