import { useParams } from 'react-router-dom'

import { PageShell } from '../components/PageShell.jsx'

export function ProductDetail() {
  const { slug } = useParams()

  return (
    <PageShell
      title="Product detail"
      description="Gallery, ingredients, usage instructions, variants, and stock will load from GET /products/:slug."
    >
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-sm text-stone-500">
        Placeholder for <span className="font-medium text-stone-800">{slug}</span>.
      </div>
    </PageShell>
  )
}
