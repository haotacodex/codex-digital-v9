// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: dark gradient + ambient glows
'use client'
import { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { WorkCard } from '@/components/ui/WorkCard'
import { Button } from '@/components/ui/Button'
import type { CaseStudy } from '@/lib/types'

interface WorkGridProps {
  heading: string
  subheading?: string
  caseStudies: CaseStudy[]
  showFilter?: boolean
  limit?: number
  ctaLabel?: string
  ctaHref?: string
}

const filterCategories = ['All', 'Website', 'Software', 'Branding', 'Mobile', 'Campaigns']

export function WorkGrid({ heading, subheading, caseStudies, showFilter, limit, ctaLabel, ctaHref }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? caseStudies : caseStudies.filter((cs) => cs.services.some((s) => s.toLowerCase().includes(activeFilter.toLowerCase())))
  const display = limit ? filtered.slice(0, limit) : filtered

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #0F1114 0%, #12151A 100%)',
        padding: 'var(--space-xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top light leak */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(10,102,255,0.15), transparent)',
        }}
      />
      <PageWrapper>
        <SectionLabel label="SELECTED WORK" inverted />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginTop: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
          <h2 style={{ color: 'var(--color-text-inverse)' }}>{heading}</h2>
          {subheading && (
            <p style={{ color: 'rgba(248,249,250,0.65)', maxWidth: '640px', fontSize: 'var(--text-body-lg)', lineHeight: '1.6' }}>
              {subheading}
            </p>
          )}
        </div>

        {showFilter && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: 'var(--space-lg)' }}>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontSize: 'var(--text-button)',
                  padding: '8px 16px',
                  background: activeFilter === cat ? 'rgba(10,102,255,0.12)' : 'transparent',
                  border: activeFilter === cat ? '1px solid rgba(10,102,255,0.25)' : '1px solid rgba(248,249,250,0.1)',
                  borderRadius: 'var(--radius-md)',
                  color: activeFilter === cat ? 'var(--color-primary)' : 'rgba(248,249,250,0.5)',
                  cursor: 'pointer',
                  transition: 'all var(--duration-fast)',
                  fontWeight: 500,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }} className="lg:grid-cols-2">
          {display.map((cs) => (
            <WorkCard
              key={cs.slug}
              slug={cs.slug}
              client={cs.client}
              thumbnail={cs.thumbnail}
              services={cs.services}
              metric={cs.metrics[0] || { value: '', label: '' }}
              award={cs.awards ? 'W3 + Davey Gold' : undefined}
            />
          ))}
        </div>

        {ctaLabel && ctaHref && (
          <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
            <Button variant="secondary" surface="dark" blurred href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
      </PageWrapper>
    </section>
  )
}




