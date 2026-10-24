import { useRef, type PointerEvent, type ReactNode } from "react"
import { GraduationCap, MapPin } from "lucide-react"
import profileImage from "@/assets/profile.webp"
import { about, education, profile, stats } from "@/data/profile"
import { SectionHeader } from "@/components/primitives"

// Gentle 3D tilt on pointer hover; skipped for touch and reduced-motion users.
function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = ""
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="transition-transform duration-300 ease-out will-change-transform"
    >
      {children}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader index="01" title="About" kicker="Backend engineer who measures before he claims." />

        <div className="grid gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <div className="reveal mx-auto w-full max-w-[320px]">
            <TiltCard>
              <figure className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl shadow-black/5 dark:shadow-black/40">
                <img
                  src={profileImage}
                  alt="Portrait of Sanidhya Madeshia"
                  width={900}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full rounded-xl object-cover"
                />
                <figcaption className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-xs text-muted-foreground">
                  <span>{profile.name}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} aria-hidden="true" />
                    {profile.location}
                  </span>
                </figcaption>
              </figure>
            </TiltCard>
          </div>

          <div className="flex flex-col justify-center">
            <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="reveal mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col bg-card p-5">
                  <dt className="text-sm text-muted-foreground">{s.label}</dt>
                  <dd className="order-first mb-1 font-mono text-2xl font-semibold tracking-tight">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="reveal mt-8 flex items-start gap-3 text-sm">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
              <p>
                <span className="font-medium text-foreground">{education.school}</span>
                <span className="block text-muted-foreground">
                  {education.degree} · {education.period}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
