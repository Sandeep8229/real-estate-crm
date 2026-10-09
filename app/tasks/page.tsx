import { CheckSquare, Clock3 } from 'lucide-react';
import { tasks } from '@/data/mockData';

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Operations</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Tasks</h1>
      </header>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="card flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-lg bg-brand-50 p-2 text-brand-600">
                <CheckSquare className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{task.title}</p>
                <p className="mt-1 text-sm text-slate-500">Assigned to {task.assignee}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
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
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                <Clock3 className="h-3.5 w-3.5" />
                {task.due}
              </span>
              <span className="badge bg-slate-100 text-slate-700">{task.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
