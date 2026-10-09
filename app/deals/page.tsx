import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import { deals } from '@/data/mockData';

export default function DealsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Pipeline</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Deals</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
          Add new deal <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {deals.map((deal) => (
          <div key={deal.id} className="card p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <BriefcaseBusiness className="h-5 w-5" />
              </span>
              <span className="badge bg-slate-100 text-slate-700">{deal.stage}</span>
            </div>
            <p className="text-lg font-semibold text-slate-900">{deal.client}</p>
            <p className="mt-2 text-sm text-slate-500">{deal.property}</p>
            <p className="mt-4 text-2xl font-bold text-slate-900">{deal.value}</p>
            <p className="mt-3 text-sm text-slate-500">Agent: {deal.agent}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
