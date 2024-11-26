import { Event } from '@/types/event';
import { addDays, format } from 'date-fns';

export const categories = [
  'Concert',
  'Festival',
  'Conference',
  'Workshop',
  'Exhibition',
  'Sports',
  'Theater',
  'Other',
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Summer Music Festival',
    description: 'A three-day music festival featuring top artists from around the world.',
    date: format(addDays(new Date(), 30), 'yyyy-MM-dd'),
    time: '12:00',
    location: 'Central Park, New York',
    price: 299.99,
    category: 'Festival',
    artist: 'Various Artists',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    organizerId: '1',
    organizerName: 'EventPro Productions',
    capacity: 5000,
    ticketsSold: 3750,
  },
  {
    id: '2',
    title: 'Tech Conference 2024',
    description: 'Annual technology conference with industry leaders and innovators.',
    date: format(addDays(new Date(), 45), 'yyyy-MM-dd'),
    time: '09:00',
    location: 'Convention Center, San Francisco',
    price: 599.99,
    category: 'Conference',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
    organizerId: '2',
    organizerName: 'TechEvents Inc',
    capacity: 2000,
    ticketsSold: 1200,
  },
  {
    id: '3',
    title: 'Classical Night',
    description: 'An evening of classical masterpieces performed by the Symphony Orchestra.',
    date: format(addDays(new Date(), 15), 'yyyy-MM-dd'),
    time: '19:30',
    location: 'Symphony Hall, Boston',
    price: 149.99,
    category: 'Concert',
    artist: 'Symphony Orchestra',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76',
    organizerId: '3',
    organizerName: 'Classical Arts Society',
    capacity: 800,
    ticketsSold: 600,
  },
];

export const mockTicketTypes: Record<string, TicketType[]> = {
  '1': [
    {
      id: 'vip-1',
      name: 'VIP Pass',
      price: 499.99,
      description: 'Access to VIP areas, meet & greet, and exclusive merchandise',
      available: 100,
      maxPerOrder: 4,
    },
    {
      id: 'regular-1',
      name: 'Regular Ticket',
      price: 299.99,
      description: 'General admission to all three days',
      available: 1000,
      maxPerOrder: 6,
    },
  ],
};

export const mockServices: Record<string, AdditionalService[]> = {
  '1': [
    {
      id: 'parking-1',
      name: 'VIP Parking',
      description: 'Reserved parking spot close to the venue',
      price: 49.99,
      available: true,
    },
    {
      id: 'food-1',
      name: 'Food & Beverage Package',
      description: 'Pre-paid food and drink vouchers',
      price: 99.99,
      available: true,
    },
  ],
};