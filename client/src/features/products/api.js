import { api } from '../../lib/api.js'

export function getProducts(params = {}) {
  const query = new URLSearchParams(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== ''),
  )

  const suffix = query.toString()
  return api.get(`/products${suffix ? `?${suffix}` : ''}`)
}

export function getProductBySlug(slug) {
  return api.get(`/products/${slug}`)
}
