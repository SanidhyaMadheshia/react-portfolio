import { useEffect, useState } from "react"
import { FileText, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { profile } from "@/data/profile"

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/75 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          sanidhya<span className="text-brand">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="grid size-10 cursor-pointer place-items-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors duration-200 hover:border-foreground/40 hover:bg-secondary"
          >
            <FileText size={16} aria-hidden="true" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
