import { PageShell } from '../../components/PageShell.jsx'

export function CheckoutSuccess() {
  return (
    <PageShell
      title="Terima kasih"
      description="Status pembayaran akan dikonfirmasi oleh penyedia pembayaran dan dapat diperbarui dari sistem pesanan."
    >
      <div className="border border-dashed border-hairline bg-paper p-10 text-sm text-slate">
        Konfirmasi pesanan akan tampil di sini setelah backend terhubung.
      </div>
    </PageShell>
  )
}
