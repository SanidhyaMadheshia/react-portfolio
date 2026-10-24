import { lazy, Suspense } from "react"
import { ArrowDownRight, Download } from "lucide-react"
import { profile } from "@/data/profile"
import { SocialLinks } from "@/components/primitives"

const HeroScene = lazy(() => import("@/components/hero-scene"))

// WebGL check so devices without it get a clean layout instead of a broken canvas.
const hasWebGL = (() => {
  try {
    const c = document.createElement("canvas")
    return !!(c.getContext("webgl2") || c.getContext("webgl"))
  } catch {
    return false
  }
})()

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-center gap-8 px-6 pb-16 pt-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:pt-16">
        <div className="relative z-10 min-w-0">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.current}
          </p>

          <h1 className="reveal mt-6 text-5xl font-semibold tracking-tighter text-balance sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="reveal mt-3 text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl">
            {profile.role} <span className="text-brand">/</span> Distributed &amp; Real-Time Systems
          </p>
          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
            >
              View projects
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              download="Sanidhya_Madeshia_Resume.pdf"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium transition-colors duration-200 hover:border-foreground/40 hover:bg-secondary"
            >
              <Download size={16} aria-hidden="true" />
              Download resume
            </a>
          </div>

          <div className="reveal mt-8 -ml-3">
            <SocialLinks />
          </div>
        </div>

        <div className="relative -mx-6 h-[340px] sm:h-[440px] lg:mx-0 lg:h-[560px]">
          {/* soft accent glow behind the mesh */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 m-auto size-2/3 rounded-full bg-brand/10 blur-3xl"
            aria-hidden="true"
          />
          {hasWebGL && (
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          )}
        </div>
      </div>
    </section>
  )
}
