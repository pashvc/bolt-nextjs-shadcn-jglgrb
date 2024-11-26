'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AdditionalService, TicketOrder, TicketType } from '@/types/ticket';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface PurchaseConfirmationProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: TicketOrder;
  ticketTypes: TicketType[];
  additionalServices: AdditionalService[];
  onConfirm: () => Promise<void>;
}

export function PurchaseConfirmation({
  open,
  onOpenChange,
  order,
  ticketTypes,
  additionalServices,
  onConfirm,
}: PurchaseConfirmationProps) {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = async () => {
    setIsProcessing(true);
    try {
      await onConfirm();
      router.push(`/dashboard/tickets/${order.eventId}`);
    } catch (error) {
      console.error('Purchase failed:', error);
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Purchase</DialogTitle>
          <DialogDescription>
            Please review your order details before confirming the purchase.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 px-1">
            <div className="space-y-4">
              <h4 className="font-medium">Tickets</h4>
              {order.tickets.map(({ typeId, quantity }) => {
                const ticketType = ticketTypes.find((t) => t.id === typeId);
                if (!ticketType || quantity === 0) return null;
                return (
                  <div key={typeId} className="flex justify-between text-sm">
                    <span>
                      {quantity}x {ticketType.name}
                    </span>
                    <span className="font-medium">
                      ${(ticketType.price * quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>

            {order.services.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-medium">Additional Services</h4>
                {order.services.map((serviceId) => {
                  const service = additionalServices.find(
                    (s) => s.id === serviceId
                  );
                  if (!service) return null;
                  return (
                    <div key={serviceId} className="flex justify-between text-sm">
                      <span>{service.name}</span>
                      <span className="font-medium">
                        ${service.price.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Confirm Purchase'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}