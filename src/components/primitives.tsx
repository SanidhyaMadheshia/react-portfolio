import type { ReactNode } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/data/profile"

/** X (Twitter) mark; lucide's `X` icon is a close glyph, not the logo. */
export function XLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function SectionHeader({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <div className="reveal mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
        {index} / {title}
      </p>
      {kicker && (
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {kicker}
        </h2>
      )}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}

const socials = [
  { href: profile.links.github, label: "GitHub", icon: <Github size={18} aria-hidden="true" /> },
  { href: profile.links.linkedin, label: "LinkedIn", icon: <Linkedin size={18} aria-hidden="true" /> },
  { href: profile.links.x, label: "X (Twitter)", icon: <XLogo size={16} /> },
  { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={18} aria-hidden="true" /> },
]

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-1">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            title={s.label}
            {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid size-11 place-items-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
          >
            {s.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
