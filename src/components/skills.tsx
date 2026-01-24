
interface SkillGroupProps {
  category: string
  skills: string[]
}

function SkillGroup({ category, skills }: SkillGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-card border border-border rounded text-foreground text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const skillGroups = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'C++', 'Solidity'],
    },
    {
      category: 'Backend & Real-Time',
      skills: [
        'Go (net/http)',
        'WebSockets',
        'Node.js',
        'Express',
        'REST APIs',
        'Socket.io',
      ],
    },
    {
      category: 'Datastores',
      skills: ['PostgreSQL', 'Redis', 'MongoDB'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js'],
    },
    {
      category: 'Blockchain',
      skills: ['Solana', 'EVM Smart Contracts', 'Web3.js', 'Ethers.js'],
    },
    {
      category: 'Infra & Tooling',
      skills: ['Git', 'Docker', 'CI/CD', 'Vercel'],
    },
  ]


  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground">
            Curated tools and technologies. Focused on shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
