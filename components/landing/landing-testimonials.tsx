import { TestimonialCard } from './testimonial-card';

const testimonials = [
  {
    content: "QR-check transformed how we manage our events. The real-time analytics and audience engagement tools are game-changers.",
    author: "Sarah Johnson",
    role: "Event Director",
    rating: 5
  },
  {
    content: "The seamless ticket validation and additional services management have significantly improved our event operations.",
    author: "Michael Chen",
    role: "Festival Organizer",
    rating: 5
  },
  {
    content: "Outstanding platform for both organizers and attendees. The QR code system works flawlessly every time.",
    author: "Emma Rodriguez",
    role: "Concert Promoter",
    rating: 5
  }
];

export function LandingTestimonials() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto md:max-w-[64rem] space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl">
          Trusted by Event Organizers
        </h2>
        <p className="text-muted-foreground">
          See what our customers have to say about QR-check
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </section>
  );
}