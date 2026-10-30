import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, Search, ShoppingBag, X } from 'lucide-react'

import { useCartStore } from '../../features/cart/store.js'

const aboutLinks = [
  { label: 'Tentang Kami', to: '/about-us' },
  { label: 'QnA', to: '/qna' },
]

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', children: aboutLinks },
  { label: 'Koleksi', to: '/shop' },
  { label: 'Tim', to: '/team' },
  { label: 'Jurnal', to: '/blog' },
  { label: 'Kontak', to: '/contact' },
]

const currentYear = new Date().getFullYear()

export function BrandMark({ light = true }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3" aria-label="Beranda Nengnanum Beauty">
      <span className="relative grid h-9 w-9 place-items-center rounded-full border border-champagne/60 text-champagne">
        <span className="absolute inset-[4px] rounded-full border border-champagne/25" />
        <span className="font-display text-[19px] leading-none">N</span>
      </span>
      <span
        className={`font-display text-[19px] tracking-[0.12em] ${light ? 'text-ivory' : 'text-ink'}`}
      >
        Nengnanum <span className="hidden sm:inline">Beauty</span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const { pathname } = useLocation()
  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  )
  const isAboutActive = aboutLinks.some((link) => pathname.startsWith(link.to))

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-ivory backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-atelier items-center justify-between px-5 sm:px-8 lg:px-12">
        <BrandMark />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigasi utama">
          {links.map(({ label, to, children }) =>
            children ? (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={aboutOpen}
                  aria-controls="about-menu"
                  aria-haspopup="true"
                  onClick={() => setAboutOpen((open) => !open)}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') setAboutOpen(false)
                  }}
                  className={`nav-link flex items-center gap-1.5 ${isAboutActive ? 'nav-link-active' : ''}`}
                >
                  {label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id="about-menu"
                  className={`absolute left-1/2 top-full w-48 -translate-x-1/2 border border-champagne/25 bg-midnight shadow-gold transition-all duration-200 ${
                    aboutOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
                  }`}
                >
                  {children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={() => setAboutOpen(false)}
                      className={({ isActive }) =>
                        `block border-b border-white/10 px-5 py-3.5 font-sans text-[10px] uppercase tracking-[0.18em] transition-colors last:border-b-0 ${
                          isActive ? 'text-champagne' : 'text-ivory/70 hover:text-champagne'
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {label}
              </NavLink>
            ),
          )}
        </nav>
        <div className="flex items-center gap-1">
          <Link
            to="/qna"
            aria-label="Cari pertanyaan dan jawaban"
            className="header-icon hidden sm:grid"
          >
            <Search size={17} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" aria-label={`Tas belanja, ${cartCount} item`} className="header-icon relative">
            <ShoppingBag size={17} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-champagne px-1 text-[9px] font-semibold text-ink">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="ml-2 grid h-10 w-10 place-items-center text-ivory md:hidden"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="border-t border-white/10 bg-midnight px-5 py-4 md:hidden"
          aria-label="Navigasi mobile"
        >
          {links.map(({ label, to, children }) =>
            children ? (
              <div key={label} className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={mobileAboutOpen}
                  aria-controls="mobile-about-menu"
                  onClick={() => setMobileAboutOpen((open) => !open)}
                  className={`flex w-full items-center justify-between py-4 font-sans text-xs uppercase tracking-[0.18em] ${isAboutActive ? 'text-champagne' : 'text-ivory/75'}`}
                >
                  {label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div id="mobile-about-menu" className="pb-2 pl-4">
                    {children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block border-l border-white/10 py-3 pl-4 font-sans text-[11px] uppercase tracking-[0.16em] ${isActive ? 'text-champagne' : 'text-ivory/60'}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-white/10 py-4 font-sans text-xs uppercase tracking-[0.18em] ${isActive ? 'text-champagne' : 'text-ivory/75'}`
                }
              >
                {label}
              </NavLink>
            ),
          )}
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false)

  function submit(event) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-midnight text-ivory">
      <div className="mx-auto grid max-w-atelier gap-12 px-6 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.8fr_1.2fr] lg:px-12 lg:py-16">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-ivory/55">
            Skincare halal dan terdaftar BPOM untuk pria dan wanita. Kulit sehat, cerah, dan
            terawat—bukan hasil instan.
          </p>
        </div>
        <div>
          <p className="eyebrow text-champagne">Nengnanum</p>
          <div className="mt-5 space-y-3 font-sans text-sm text-ivory/65">
            <Link className="footer-link" to="/about-us">
              Cerita kami
            </Link>
            <Link className="footer-link" to="/shop">
              Lihat koleksi
            </Link>
            <Link className="footer-link" to="/about-us#process">
              Nilai &amp; bahan
            </Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-champagne">Bantuan</p>
          <div className="mt-5 space-y-3 font-sans text-sm text-ivory/65">
            <Link className="footer-link" to="/qna">
              Tanya jawab
            </Link>
            <Link className="footer-link" to="/qna#consultation">
              Konsultasi kulit
            </Link>
            <Link className="footer-link" to="/contact">
              Customer care
            </Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-champagne">Jurnal</p>
          <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-ivory/55">
            Catatan seputar perawatan kulit dan kebiasaan baik untuk kulitmu.
          </p>
          <form onSubmit={submit} className="mt-4 flex border-b border-ivory/25 pb-2">
            <label htmlFor="gazette-email" className="sr-only">
              Alamat email
            </label>
            <input
              id="gazette-email"
              type="email"
              required
              placeholder="Alamat emailmu"
              className="min-w-0 flex-1 bg-transparent py-2 font-sans text-sm text-ivory outline-none placeholder:text-ivory/35"
            />
            <button
              className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.16em] text-champagne"
              type="submit"
            >
              {subscribed ? 'Pratinjau' : 'Ikuti'} <ArrowRight size={14} />
            </button>
          </form>
          {subscribed && (
            <p className="mt-2 font-sans text-xs text-champagne">
              Pratinjau saja — pendaftaran ini belum terhubung ke mailing list.
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-atelier flex-col gap-3 px-6 py-5 font-sans text-[10px] text-ivory/35 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <span>© {currentYear} Nengnanum Beauty</span>
          <span className="flex flex-wrap gap-x-5 gap-y-2 uppercase tracking-[0.12em]">
            <Link to="/privacy" className="transition-colors hover:text-champagne">Privasi</Link>
            <Link to="/terms" className="transition-colors hover:text-champagne">Ketentuan</Link>
            <Link to="/shipping-returns" className="transition-colors hover:text-champagne">Pengiriman &amp; pengembalian</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export function Eyebrow({ children, className = '' }) {
  return <p className={`eyebrow text-champagne ${className}`}>{children}</p>
}

export function SectionHeading({ eyebrow, title, description, light = false, align = 'left', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-display text-4xl font-normal leading-[1.03] tracking-[-0.025em] sm:text-5xl ${light ? 'text-ivory' : 'text-ink'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl font-sans text-sm leading-6 sm:text-base ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-ivory/65' : 'text-slate'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function TextLink({ to, children, light = false, className = '' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] transition-colors ${light ? 'text-goldlight hover:text-champagne' : 'text-ink hover:text-champagne'} ${className}`}
    >
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
    </Link>
  )
}
