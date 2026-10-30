import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Client-side cart. Prices here are display-only snapshots.
 * The server re-reads real prices at checkout, so never trust these values.
 */
export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((entry) => entry.variantId === item.variantId)

          if (existing) {
            return {
              items: state.items.map((entry) =>
                entry.variantId === item.variantId
                  ? { ...entry, quantity: entry.quantity + quantity }
                  : entry,
              ),
            }
          }

          return { items: [...state.items, { ...item, quantity }] }
        }),

      removeItem: (variantId) =>
        set((state) => ({
          items: state.items.filter((entry) => entry.variantId !== variantId),
        })),

      updateQuantity: (variantId, quantity) =>
        set((state) => ({
          items: state.items
            .map((entry) =>
              entry.variantId === variantId
                ? { ...entry, quantity: Math.max(1, Number(quantity) || 1) }
                : entry,
            )
            .filter((entry) => entry.quantity > 0),
        })),

      clear: () => set({ items: [] }),

      totalItems: () => get().items.reduce((total, entry) => total + entry.quantity, 0),
      subtotal: () =>
        get().items.reduce((total, entry) => total + entry.price * entry.quantity, 0),
    }),
    { name: 'nengnanum-cart' },
  ),
)
