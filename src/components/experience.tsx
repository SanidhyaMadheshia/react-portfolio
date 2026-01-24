
interface ExperienceItemProps {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}

function ExperienceItem({ company, role, period, description, highlights }: ExperienceItemProps) {
  return (
    <div className="flex gap-8 pb-12 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="w-px h-8 bg-border" />
        <div className="w-4 h-4 rounded-full bg-foreground my-2" />
      </div>

      <div className="flex-1 pb-8 last:pb-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{role}</h3>
            <p className="text-foreground/70">{company}</p>
          </div>
          <p className="text-sm text-muted-foreground whitespace-nowrap">{period}</p>
        </div>
        <p className="text-foreground/70 mb-4">{description}</p>
        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="text-foreground/70 flex gap-3">
              <span className="text-accent mt-1">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export function Experience() {
  const experience = [
    {
      company: 'Inbotiq',
      role: 'Full Stack Intern',
      period: '2024 – Present',
      description:
        'Worked on a production AI voice bot platform handling outbound calls and real-time conversational workflows.',
      highlights: [
        'Built backend services integrating STT, TTS, and LLM-driven conversation pipelines.',
        'Implemented webhook-based event systems for call lifecycle management, retries, and campaign execution.',
        'Improved system reliability using VAD (Silero), session state management, and scalable APIs.',
      ],
    },
    {
      company: 'Codebase Club — IIIT Kota',
      role: 'Coordinator & Web3 Lead',
      period: '2023 – Present',
      description:
        'Led blockchain-focused community projects and mentored developers on production-grade engineering practices.',
      highlights: [
        'Led and shipped blockchain projects deploying smart contracts and dApps using Solidity, Web3.js, and Ethers.js.',
        'Mentored 30+ developers on smart contract deployment, Git workflows, and collaborative development.',
        'Organized weekly hands-on sessions focused on full-stack and blockchain integration.',
      ],
    },
  ]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Production systems, ownership, and real-world engineering experience.
          </p>
        </div>

        <div className="space-y-2">
          {experience.map((exp) => (
            <ExperienceItem key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
