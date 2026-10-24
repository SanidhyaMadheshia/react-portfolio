import { experience } from "@/data/profile"
import { SectionHeader, Tag } from "@/components/primitives"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader index="02" title="Experience" kicker="Production systems and the teams behind them." />

        <ol className="relative space-y-2 md:space-y-4">
          {experience.map((job) => (
            <li
              key={job.company}
              className="reveal grid gap-3 rounded-2xl border border-transparent py-6 transition-colors duration-300 md:grid-cols-[200px_1fr] md:gap-10 md:p-8 md:hover:border-border md:hover:bg-card"
            >
              <p className="font-mono text-sm text-muted-foreground md:pt-1">{job.period}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role}
                  <span className="text-muted-foreground"> · </span>
                  <span className="text-brand">{job.company}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 leading-relaxed">
                      <span className="mt-[0.7em] size-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
