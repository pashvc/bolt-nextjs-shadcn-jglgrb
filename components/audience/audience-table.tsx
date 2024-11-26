'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const mockAttendees = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    eventsAttended: 5,
    lastAttended: '2024-03-15',
    totalSpent: 499.99,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    eventsAttended: 3,
    lastAttended: '2024-03-10',
    totalSpent: 299.99,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    eventsAttended: 8,
    lastAttended: '2024-03-20',
    totalSpent: 799.99,
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    eventsAttended: 2,
    lastAttended: '2024-03-05',
    totalSpent: 199.99,
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david@example.com',
    eventsAttended: 4,
    lastAttended: '2024-03-18',
    totalSpent: 399.99,
  },
];

export function AudienceTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Events Attended</TableHead>
          <TableHead>Last Attended</TableHead>
          <TableHead>Total Spent</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockAttendees.map((attendee) => (
          <TableRow key={attendee.id}>
            <TableCell className="font-medium">{attendee.name}</TableCell>
            <TableCell>{attendee.email}</TableCell>
            <TableCell>{attendee.eventsAttended}</TableCell>
            <TableCell>{attendee.lastAttended}</TableCell>
            <TableCell>${attendee.totalSpent.toFixed(2)}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}