'use client';

import { useRequireUser, useCollection } from '@/firebase';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import { format } from 'date-fns';

type Enquiry = {
  id: string;
  name: string;
  email: string;
  company: string;
  budget: string;
  projectDetails: string;
  createdAt: { seconds: number; nanoseconds: number };
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
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome, {user.email}</p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Enquiries</CardTitle>
          </CardHeader>
          <CardContent>
            {enquiriesLoading && <p>Loading enquiries...</p>}
            {error && <p className="text-destructive">Error loading enquiries: {error.message}</p>}
            {!enquiriesLoading && !error && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enquiries.map((enquiry) => (
                    <TableRow key={enquiry.id}>
                      <TableCell>
                        {enquiry.createdAt
                          ? format(
                              new Date(enquiry.createdAt.seconds * 1000),
                              'PPP'
                            )
                          : 'N/A'}
                      </TableCell>
                      <TableCell>{enquiry.name}</TableCell>
                      <TableCell>{enquiry.email}</TableCell>
                      <TableCell>{enquiry.company}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{enquiry.budget}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{enquiry.projectDetails}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
