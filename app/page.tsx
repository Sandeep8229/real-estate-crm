import Link from 'next/link';
import { ArrowRight, Building2, DollarSign, TrendingUp, Users } from 'lucide-react';
import { clients, deals, leads, properties, tasks } from '@/data/mockData';

const stats = [
  { label: 'Total Leads', value: '1,248', change: '+12.8%', icon: Users },
  { label: 'Available Properties', value: '342', change: '+7.3%', icon: Building2 },
  { label: 'Closed Deals', value: '89', change: '+18.1%', icon: DollarSign },
  { label: 'Revenue', value: '$8.4M', change: '+20.4%', icon: TrendingUp },
];

function StatCard({ label, value, change, icon: Icon }: { label: string; value: string; change: string; icon: any }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        <div className="rounded-xl bg-brand-50 p-2 text-brand-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-2 text-sm font-medium text-emerald-600">{change} vs last month</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Dashboard</h1>
        </div>
        <Link
          href="/deals"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          View pipeline <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="card p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Recent Leads</h2>
            <Link href="/leads" className="text-sm font-medium text-brand-600">Manage all</Link>
          </div>

          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{lead.name}</p>
                  <p className="text-sm text-slate-500">{lead.source} • {lead.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="badge bg-brand-50 text-brand-700">{lead.status}</span>
                  <span className="text-sm font-medium text-slate-600">{lead.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Open Tasks</h2>
            <Link href="/tasks" className="text-sm font-medium text-brand-600">All tasks</Link>
          </div>
          <div className="space-y-4">
            {tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-slate-800">{task.title}</p>
                  <span
                    className={`badge ${
                      task.priority === 'High'
                        ? 'bg-rose-100 text-rose-700'
                        : task.priority === 'Medium'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                  <span>{task.assignee}</span>
                  <span>{task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="card p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Property Pipeline</h2>
            <Link href="/properties" className="text-sm font-medium text-brand-600">View all</Link>
          </div>
          <div className="space-y-3">
            {properties.slice(0, 3).map((property) => (
              <div key={property.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                <div>
                  <p className="font-medium text-slate-800">{property.title}</p>
                  <p className="text-sm text-slate-500">{property.location} • {property.beds} beds</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">{property.price}</p>
                  <span className="badge bg-emerald-50 text-emerald-700">{property.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Deal Snapshot</h2>
            <Link href="/deals" className="text-sm font-medium text-brand-600">Open deals</Link>
          </div>
          <div className="space-y-3">
            {deals.slice(0, 3).map((deal) => (
              <div key={deal.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-slate-800">{deal.client}</p>
                  <span className="badge bg-slate-100 text-slate-700">{deal.stage}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{deal.property}</p>
                <p className="mt-1 font-semibold text-slate-800">{deal.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
