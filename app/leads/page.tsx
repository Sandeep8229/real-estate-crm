import { ArrowUpRight, Building2, Search, SlidersHorizontal } from 'lucide-react';
import { leads } from '@/data/mockData';

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">CRM</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Lead Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            <Search className="h-4 w-4" /> Quick Search
          </button>
        </div>
      </header>

      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Name</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Source</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Budget</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Agent</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-slate-800">{lead.name}</p>
                    <p className="text-sm text-slate-500">{lead.location}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{lead.source}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{lead.budget}</td>
                <td className="px-6 py-4">
                  <span
                    className={`badge ${
                      lead.status === 'Hot'
                        ? 'bg-rose-100 text-rose-700'
                        : lead.status === 'Qualified'
                          ? 'bg-brand-100 text-brand-700'
                          : lead.status === 'Closed'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{lead.agent}</td>
                <td className="px-6 py-4">
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-brand-600">
                    View <ArrowUpRight className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
