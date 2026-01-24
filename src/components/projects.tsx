
// import { Button } from '@/components/ui/button'

import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

function ProjectCard({ title, description, technologies, github, demo }: ProjectCardProps) {
  return (
    <div className="border border-border rounded-lg p-8 hover:border-foreground/50 transition-colors">
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70 mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded border border-accent/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <ExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  const projects = [
    {
      title: 'TTL-Based Ephemeral Chat & Voice Rooms',
      description:
        'Built a real-time chat platform where all messages and room state self-destruct after a fixed TTL. Implemented a channel-based WebSocket architecture in Go using ingress/egress pipelines and goroutines for concurrent room handling, with Redis enforcing irreversible data expiration.',
      technologies: [
        'Go',
        'net/http',
        'Gorilla WebSocket',
        'Redis',
        'WebSockets',
        'TypeScript',
        'Next.js',
      ],
      github: 'https://github.com/SanidhyaMadheshia/ttl-based-chats',
      demo: 'https://ttl-based-chats.vercel.app/',
    },
    {
      title: 'SolanaPay – Stripe-like Payments for Solana',
      description:
        'Built a Stripe-inspired Web3 payment infrastructure enabling Web2 applications to accept Solana payments via simple APIs. Implemented hosted checkout, on-chain transaction verification, real-time payment status via webhooks and WebSockets, and idempotent backend workflows.',
      technologies: [
        'TypeScript',
        'Node.js',
        'Express',
        'Solana',
        'Prisma',
        'PostgreSQL',
        'Redis',
        'Socket.io',
        'Web3',
      ],
      github: 'https://github.com/SanidhyaMadheshia/solanaPaymentsStripe',
      demo: 'https://solanapay.sanidhyamadeshia.me/docs',
    },
  ]


  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Systems that handle scale, complexity, and real production workloads.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
