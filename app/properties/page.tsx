import { Home, Search, SlidersHorizontal } from 'lucide-react';
import { properties } from '@/data/mockData';

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Listings</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Properties</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            <Search className="h-4 w-4" /> Search unit
          </button>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <div key={property.id} className="card overflow-hidden">
            <div className="bg-gradient-to-r from-brand-100 to-slate-100 p-4">
              <div className="flex items-center justify-between">
                <span className="badge bg-white text-slate-700">{property.type}</span>
                <span className="badge bg-emerald-100 text-emerald-700">{property.status}</span>
              </div>
              <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
                <Home className="h-8 w-8" />
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{property.title}</h3>
                <span className="text-sm font-medium text-brand-600">{property.price}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{property.location}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
