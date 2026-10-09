import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="card w-full max-w-md p-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Access</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to continue managing your real-estate portfolio.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              defaultValue="admin@realestatecrm.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none ring-0 transition focus:border-brand-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              defaultValue="password123"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none ring-0 transition focus:border-brand-400"
            />
          </div>

          <button type="button" className="w-full rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white hover:bg-brand-700">
            Sign in
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Need access? <Link href="/" className="font-medium text-brand-600">Request demo</Link>
        </p>
      </div>
    </div>
  );
}
