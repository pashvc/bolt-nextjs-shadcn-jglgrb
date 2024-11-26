export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  category: string;
  artist?: string;
  image?: string;
  organizerId: string;
  organizerName: string;
  capacity: number;
  ticketsSold: number;
}

export interface EventFilters {
  search?: string;
  category?: string;
  artist?: string;
  dateFrom?: Date;
  dateTo?: Date;
  priceMin?: number;
  priceMax?: number;
}