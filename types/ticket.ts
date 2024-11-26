export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
  maxPerOrder: number;
}

export interface AdditionalService {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export interface TicketOrder {
  eventId: string;
  tickets: {
    typeId: string;
    quantity: number;
  }[];
  services: string[];
  total: number;
}