import { Link, useParams } from 'react-router-dom'

import { Eyebrow } from '../components/layout/SiteChrome.jsx'
import { ProductCard } from '../components/ProductCard.jsx'
import { products } from '../data/content.js'
import { formatPrice } from '../lib/utils.js'
import { useCartStore } from '../features/cart/store.js'

export function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const addItem = useCartStore((state) => state.addItem)

  const related = products.filter((item) => item.slug !== slug && item.collection === product?.collection).slice(0, 3)

  if (!product) {
    return (
      <section className="mx-auto w-full max-w-atelier px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="border border-hairline bg-paper p-10 text-center">
          <p className="font-display text-2xl text-ink">Produk tidak ditemukan</p>
          <p className="mt-2 font-sans text-sm text-slate">
            Coba kembali ke koleksi untuk melihat produk lain.
          </p>
          <Link
            to="/koleksi"
            className="mt-6 inline-flex border-b border-champagne pb-2 font-sans text-[10px] uppercase tracking-[0.18em] text-ink"
          >
            Kembali ke koleksi
          </Link>
        </div>
      </section>
    )
  }

  function handleAdd() {
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
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-atelier gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-16">
          <div className="relative overflow-hidden bg-paper">
            <img src={product.image} alt={product.alt} className="aspect-square w-full object-cover" />
            <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.15em] text-ink">
              {product.note}
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <Eyebrow>
              {product.collection === 'parfum' ? 'Parfum' : 'Skincare'} · {product.category}
            </Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 font-display text-2xl text-ink">{formatPrice(product.price)}</p>
            <p className="mt-6 max-w-lg font-sans text-sm leading-6 text-slate">{product.description}</p>
            <p className="mt-5 max-w-lg font-sans text-sm leading-6 text-slate">
              {product.longDescription || product.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleAdd}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-hairline bg-transparent px-7 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-champagne hover:text-champagne"
              >
                Tambah ke tas
              </button>
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-champagne px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-goldlight"
              >
                Beli Sekarang
              </Link>
            </div>
            {(product.volume || product.benefits) && (
              <div className="mt-10 border-t border-hairline pt-6">
                {product.volume && (
                  <div className="mb-5">
                    <p className="font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Kemasan</p>
                    <p className="mt-1 font-sans text-sm text-ink">{product.volume}</p>
                  </div>
                )}
                {product.benefits && (
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Manfaat</p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="font-sans text-sm text-ink">
                          · {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            {product.howToUse && (
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Cara pakai</p>
                <p className="mt-2 max-w-lg font-sans text-sm leading-6 text-slate">{product.howToUse}</p>
              </div>
            )}
            <div className="mt-8 grid gap-4 border-t border-hairline pt-6 sm:grid-cols-3">
              <div>
                <p className="font-sans text-[9px] uppercase tracking-[0.16em] text-slate">BPOM</p>
                <p className="mt-1 font-sans text-sm text-ink">Terdaftar & teruji</p>
              </div>
              <div>
                <p className="font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Halal</p>
                <p className="mt-1 font-sans text-sm text-ink">Bersertifikat</p>
              </div>
              <div>
                <p className="font-sans text-[9px] uppercase tracking-[0.16em] text-slate">Untuk semua</p>
                <p className="mt-1 font-sans text-sm text-ink">Pria & wanita</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper py-16 sm:py-20">
          <div className="mx-auto max-w-atelier px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>Terkait</Eyebrow>
                <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                  {product.collection === 'parfum' ? 'Parfum lainnya' : 'Skincare lainnya'}
                </h2>
              </div>
              <Link
                to={product.collection === 'parfum' ? '/shop?filter=Parfum' : '/shop?filter=Skincare'}
                className="inline-flex items-center gap-2 border-b border-champagne pb-2 font-sans text-[10px] uppercase tracking-[0.16em] text-ink"
              >
                Lihat lebih banyak
              </Link>
            </div>
            <div className="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} onAdd={handleAdd} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
