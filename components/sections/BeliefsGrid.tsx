// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: belief cards grid
'use client'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PageWrapper } from '@/components/layout/PageWrapper'
import {
  Shield,
  Users,
  HeartHandshake,
  MessageSquare,
  BarChart3,
  Award,
} from 'lucide-react'

const beliefs = [
  {
    icon: <Shield size={18} strokeWidth={1.5} />,
    title: 'Accountability',
    body: 'One point of contact from first meeting to final delivery. That accountability is what makes our work consistent - and what makes our clients stay.',
  },
  {
    icon: <Users size={18} strokeWidth={1.5} />,
    title: 'In-house delivery',
    body: 'We do not outsource to third parties, use offshore contractors, or hand work to junior staff. Every project is led by senior practitioners.',
  },
  {
    icon: <HeartHandshake size={18} strokeWidth={1.5} />,
    title: 'Long-term relationships',
    body: 'Most of our clients have been with us for years - not because of contracts, but because the work keeps working.',
  },
  {
    icon: <MessageSquare size={18} strokeWidth={1.5} />,
    title: 'Straight talk',
    body: 'We tell clients what they need to hear, not what they want to hear. Clear timelines, honest estimates, and no surprises.',
  },
  {
    icon: <BarChart3 size={18} strokeWidth={1.5} />,
    title: 'Measurable outcomes',
    body: 'Digital work should be accountable. That means clear KPIs, performance data, and outcomes you can present to your board.',
  },
  {
    icon: <Award size={18} strokeWidth={1.5} />,
    title: 'Senior-only teams',
    body: "Every project is led by practitioners with 15-20 years' experience. Strategy, design, and development by the same accountable team.",
  },
]

export function BeliefsGrid() {
  return (
    <section style={{ background: '#FFFFFF', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <SectionLabel label="WHAT WE BELIEVE" />
        <h2 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
          Principles that guide every project
        </h2>
        <div style={{ display: 'grid', gap: 'var(--space-md)' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b) => (
            <div
              key={b.title}
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-sm)',
                transition: 'transform 250ms ease, box-shadow 250ms ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top row: icon + title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(10,102,255,0.08)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {b.icon}
                </span>
                <div style={{ fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--color-text)' }}>
                  {b.title}
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
