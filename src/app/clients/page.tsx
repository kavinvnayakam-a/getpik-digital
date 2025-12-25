import PageHeader from '@/components/page-header';
import { ClientBoard } from './client-board';
import { clients } from '@/lib/data';

export default function ClientsPage() {
  return (
    <div className="container mx-auto flex h-full flex-col animate-in fade-in duration-500 px-4 py-8">
      <PageHeader
        title="Client Management"
        description="Organize, track, and manage your clients from leads to completed projects."
      />
      <ClientBoard clients={clients} />
    </div>
  );
}
