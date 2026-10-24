// Single source of truth for portfolio content (mirrors the resume PDF in /public).

export const profile = {
  name: "Sanidhya Madeshia",
  role: "Backend Engineer",
  tagline:
    "I build high-throughput backend systems: event-driven services, real-time infrastructure, and the reliability work that keeps them up.",
  current: "SDE Intern at Amazon Alexa",
  location: "India",
  email: "sanidhyaamazon1@gmail.com",
  resume: "/Sanidhya_Madeshia_Resume.pdf",
  links: {
    github: "https://github.com/SanidhyaMadheshia",
    linkedin: "https://www.linkedin.com/in/sanidhya-madeshia-620099293/",
    x: "https://x.com/sanidhya_eth",
  },
}

export const about = [
  "I'm a Computer Science undergraduate at IIIT Kota and a Software Development Intern on the Alexa Smart Home backend team at Amazon.",
  "Outside work I build systems to understand them end to end: a server-authoritative multiplayer backend with Kafka and Kubernetes, TTL-based real-time chat with WebRTC, and Stripe-like payments on Solana.",
]

export const stats = [
  { value: "0.76 ms", label: "tick p99 at 1,000 players" },
  { value: "1.45M", label: "replayed events, zero duplicates" },
  { value: "30+", label: "developers mentored" },
]

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  highlights: string[]
  stack: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: "Amazon — Alexa Smart Home",
    role: "Software Development Intern",
    period: "Jul 2026 – Present",
    highlights: [
      "Built recommendation-serving backend logic for a high-TPS service powering Alexa Smart Home devices.",
      "Developed the recordInteraction feature to capture and process user interactions with recommended content.",
      "Worked with Kafka and AWS SNS/SQS event and subscription flows at high TPS.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "AWS SNS/SQS"],
  },
  {
    company: "Inbotiq",
    role: "Full Stack Intern",
    period: "2024 – Present",
    highlights: [
      "Built backend services for a production AI voice bot platform, integrating STT, TTS, and LLM pipelines with webhook-based call lifecycle handling.",
      "Improved reliability with VAD (Silero) and session state management.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    company: "Codebase Club — IIIT Kota",
    role: "Coordinator & Web3 Lead",
    period: "2023 – Present",
    highlights: [
      "Led blockchain community projects, shipping dApps and smart contracts.",
      "Mentored 30+ developers and ran weekly hands-on sessions on full-stack and blockchain integration.",
    ],
    stack: ["Solidity", "Web3.js", "Ethers.js"],
  },
]

export interface Project {
  title: string
  summary: string
  metric?: { value: string; label: string }
  highlights: string[]
  stack: string[]
  github: string
  demo?: string
  period: string
}

export const projects: Project[] = [
  {
    title: "LocalArena",
    summary: "Distributed multiplayer game backend",
    period: "Oct 2026",
    metric: { value: "p99 0.76 ms", label: "tick latency, 1,000 bots / 50 matches" },
    highlights: [
      "Server-authoritative Go game server on a 20 Hz fixed tick over WebSockets.",
      "Event-driven design with Kafka, Protobuf, transactional outbox + Debezium CDC, and Kafka Streams; zero duplicate rewards across 1.45M replayed events.",
      "Kubernetes (Helm, Argo CD, OpenTofu) behind Envoy; canary, rollback, and failover drills with 0 failed requests.",
    ],
    stack: ["Go", "Kafka", "Kubernetes", "PostgreSQL", "Valkey", "Envoy"],
    github: "https://github.com/SanidhyaMadheshia/localArena",
  },
  {
    title: "TTL Chat & Voice Rooms",
    summary: "Ephemeral real-time chat, voice, and video",
    period: "Jan 2026 – Present",
    metric: { value: "P2P", label: "WebRTC mesh, server relays signaling only" },
    highlights: [
      "Go WebSocket backend with a goroutine/channel hub and per-connection reader/writer goroutines.",
      "Redis as the sole datastore for messages, presence, and TTL enforcement.",
      "Peer-to-peer WebRTC voice and video (full mesh, up to 8 users); the server relays only SDP/ICE signaling.",
    ],
    stack: ["Go", "Redis", "WebSockets", "WebRTC", "Next.js"],
    github: "https://github.com/SanidhyaMadheshia/ttl-based-chats",
    demo: "https://ttl-based-chats.vercel.app/",
  },
  {
    title: "SolanaPay",
    summary: "Stripe-like payment infrastructure for Solana",
    period: "Oct – Dec 2025",
    highlights: [
      "Hosted checkout letting Web2 apps accept Solana payments, with on-chain transaction verification.",
      "Real-time payment updates, webhooks, and idempotent APIs.",
    ],
    stack: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Redis", "Socket.io"],
    github: "https://github.com/SanidhyaMadheshia/solanaPaymentsStripe",
    demo: "https://solana-pay-stripe.vercel.app/",
  },
]

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Java", "Go", "TypeScript", "JavaScript", "Python", "C++", "C", "Rust", "Solidity"] },
  { category: "Backend & Real-Time", items: ["Spring Boot", "Go net/http", "WebSockets", "Node.js", "Express", "FastAPI", "Socket.io", "REST"] },
  { category: "Messaging & Streaming", items: ["Kafka", "Kafka Streams", "AWS SNS/SQS"] },
  { category: "Datastores", items: ["PostgreSQL", "Redis", "MongoDB"] },
  { category: "Infra & Tooling", items: ["Docker", "Kubernetes", "Helm", "Git", "CI/CD", "Vercel"] },
  { category: "Frontend & Web3", items: ["React", "Next.js", "Solana", "EVM", "Web3.js", "Ethers.js"] },
]

export const education = {
  school: "Indian Institute of Information Technology, Kota",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2023 – 2027",
}
