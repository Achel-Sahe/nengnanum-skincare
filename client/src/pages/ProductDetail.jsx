import { useParams } from 'react-router-dom'

import { PageShell } from '../components/PageShell.jsx'

export function ProductDetail() {
  const { slug } = useParams()

  return (
    <PageShell
      title="Detail produk"
      description="Galeri, bahan, cara pakai, varian, dan stok akan dimuat dari data produk."
    >
      <div className="border border-dashed border-hairline bg-paper p-10 text-sm text-slate">
        Halaman detail untuk <span className="font-medium text-ink">{slug}</span> akan segera tersedia.
      </div>
    </PageShell>
  )
}
