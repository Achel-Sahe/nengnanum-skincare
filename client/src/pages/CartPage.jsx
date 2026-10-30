import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageShell } from '../components/PageShell.jsx'
import { useCartStore } from '../features/cart/store.js'
import { formatPrice } from '../lib/utils.js'

export function CartPage() {
  const items = useCartStore((state) => state.items)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <PageShell
      title="Your atelier bag"
      description="Quantities are revalidated against real stock and pricing during checkout."
    >
      {items.length === 0 ? (
        <div className="border border-hairline bg-paper p-10 text-center">
          <p className="font-sans text-sm text-slate">Your bag is empty.</p>
          <Link
            to="/shop"
            className="mt-5 inline-flex bg-champagne px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-goldlight"
          >
            Explore the collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <ul className="divide-y divide-hairline border-y border-hairline">
            {items.map((item) => (
              <li key={item.variantId} className="flex items-center gap-4 py-4">
                {item.image ? (
                  <img src={item.image} alt="" className="size-16 bg-paper object-cover" />
                ) : (
                  <div className="size-16 bg-paper" />
                )}

                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-lg text-ink">{item.name}</p>
                  <p className="mt-1 font-sans text-sm text-slate">
                    {formatPrice(item.price, 'USD')}
                  </p>
                </div>

                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) => updateQuantity(item.variantId, event.target.value)}
                  aria-label={`Quantity for ${item.name}`}
                  className="w-16 border border-hairline bg-transparent px-2 py-1.5 font-sans text-sm text-ink"
                />

                <button
                  type="button"
                  onClick={() => removeItem(item.variantId)}
                  aria-label={`Remove ${item.name}`}
                  className="p-2 text-slate transition hover:text-champagne"
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-hairline bg-paper p-5">
            <div className="flex items-center justify-between font-sans text-sm">
              <span className="text-slate">Subtotal</span>
              <span className="font-medium text-ink">{formatPrice(subtotal, 'USD')}</span>
            </div>
            <p className="mt-2 font-sans text-xs leading-5 text-slate">
              Shipping and taxes are calculated on the server at checkout.
            </p>
            <Link
              to="/checkout"
              className="mt-5 flex justify-center bg-champagne px-5 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-goldlight"
            >
              Continue to checkout
            </Link>
          </aside>
        </div>
      )}
    </PageShell>
  )
}
