'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { PurchaseConfirmation } from '@/components/events/purchase-confirmation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AdditionalService, TicketType } from '@/types/ticket';
import { useState } from 'react';

interface TicketSelectionProps {
  eventId: string;
  ticketTypes: TicketType[];
  additionalServices: AdditionalService[];
}

export function TicketSelection({
  eventId,
  ticketTypes,
  additionalServices,
}: TicketSelectionProps) {
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const total = Object.entries(selectedTickets).reduce((sum, [typeId, quantity]) => {
    const ticketType = ticketTypes.find((t) => t.id === typeId);
    return sum + (ticketType?.price || 0) * quantity;
  }, 0) + selectedServices.reduce((sum, serviceId) => {
    const service = additionalServices.find((s) => s.id === serviceId);
    return sum + (service?.price || 0);
  }, 0);

  const handleTicketChange = (typeId: string, quantity: string) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [typeId]: parseInt(quantity),
    }));
  };

  const handleServiceToggle = (serviceId: string, checked: boolean) => {
    setSelectedServices((prev) =>
      checked
        ? [...prev, serviceId]
        : prev.filter((id) => id !== serviceId)
    );
  };

  const handlePurchase = () => {
    setShowConfirmation(true);
  };

  const handleConfirmPurchase = async () => {
    // In a real app, this would submit to an API
    console.log('Purchase:', {
      eventId,
      tickets: Object.entries(selectedTickets).map(([typeId, quantity]) => ({
        typeId,
        quantity,
      })),
      services: selectedServices,
      total,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Tickets</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {ticketTypes.map((type) => (
            <div key={type.id} className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor={type.id}>{type.name}</Label>
                <span className="text-sm font-medium">
                  ${type.price.toFixed(2)}
                </span>
              </div>
              <Select
                value={selectedTickets[type.id]?.toString()}
                onValueChange={(value) => handleTicketChange(type.id, value)}
              >
                <SelectTrigger id={type.id}>
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  {Array.from({ length: type.maxPerOrder }, (_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {additionalServices.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-semibold">Additional Services</h3>
            {additionalServices.map((service) => (
              <div key={service.id} className="flex items-start space-x-3">
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={(checked) =>
                    handleServiceToggle(service.id, checked as boolean)
                  }
                />
                <div className="space-y-1">
                  <Label
                    htmlFor={service.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {service.name} (${service.price.toFixed(2)})
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button
          className="w-full"
          size="lg"
          onClick={handlePurchase}
          disabled={Object.values(selectedTickets).every((q) => q === 0)}
        >
          Purchase Tickets
        </Button>
      </CardFooter>
      <PurchaseConfirmation
        open={showConfirmation}
        onOpenChange={setShowConfirmation}
        order={{
          eventId,
          tickets: Object.entries(selectedTickets).map(([typeId, quantity]) => ({
            typeId,
            quantity,
          })),
          services: selectedServices,
          total,
        }}
        ticketTypes={ticketTypes}
        additionalServices={additionalServices}
        onConfirm={handleConfirmPurchase}
      />
    </Card>
  );
}