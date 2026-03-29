// lib/projects-data.ts

export interface Project {
  id: string
  title: string
  period: string
  category: 'AI/ML' | 'Enterprise' | 'AIOps' | 'Healthcare' | 'Blockchain' | 'DevTools'
  description: string
  technologies: string[]
  accomplishments: string[]
  outcome: string
  trustFields?: {
    impact?: string
    reliability?: string
    automation?: string
  }
}

export const projects: Project[] = [
  // ── AI / ML ──────────────────────────────────────────────
  {
    id: 'video-subtitling',
    title: 'Video Subtitling — Python + Whisper',
    period: 'SEP 2025 – DEC 2025',
    category: 'AI/ML',
    description:
      'Automated multilingual video subtitling pipeline powered by OpenAI Whisper. Ingests raw video, transcribes audio, generates time-coded SRT files, and overlays burnt-in captions — cutting manual subtitle turnaround from days to minutes.',
    technologies: ['Python', 'OpenAI Whisper', 'FFmpeg', 'FastAPI', 'Docker'],
    accomplishments: [
      'Built end-to-end pipeline: upload → transcription → SRT generation → burnt-in captions',
      'Achieved 95%+ transcription accuracy across English, Hindi, and Telugu',
      'Reduced subtitle delivery time from 3 days to under 30 minutes per video',
    ],
    outcome: '90 % faster subtitle delivery with near-human accuracy.',
    trustFields: {
      impact: '90 % time reduction',
      automation: 'Fully automated pipeline',
    },
  },
  {
    id: 'enterprise-ai-chatbot',
    title: 'AI Chatbot for Enterprise Service Requests',
    period: 'JUN 2025 – SEP 2025',
    category: 'AI/ML',
    description:
      'Internal AI-powered chatbot that triages employee service requests — IT tickets, HR queries, and facilities asks — using LLM-based intent classification and RAG over company knowledge bases.',
    technologies: ['Python', 'LangChain', 'Azure OpenAI', 'React', '.NET Core API', 'Azure Cognitive Search'],
    accomplishments: [
      'Integrated RAG pipeline over 12 k+ internal knowledge-base articles',
      'Reduced L1 support ticket volume by 40 % in the first quarter',
      'Built admin dashboard for monitoring chatbot accuracy and escalation rates',
    ],
    outcome: '40 % fewer L1 support tickets within 90 days of launch.',
    trustFields: {
      impact: '40 % ticket deflection',
      reliability: '99.5 % uptime SLA',
      automation: 'Auto-triage & routing',
    },
  },
  {
    id: 'agentic-gate-pass',
    title: 'Agentic Gate Pass Management',
    period: 'MAR 2025 – JUN 2025',
    category: 'AI/ML',
    description:
      'Proof-of-concept agentic system for automated visitor and material gate-pass workflows. Uses LLM agents to validate requests, cross-check security policies, and auto-approve low-risk passes — with human-in-the-loop escalation for exceptions.',
    technologies: ['Python', 'CrewAI', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
    accomplishments: [
      'Designed multi-agent architecture: validator, policy-checker, approver, notifier',
      'Auto-approved 65 % of routine gate-pass requests without human intervention',
      'Built real-time audit trail and compliance reporting dashboard',
    ],
    outcome: '65 % of gate passes auto-approved — security team focuses on exceptions only.',
    trustFields: {
      impact: '65 % auto-approval rate',
      reliability: 'Full audit trail',
      automation: 'Agentic multi-step workflow',
    },
  },

  // ── AIOps ────────────────────────────────────────────────
  {
    id: 'aiops-monitoring',
    title: 'AIOps Ops Monitoring — Open-Source Stack',
    period: 'JAN 2025 – MAR 2025',
    category: 'AIOps',
    description:
      'End-to-end AIOps monitoring platform built on open-source tooling. Collects metrics, logs, and traces from distributed services, applies anomaly detection, and auto-remediates common incidents — reducing MTTR across production environments.',
    technologies: ['Prometheus', 'Grafana', 'Loki', 'Python', 'Scikit-learn', 'Ansible', 'Docker'],
    accomplishments: [
      'Deployed observability stack covering 200+ microservices and 50+ VMs',
      'Trained anomaly-detection models that cut false-positive alerts by 60 %',
      'Automated 12 common remediation playbooks via Ansible runbooks',
    ],
    outcome: '45 % MTTR reduction and 60 % fewer false-positive alerts.',
    trustFields: {
      impact: '45 % faster incident resolution',
      reliability: '200+ services monitored',
      automation: '12 auto-remediation playbooks',
    },
  },

  // ── Healthcare ───────────────────────────────────────────
  {
    id: 'hospital-click-360',
    title: 'Hospital Click 360 — Design + MVP',
    period: 'OCT 2024 – JAN 2025',
    category: 'Healthcare',
    description:
      'End-to-end hospital management MVP covering patient registration, appointment scheduling, billing, pharmacy, and lab modules. Designed for mid-size hospitals in India to digitise paper-based workflows.',
    technologies: ['.NET Core', 'React', 'SQL Server', 'Azure App Service', 'Tailwind CSS'],
    accomplishments: [
      'Delivered full UX/UI design system and clickable prototype in 4 weeks',
      'Built MVP with 5 core modules: registration, appointments, billing, pharmacy, lab',
      'Reduced average patient check-in time from 12 min to under 3 min in pilot',
    ],
    outcome: '75 % faster patient check-in and end-to-end paperless workflow.',
    trustFields: {
      impact: '75 % check-in time reduction',
      reliability: 'HIPAA-aligned data handling',
      automation: 'Automated billing & lab integration',
    },
  },

  // ── Blockchain / FinTech ─────────────────────────────────
  {
    id: 'crypto-converter',
    title: 'CryptoConverter',
    period: 'JAN 2024 – JAN 2025',
    category: 'Blockchain',
    description:
      'Greenfield crypto coin sales and purchase application enabling end users to buy/sell crypto coins and convert to local currency with real-time exchange rates and bank-grade security.',
    technologies: ['.NET Core', 'Azure', 'React', 'Microservices', 'Azure SQL'],
    accomplishments: [
      'Integrated blockchain technology for secure, auditable transactions',
      'Real-time data visualisation and automated currency conversion',
      'Bank API integration for instant local-currency transfers',
    ],
    outcome: 'Processed 10 k+ transactions in first 6 months with zero security incidents.',
    trustFields: {
      impact: '10 k+ secure transactions',
      reliability: 'Zero security incidents',
    },
  },

  // ── Enterprise ───────────────────────────────────────────
  {
    id: 'billing-engine',
    title: 'Billing Engine',
    period: 'DEC 2022 – DEC 2023',
    category: 'Enterprise',
    description:
      'Infrastructure billing system that collects VM utilisation data across cloud and on-prem environments, processes metered usage, and generates accurate invoices for internal charge-back.',
    technologies: ['C#.NET', 'AWS', 'Microservices', 'RDS', 'MSSQL'],
    accomplishments: [
      'Designed complete billing pipeline from VM telemetry to invoice generation',
      'Improved application stability — reduced P1 incidents by 70 %',
      'Automated build and release pipeline for bi-weekly deployments',
    ],
    outcome: '70 % reduction in billing-related P1 incidents.',
    trustFields: {
      impact: '70 % fewer P1 incidents',
      reliability: 'Bi-weekly automated releases',
    },
  },
  {
    id: 'enterprise-self-serve',
    title: 'Enterprise Self-Serve Portal',
    period: 'SEP 2018 – OCT 2022',
    category: 'Enterprise',
    description:
      'Integrated business-administration portal for a major telecom company — managing accounts, service provisioning, and self-serve workflows for enterprise customers.',
    technologies: ['MVC5', 'C#', 'React', 'Redis', 'Hangfire'],
    accomplishments: [
      '24/7 production support with proactive monitoring across 15+ services',
      'Developed automation scripts that cut support-team workload by 35 %',
      'Led proactive issue identification — resolved outages before customer impact',
    ],
    outcome: '35 % support workload reduction through automation and proactive monitoring.',
    trustFields: {
      impact: '35 % workload reduction',
      reliability: '24/7 uptime',
      automation: 'Self-healing monitoring scripts',
    },
  },

  // ── DevTools ─────────────────────────────────────────────
  {
    id: 'vibe-coder',
    title: 'Vibe Coder',
    period: 'MAR 2025 – JUN 2025',
    category: 'DevTools',
    description:
      'Creative coding playground and deployment pipeline for interactive web experiences — built to prototype visualisations, generative art, and micro-interactions quickly.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Three.js'],
    accomplishments: [
      'Built reusable component library for rapid prototyping',
      'Implemented server-side rendering and optimised bundle sizes',
      'Deployed CI/CD pipeline for instant preview environments on each PR',
    ],
    outcome: '3× faster prototyping cycle for creative web experiments.',
    trustFields: {
      impact: '3× prototyping speed',
      automation: 'PR-level preview deploys',
    },
  },
]

/** Unique category list derived from project data */
export const projectCategories = Array.from(new Set(projects.map((p) => p.category)))

/** Category badge colour mapping */
export const categoryColors: Record<string, { bg: string; text: string }> = {
  'AI/ML': { bg: 'bg-purple-100', text: 'text-purple-700' },
  Enterprise: { bg: 'bg-blue-100', text: 'text-blue-700' },
  AIOps: { bg: 'bg-amber-100', text: 'text-amber-700' },
  Healthcare: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  Blockchain: { bg: 'bg-orange-100', text: 'text-orange-700' },
  DevTools: { bg: 'bg-cyan-100', text: 'text-cyan-700' },
}
