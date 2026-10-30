import { create } from 'zustand'

/**
 * Placeholder auth store. Wire this to the Express auth endpoints later.
 * Do not persist tokens in localStorage without reviewing XSS trade-offs.
 */
export const useAuthStore = create((set) => ({
  user: null,
  status: 'idle',

  setUser: (user) => set({ user, status: user ? 'authenticated' : 'guest' }),
  clearSession: () => set({ user: null, status: 'guest' }),
}))
