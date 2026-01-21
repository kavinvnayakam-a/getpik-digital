'use client';

import { useRequireUser, useCollection } from '@/firebase';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2, Radio } from 'lucide-react';
import { format } from 'date-fns';

type Enquiry = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  projectDetails: string;
  createdAt: { seconds: number; nanoseconds: number };
  company?: string;
  brideName?: string;
  bridePhone?: string;
  groomName?: string;
  groomPhone?: string;
  weddingVenue?: string;
};

export default function AdminPage() {
  const { user, loading: userLoading } = useRequireUser();
  const {
    data: enquiries,
    loading: enquiriesLoading,
    error,
  } = useCollection<Enquiry>('enquiries');

  if (userLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto">
        <header className="mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            <Radio className="w-3 h-3 animate-pulse" /> Secure Channel
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mt-4">
            Admin <br /><span className="text-muted-foreground/80 not-italic">Console.</span>
          </h1>
          <p className="text-muted-foreground text-lg font-medium max-w-md leading-relaxed mt-4">
            Welcome back, {user.email}. Manage all incoming transmissions.
          </p>
        </header>

        <Card className="bg-card/80 border-border/50 rounded-[3rem] backdrop-blur-2xl shadow-2xl overflow-hidden">
          <CardHeader className="p-8 md:p-12">
            <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Incoming Transmissions</CardTitle>
            <CardDescription className="text-muted-foreground font-medium italic">Enquiries from the contact protocol.</CardDescription>
          </CardHeader>
          <CardContent className="px-8 md:px-12 pb-8 md:pb-12">
            {enquiriesLoading && (
                <div className="flex items-center justify-center p-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            )}
            {error && <p className="text-destructive text-center font-bold">Error loading enquiries: {error.message}</p>}
            {!enquiriesLoading && !error && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Date</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Service</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Name</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Email</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">WhatsApp</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Company</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Bride</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Groom</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Venue</TableHead>
                      <TableHead className="font-black uppercase tracking-widest text-muted-foreground text-[10px]">Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enquiries.map((enquiry) => (
                      <TableRow key={enquiry.id} className="border-border/50">
                        <TableCell className="font-bold whitespace-nowrap">
                          {enquiry.createdAt
                            ? format(
                                new Date(enquiry.createdAt.seconds * 1000),
                                'PPP'
                              )
                            : 'N/A'}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="whitespace-nowrap">{enquiry.service || 'N/A'}</Badge>
                        </TableCell>
                        <TableCell className="font-bold whitespace-nowrap">{enquiry.name}</TableCell>
                        <TableCell className="text-muted-foreground italic whitespace-nowrap">{enquiry.email}</TableCell>
                        <TableCell className="text-muted-foreground italic whitespace-nowrap">{enquiry.whatsapp}</TableCell>
                        <TableCell className="font-bold whitespace-nowrap">{enquiry.company || '-'}</TableCell>
                        <TableCell className="font-medium text-sm whitespace-nowrap">{enquiry.brideName ? `${enquiry.brideName} (${enquiry.bridePhone})` : '-'}</TableCell>
                        <TableCell className="font-medium text-sm whitespace-nowrap">{enquiry.groomName ? `${enquiry.groomName} (${enquiry.groomPhone})` : '-'}</TableCell>
                        <TableCell className="font-medium text-sm whitespace-nowrap">{enquiry.weddingVenue || '-'}</TableCell>
                        <TableCell className="max-w-xs truncate text-muted-foreground italic">{enquiry.projectDetails}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
            {enquiries.length === 0 && !enquiriesLoading && (
                <div className="text-center p-12 text-muted-foreground italic font-medium">
                    No transmissions received yet.
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
