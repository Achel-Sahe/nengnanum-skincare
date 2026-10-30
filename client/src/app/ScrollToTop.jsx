import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const target = hash ? document.querySelector(hash) : null
      const scrollBehavior = document.documentElement.style.scrollBehavior

      document.documentElement.style.scrollBehavior = 'auto'
      if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' })
      else if (!hash) window.scrollTo(0, 0)

      window.requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = scrollBehavior
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, search, hash])

  return null
}
