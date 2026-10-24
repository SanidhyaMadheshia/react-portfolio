import { useEffect } from "react"

/**
 * Adds `is-visible` to every `.reveal` element as it scrolls into view.
 * Content stays visible without JS; the hidden start state only applies once
 * `reveal-ready` is set on <html>, so nothing is lost if this never runs.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    root.classList.add("reveal-ready")
    const els = document.querySelectorAll<HTMLElement>(".reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible")
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    )
    els.forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove("reveal-ready")
    }
  }, [])
}
