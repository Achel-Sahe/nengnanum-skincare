import { PageShell } from '../../components/PageShell.jsx'

export function CheckoutSuccessPage() {
  return (
    <PageShell
      title="Thank you"
      description="Payment status is confirmed by the payment provider webhook and can be refreshed from GET /orders/:id."
    >
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-sm text-stone-500">
        Order confirmation placeholder.
      </div>
    </PageShell>
  )
}
