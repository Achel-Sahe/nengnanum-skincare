const stats = [
  { label: 'Orders today', value: '—' },
  { label: 'Revenue this month', value: '—' },
  { label: 'Low stock variants', value: '—' },
  { label: 'Pending payments', value: '—' },
]

export function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-stone-600">
        Sales summaries will load from the admin API. Figures stay empty until the server
        exists.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="text-sm text-stone-500">{stat.label}</p>
            <p className="mt-3 text-2xl font-semibold text-stone-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-stone-200 bg-white">
        <div className="border-b border-stone-200 px-5 py-4">
          <h2 className="text-sm font-semibold text-stone-900">Recent orders</h2>
        </div>
        <div className="p-10 text-sm text-stone-500">No orders yet.</div>
      </div>
    </div>
  )
}
