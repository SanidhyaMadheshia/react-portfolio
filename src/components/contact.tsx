import { ArrowUpRight } from "lucide-react"
import { profile } from "@/data/profile"
import { SocialLinks } from "@/components/primitives"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-16 md:py-24">
          <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">05 / Contact</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Let's build something that scales.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Open to backend and infrastructure roles. The fastest way to reach me is email.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex h-12 items-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
            >
              {profile.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 pb-10 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Tailwind CSS &amp; three.js</p>
      </footer>
    </section>
  )
}
