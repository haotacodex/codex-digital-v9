// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: industry card grid
'use client'
import Link from 'next/link'
import type { Industry } from '@/lib/types'

interface IndustryGridProps {
  industries: Industry[]
}

export function IndustryGrid({ industries }: IndustryGridProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }} className="md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <Link key={industry.slug} href={`/industries/${industry.slug}`} style={{ textDecoration: 'none' }}>
          <div
            style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-md)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
              transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast), transform var(--duration-fast)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)'
              e.currentTarget.style.boxShadow = 'var(--shadow-md)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--color-text)' }}>{industry.name}</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-body)', lineHeight: 1.6 }}>{industry.subheadline}</p>
            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-sm)', fontSize: 'var(--text-caption)', color: 'var(--color-primary)', fontWeight: 500 }}>Learn more →</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
