import { Mail, MapPin, Phone } from 'lucide-react';
import { clients } from '@/data/mockData';

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Customers</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Clients</h1>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {clients.map((client) => (
          <div key={client.id} className="card p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl font-semibold text-slate-900">{client.name}</p>
                <p className="mt-1 text-sm text-slate-500">{client.type}</p>
              </div>
              <span className="badge bg-brand-50 text-brand-700">Active</span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                {client.city}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" />
                {client.contact}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                Last activity: {client.lastActivity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
