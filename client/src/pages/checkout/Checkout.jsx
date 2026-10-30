import { PageShell } from '../../components/PageShell.jsx'

export function Checkout() {
  return (
    <PageShell
      title="Checkout"
      description="Checkout memerlukan sesi pelanggan. Alamat pengiriman, metode pengiriman, dan pembayaran akan tersedia setelah backend terhubung."
    >
      {/* TODO: checkout form + POST /orders + payment redirect. Never compute totals client-side. */}
      <div className="border border-dashed border-hairline bg-paper p-10 text-sm text-slate">
        Form checkout akan tampil di sini setelah backend terhubung.
      </div>
    </PageShell>
  )
}
