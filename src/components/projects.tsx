import { ArrowUpRight, Github } from "lucide-react"
import { projects, type Project } from "@/data/profile"
import { SectionHeader, Tag } from "@/components/primitives"

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`reveal group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-2xl hover:shadow-black/5 md:p-8 dark:hover:shadow-black/50 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* accent hairline that lights up on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-muted-foreground">{project.period}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-muted-foreground">{project.summary}</p>
        </div>
        {featured && project.metric && (
          <div className="hidden shrink-0 rounded-xl border border-border bg-secondary/50 px-4 py-3 text-right sm:block">
            <p className="font-mono text-lg font-semibold text-brand">{project.metric.value}</p>
            <p className="max-w-[180px] text-xs text-muted-foreground">{project.metric.label}</p>
          </div>
        )}
      </div>

      {project.metric && (
        <p className={`mt-4 font-mono text-sm ${featured ? "sm:hidden" : ""}`}>
          <span className="font-semibold text-brand">{project.metric.value}</span>
          <span className="text-muted-foreground"> · {project.metric.label}</span>
        </p>
      )}

      <ul className="mt-6 space-y-2 text-muted-foreground">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 leading-relaxed">
            <span className="mt-[0.7em] size-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-auto flex gap-2 pt-8">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors duration-200 hover:bg-secondary"
        >
          <Github size={16} aria-hidden="true" />
          Source<span className="sr-only"> code for {project.title}</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
          >
            Live demo<span className="sr-only"> of {project.title}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader index="03" title="Projects" kicker="Systems built to be measured, broken, and fixed." />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
