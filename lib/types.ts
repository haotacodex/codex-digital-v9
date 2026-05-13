// lib/types.ts

export interface NavLink {
  label: string
  href: string
  children?: MegaMenuItem[]
}

export interface MegaMenuItem {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
  title: string
  description: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}

export interface Service {
  slug: string
  name: string
  icon: string                // filename in /public/icons/ e.g. 'website.svg'
  tagline: string             // one-line outcome for ServiceCard
  headline: string            // problem-first H1 for service page
  subheadline: string
  what: string[]              // bullet list of what we build
  tech: string[]              // technology stack items
  relatedWork: string[]       // array of CaseStudy slugs
  metaTitle: string
  metaDescription: string
}

export interface Metric {
  value: string               // e.g. '870%'
  label: string               // e.g. 'increase in enquiries'
  sub?: string                // optional context
}

export interface CaseStudy {
  slug: string
  client: string
  descriptor: string          // one-line project summary
  services: string[]          // service names (not slugs)
  industry: string
  thumbnail: string           // path in /public/images/work/
  overview: string            // 2–3 sentence paragraph
  challenge: string           // 1–2 sentences
  role: string                // Codex's role, 1–2 sentences
  metrics: Metric[]
  features: string[]          // what was built
  tech: string[]              // tech stack used
  awards?: string[]           // e.g. ['Gold W3 Award – Financial Services 2018']
  relatedWork?: string[]       // array of CaseStudy slugs for related work
  metaTitle: string
  metaDescription: string
}

export interface TeamMember {
  name: string
  role: string
  since: number               // year e.g. 2005
  bio: string
  photo: string               // path in /public/images/team/
  phone?: string
  email?: string
  linkedin?: string
}

export interface ProcessPhase {
  number: number
  name: string
  leader: 'Codex' | 'Client' | 'Both'
  description: string
  deliverable: string
}

export interface Industry {
  slug: string
  name: string
  headline: string
  subheadline: string
  body: string
  services: string[]          // relevant service names
  relatedWork: string[]       // CaseStudy slugs
  showAwardBlock: boolean     // only true for Financial Services
  metaTitle: string
  metaDescription: string
}

export interface Insight {
  slug: string
  title: string
  category: string            // e.g. 'Web Development'
  readTime: string            // e.g. '5 min read'
  publishDate: string         // ISO 8601
  excerpt: string
  image: string               // URL to featured image
  content: string             // HTML string (use dangerouslySetInnerHTML)
  metaTitle: string
  metaDescription: string
}

export interface HostingPackage {
  name: string
  price: string               // e.g. '$30/month'
  features: string[]
  recommended: boolean
  ctaLabel: string
}

export interface CtaBandProps {
  heading: string
  body?: string
  ctaLabel: string
  ctaHref: string
  microCopy?: string
}

export interface PageHeaderProps {
  breadcrumb?: string
  heading: string
  subheading?: string
}

export interface CompanyValue {
  name: string
  description: string
}

