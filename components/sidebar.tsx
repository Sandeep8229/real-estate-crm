import Link from 'next/link';
import { BarChart3, Building2, CheckSquare, Home, LayoutDashboard, Users, BriefcaseBusiness } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Leads', href: '/leads', icon: Users },
  { label: 'Properties', href: '/properties', icon: Building2 },
  { label: 'Deals', href: '/deals', icon: BriefcaseBusiness },
  { label: 'Clients', href: '/clients', icon: Home },
  { label: 'Tasks', href: '/tasks', icon: CheckSquare },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-slate-950 p-6 text-slate-100 md:flex md:flex-col">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-lg shadow-brand-500/30">
          RE
        </div>
        <div>
          <p className="text-lg font-bold">Real Estate CRM</p>
          <p className="text-xs text-slate-400">Broker Operations</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Performance</p>
        <p className="mt-3 text-2xl font-bold text-white">82%</p>
        <p className="mt-1 text-sm text-slate-300">Sales conversion this quarter</p>
      </div>
    </aside>
  );
}
