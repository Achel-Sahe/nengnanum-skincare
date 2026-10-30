import { useParams } from 'react-router-dom'

import { PageShell } from '../../components/PageShell.jsx'

export function OrderDetailPage() {
  const { id } = useParams()

  return (
    <PageShell
      title="Order detail"
      description="Status, items, totals, and payment state will load from GET /orders/:id."
    >
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-sm text-stone-500">
        Placeholder for order <span className="font-medium text-stone-800">#{id}</span>.
      </div>
    </PageShell>
  )
}
