import { useEffect, useRef } from 'react'

/**
 * Returns a ref. When the element enters the viewport it gets the
 * class "revealed". Add a delay index (0–5) for stagger effects.
 */
export function useReveal(delayIndex = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Pre-set stagger delay via inline style
    el.style.transitionDelay = `${delayIndex * 0.12}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delayIndex])

  return ref
}
