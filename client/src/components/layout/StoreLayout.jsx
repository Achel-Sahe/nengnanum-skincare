import { Outlet } from 'react-router-dom'

import { SiteFooter, SiteHeader } from './SiteChrome.jsx'

export function StoreLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-ivory text-ink">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
