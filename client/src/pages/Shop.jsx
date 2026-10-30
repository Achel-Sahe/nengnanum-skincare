import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Eyebrow, SectionHeading } from '../components/layout/SiteChrome.jsx'
import { ProductCard } from '../components/ProductCard.jsx'
import { parfumProducts, products, skincareProducts } from '../data/content.js'
import { useCartStore } from '../features/cart/store.js'

const filters = ['Semua', 'Parfum', 'Skincare']

const catalogMap = {
  Semua: products,
  Skincare: skincareProducts,
  Parfum: parfumProducts,
}

export function Shop() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const addItem = useCartStore((state) => state.addItem)

  const visibleProducts = useMemo(() => catalogMap[activeFilter] || products, [activeFilter])

  function handleAdd(product) {
    addItem(
      {
        variantId: product.slug,
        productId: product.slug,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.image,
      },
      1,
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(35,42,112,.7),transparent_55%)]" />
        <div className="relative mx-auto flex subpage-hero max-w-atelier flex-col justify-center px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <Eyebrow>Shop · Nengnanum Beauty</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[.94] tracking-[-0.04em] sm:text-7xl">
            Belanja
            <br />
            <em className="font-normal text-goldlight">langsung di Shop</em>
          </h1>
          <p className="mt-7 max-w-2xl font-sans text-sm leading-6 text-ivory/65 sm:text-base sm:leading-7">
            Filter sesuai kebutuhanmu: semua produk, parfum, atau skincare. Tambahkan ke tas dan
            lanjutkan ke checkout dengan mudah.
          </p>
          <div className="mt-10 flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em] text-goldlight">
            <span className="h-px w-10 bg-champagne" /> Untuk pria &amp; wanita
          </div>
        </div>
      </section>

      <section id="collection" className="scroll-mt-20 bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 border-b border-hairline pb-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Shop"
              title="Semua produk"
              description="Hanya ada tiga filter: Semua, Parfum, Skincare."
            />
            <div className="flex flex-wrap gap-x-5 gap-y-2 pb-1" role="group" aria-label="Filter shop">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`border-b pb-2 font-sans text-[10px] uppercase tracking-[0.16em] transition-colors ${activeFilter === filter ? 'border-champagne text-ink' : 'border-transparent text-slate hover:text-ink'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} onAdd={handleAdd} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-atelier flex-col items-start justify-between gap-5 border-y border-hairline py-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl text-ink">Lihat koleksi lengkap</p>
            <p className="mt-1 font-sans text-sm text-slate">
              Atau jelajahi halaman Koleksi untuk tampilan yang lebih terarah.
            </p>
          </div>
          <Link
            to="/koleksi"
            className="inline-flex shrink-0 items-center gap-2 border-b border-champagne pb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-champagne"
          >
            Ke Koleksi <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
