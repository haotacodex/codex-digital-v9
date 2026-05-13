// v9 Component
// Modes: A
// Card Tier: N/A
// Decorative: values grid with SectionLabel
'use client'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import {
  Wrench,
  Sliders,
  UserCircle,
  ShieldCheck,
  Rocket,
  Lock,
} from 'lucide-react'

const values = [
  {
    icon: <Wrench size={24} strokeWidth={1.5} />,
    title: 'Complete solution',
    description: 'From strategy through design, development, hosting, and ongoing support — one team handles everything end-to-end.',
  },
  {
    icon: <Sliders size={24} strokeWidth={1.5} />,
    title: 'Fully customisable',
    description: 'Every build is bespoke. No templates, no themes — just custom architecture that fits your exact business requirements.',
  },
  {
    icon: <UserCircle size={24} strokeWidth={1.5} />,
    title: 'Own your customer relationship',
    description: 'No proprietary platforms or lock-in contracts. You own your data, your code, and your customer relationships.',
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    title: 'Smooth compliance',
    description: 'Enterprise-grade security and compliance built in by default. Penetration-tested, WCAG-compliant, and audit-ready.',
  },
  {
    icon: <Rocket size={24} strokeWidth={1.5} />,
    title: 'Build and launch faster',
    description: 'Senior practitioners from day one means fewer revisions, faster decisions, and a shorter path to launch.',
  },
  {
    icon: <Lock size={24} strokeWidth={1.5} />,
    title: 'Scalable and secure',
    description: '99.9% uptime SLA, daily automated backups, and infrastructure that scales with your traffic — no surprises.',
  },
]

export function ValuesSection() {
  return (
    <section
      style={{
        background: 'var(--color-bg-light)',
        padding: 'var(--space-xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <PageWrapper>
        <div
          style={{
            display: 'grid',
            alignItems: 'start',
            gap: 'var(--space-xl)',
          }}
          className="grid-cols-1 md:grid-cols-1 lg:grid-cols-[35fr_65fr]"
        >
          {/* ─── Left column: headline ─── */}
          <div>
            <SectionLabel label="OUR VALUES" />
            <h2
              style={{
                marginTop: 'var(--space-sm)',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                    color: 'var(--color-text)',
                maxWidth: '480px',
                  }}
                >
              Our values that drive everything we do.
            </h2>
              </div>

          {/* ─── Right column: 2-column values grid ─── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--space-md)',
            }}
            className="sm:grid-cols-2"
          >
            {values.map((v) => (
              <div key={v.title}>
                {/* Icon — outline style, no background */}
                <div
                  style={{
                    color: 'var(--color-primary)',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {v.icon}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginTop: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {v.title}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                    marginTop: '0.4rem',
                  }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}