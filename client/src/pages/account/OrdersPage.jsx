import { PageShell } from '../../components/PageShell.jsx'

export function OrdersPage() {
  return (
    <PageShell
      title="Orders"
      description="Order history will load from GET /orders for the signed-in customer."
    >
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-sm text-stone-500">
        Order list placeholder.
      </div>
    </PageShell>
  )
}
