import { skills } from "@/data/profile"
import { SectionHeader } from "@/components/primitives"

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader index="04" title="Skills" kicker="Tools I reach for." />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="reveal bg-card p-6 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((s) => (
                  <li key={s} className="text-[15px] font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
