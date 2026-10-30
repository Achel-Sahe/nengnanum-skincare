import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Eyebrow, SectionHeading } from '../components/layout/SiteChrome.jsx'
import { parfumProducts, skincareProducts } from '../data/content.js'
import { formatPrice } from '../lib/utils.js'

const collections = [
  {
    number: '01',
    label: 'Skincare',
    title: 'Rawat & jaga',
    description:
      'Melembapkan, mencerahkan, dan menjaga kulit tetap sehat. Untuk pria dan wanita, aman dipakai jangka panjang.',
    image: '/images/heritage-hero.jpg',
    alt: 'Rangkaian skincare Nengnanum Beauty dalam cahaya hangat',
    to: '/shop/skincare',
    products: skincareProducts,
  },
  {
    number: '02',
    label: 'Parfum',
    title: 'Wangi & berkesan',
    description:
      'Oud, mawar, amber, dan musk dalam komposisi yang menemani hari dan meninggalkan kesan.',
    image: '/images/rose-harvest.jpg',
    alt: 'Bahan botanik untuk parfum Nengnanum Beauty',
    to: '/shop/parfum',
    products: parfumProducts,
  },
]

function CollectionCard({ number, label, title, description, image, alt, to, products }) {
  const startingPrice = Math.min(...products.map((product) => product.price))

  return (
    <Link to={to} className="group block border border-hairline bg-paper">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="aspect-[1.2/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        <span className="absolute left-5 top-5 bg-ivory/90 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.16em] text-ink">
          {number} · {label}
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-md font-sans text-sm leading-6 text-slate">{description}</p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-champagne text-champagne transition-colors group-hover:bg-champagne group-hover:text-ink">
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </span>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-4 font-sans text-[10px] uppercase tracking-[0.15em] text-slate">
          <span>{String(products.length).padStart(2, '0')} produk</span>
          <span>Mulai {formatPrice(startingPrice)}</span>
        </div>
      </div>
    </Link>
  )
}

export function Shop() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(35,42,112,.65),transparent_55%)]" />
        <div className="relative mx-auto flex subpage-hero max-w-atelier flex-col justify-center px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <Eyebrow>Shop · Nengnanum Beauty</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[.94] tracking-[-0.04em] sm:text-7xl">
            Dua dunia,
            <br />
            <em className="font-normal text-goldlight">satu ritual.</em>
          </h1>
          <p className="mt-7 max-w-2xl font-sans text-sm leading-6 text-ivory/65 sm:text-base sm:leading-7">
            Rawat kulitmu, lalu lengkapi dengan aroma yang jadi ciri khasmu. Pilih rangkaian
            skincare atau parfum Nengnanum Beauty—dua ranah berbeda, satu cara merawat diri.
          </p>
          <div className="mt-10 flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.2em] text-goldlight">
            <span className="h-px w-10 bg-champagne" /> Untuk pria &amp; wanita
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
          <div className="border-b border-hairline pb-6">
            <SectionHeading
              eyebrow="Pilih rangkaian"
              title="Mulai dari mana?"
              description="Setiap rangkaian punya halaman sendiri, dengan produk dan panduan yang sesuai."
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {collections.map((collection) => (
              <CollectionCard key={collection.to} {...collection} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-atelier flex-col items-start justify-between gap-5 border-y border-hairline py-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl text-ink">Belum yakin harus pilih yang mana?</p>
            <p className="mt-1 font-sans text-sm text-slate">
              Tim kami bisa bantu memilih sesuai kebutuhan kulit dan selera aromamu.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 border-b border-champagne pb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-champagne"
          >
            Tanya tim kami <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
