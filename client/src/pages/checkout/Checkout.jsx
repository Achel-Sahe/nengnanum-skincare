import { PageShell } from '../../components/PageShell.jsx'

export function Checkout() {
  return (
    <PageShell
      title="Checkout"
      description="Checkout requires a customer session. Shipping address, shipping method, and payment will come from the server."
    >
      {/* TODO: checkout form + POST /orders + payment redirect. Never compute totals client-side. */}
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-sm text-stone-500">
        Checkout placeholder.
      </div>
    </PageShell>
  )
}
