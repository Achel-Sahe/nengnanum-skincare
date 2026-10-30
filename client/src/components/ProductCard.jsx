import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Heart, ShoppingCart } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { formatPrice } from '../lib/utils.js'

export function PrimaryButton({ children, onClick, href, to, className = '', type = 'button' }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 bg-champagne px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-goldlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${className}`
  if (to)
    return (
      <Link to={to} className={classes}>
        {children}
        <ArrowUpRight size={15} />
      </Link>
    )
  if (href)
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowUpRight size={15} />
      </a>
    )
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      <ArrowUpRight size={15} />
    </button>
  )
}

export function ProductCard({ product, onAdd }) {
  const [saved, setSaved] = useState(false)
  const navigate = useNavigate()

  function handleBuy() {
    onAdd(product)
    navigate('/checkout')
  }

  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden bg-paper">
        <Link to={`/products/${product.slug}`} className="block">
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        </Link>
        <span className="absolute left-3 top-3 bg-ivory/90 px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.15em] text-ink">
          {product.note}
        </span>
        <button
          type="button"
          aria-label={saved ? `Hapus ${product.name} dari simpanan` : `Simpan ${product.name}`}
          aria-pressed={saved}
          onClick={(event) => {
            event.stopPropagation()
            setSaved((current) => !current)
          }}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ivory/90 transition-colors ${saved ? 'text-champagne' : 'text-ink hover:text-champagne'}`}
        >
          <Heart size={16} strokeWidth={1.4} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="pt-5">
        <p className="font-sans text-[9px] uppercase tracking-[0.18em] text-slate">
          {product.collection === 'parfum' ? 'Parfum' : 'Skincare'} · {product.category}
        </p>
        <Link to={`/products/${product.slug}`} className="group/link">
          <h3 className="mt-2 font-display text-2xl leading-tight text-ink transition-colors group-hover/link:text-champagne">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 min-h-10 font-sans text-sm leading-5 text-slate">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-hairline pt-4">
          <span className="font-display text-lg text-ink">
            {formatPrice(product.price)}
          </span>
          {onAdd && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onAdd(product)
                }}
                aria-label={`Tambah ${product.name} ke tas`}
                title="Tambah ke tas"
                className="grid size-9 place-items-center rounded-full border border-hairline text-ink transition-colors hover:border-champagne hover:text-champagne"
              >
                <ShoppingCart size={15} strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  handleBuy()
                }}
                aria-label={`Beli ${product.name} sekarang`}
                title="Beli sekarang"
                className="grid size-9 place-items-center rounded-full bg-champagne text-ink transition-colors hover:bg-goldlight"
              >
                <ArrowRight size={16} strokeWidth={1.6} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
