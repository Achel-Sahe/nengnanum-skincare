import { Link } from 'react-router-dom'

import { PageShell } from '../components/PageShell.jsx'

export function NotFoundPage() {
  return (
    <PageShell title="Page not found" description="That page does not exist or has moved.">
      <Link
        to="/"
        className="inline-flex rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
      >
        Back to home
      </Link>
    </PageShell>
  )
}
