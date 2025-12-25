'use client';

import type { Client } from '@/lib/data';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

const columns = [
  { id: 'Lead', title: 'Leads' },
  { id: 'Current', title: 'Current Clients' },
  { id: 'Completed', title: 'Completed' },
] as const;

export function ClientBoard({ clients: initialClients }: { clients: Client[] }) {
  const [clients, setClients] = useState(initialClients);

  const updateClientNotes = (clientId: string, newNotes: string) => {
    setClients(
      clients.map(c => (c.id === clientId ? { ...c, notes: newNotes } : c))
    );
  };

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {columns.map(col => (
        <div key={col.id} className="bg-card rounded-lg h-full shadow-sm">
          <h2 className="font-headline border-b p-4 text-lg font-semibold">
            {col.title}
          </h2>
          <div className="space-y-4 p-4">
            {clients
              .filter(client => client.status === col.id)
              .map(client => (
                <ClientCard
                  key={client.id}
                  client={client}
                  onUpdateNotes={updateClientNotes}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ClientCard({
  client,
  onUpdateNotes,
}: {
  client: Client;
  onUpdateNotes: (clientId: string, newNotes: string) => void;
}) {
  const [notes, setNotes] = useState(client.notes);

  const handleSave = () => {
    onUpdateNotes(client.id, notes);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-shadow hover:shadow-md">
          <CardHeader className="p-4">
            <CardTitle className="text-base font-semibold">
              {client.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{client.company}</p>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-headline">
            {client.name} - {client.company}
          </DialogTitle>
          <Badge
            variant="secondary"
            className="absolute top-4 right-16 w-fit"
          >
            {client.status}
          </Badge>
        </DialogHeader>
        <div className="py-4">
          <label htmlFor="notes" className="text-sm font-medium">
            Notes
          </label>
          <Textarea
            id="notes"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            className="mt-2 min-h-[150px]"
            placeholder="Add quick notes for this client..."
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleSave}>Save Notes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
