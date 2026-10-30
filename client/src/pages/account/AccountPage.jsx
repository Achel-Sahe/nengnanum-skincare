import { Link } from 'react-router-dom'

import { PageShell } from '../../components/PageShell.jsx'

const links = [
  { to: '/account/orders', label: 'Order history' },
  { to: '/account/addresses', label: 'Saved addresses' },
]

export function AccountPage() {
  return (
    <PageShell
      title="My account"
      description="Profile, default address, and recent orders will load from the authenticated session."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="rounded-2xl border border-stone-200 bg-white p-5 text-sm font-medium text-stone-900 transition hover:border-stone-400"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </PageShell>
  )
}
