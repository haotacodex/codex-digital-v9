// v9 Component
// Modes: A
// B
// Card Tier: N/A
// Decorative: 35fr/65fr layout, icon accent
'use client'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import {
  Shield,
  Users,
  Target,
  Heart,
  Megaphone,
  Zap,
} from 'lucide-react'
import type { CompanyValue } from '@/lib/types'

interface ValuesListProps {
  values: CompanyValue[]
}

const iconMap: Record<string, React.ReactNode> = {
  Accountability: <Shield size={28} strokeWidth={1.5} />,
  Teamwork: <Users size={28} strokeWidth={1.5} />,
  'Client-centred': <Target size={28} strokeWidth={1.5} />,
  Integrity: <Heart size={28} strokeWidth={1.5} />,
  Leadership: <Megaphone size={28} strokeWidth={1.5} />,
  Excellence: <Zap size={28} strokeWidth={1.5} />,
}

export function ValuesList({ values }: ValuesListProps) {
  return (
    <section style={{ background: 'var(--color-bg-dark)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <SectionLabel label="HOW WE WORK" />
        <h2 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-lg)', color: 'var(--color-text-inverse)' }}>
          Our values
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }} className="md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.name}
              style={{
                background: 'var(--color-bg-card-dark)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-md)',
                transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast), transform var(--duration-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10,102,255,0.35)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(10,102,255,0.10)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(10,102,255,0.12)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-sm)',
              }}>
                {iconMap[v.name] || <Zap size={28} strokeWidth={1.5} />}
              </div>
              <div style={{ fontSize: 'var(--text-body)', fontWeight: 700, marginBottom: 'var(--space-xs)', color: 'var(--color-text-inverse)' }}>
                {v.name}
              </div>
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
