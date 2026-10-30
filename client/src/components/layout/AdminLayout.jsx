import { Link, NavLink, Outlet } from 'react-router-dom'

import { cn } from '../../lib/utils.js'

const navigation = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/categories', label: 'Categories' },
  { to: '/admin/orders', label: 'Orders' },
]

export function AdminLayout() {
  return (
    <div className="flex min-h-svh bg-stone-50 text-stone-900">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-stone-200 bg-white md:flex">
        <Link
          to="/admin"
          className="flex h-16 items-center border-b border-stone-200 px-6 text-sm font-semibold tracking-[0.2em] uppercase"
        >
          nengnanum admin
        </Link>

        <nav className="flex flex-1 flex-col gap-1 p-3 text-sm">
          {navigation.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900',
                  isActive && 'bg-stone-900 text-white hover:bg-stone-900 hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-stone-200 p-3">
          <Link
            to="/"
            className="block rounded-md px-3 py-2 text-sm text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
          >
            View storefront
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center border-b border-stone-200 bg-white px-6 md:hidden">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">nengnanum admin</span>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
