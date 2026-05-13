// v9 Component
// Modes: B
// Card Tier: 2 (Content Card)
// Decorative: clean, minimal, content-first
'use client'
import { useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { InsightCard } from '@/components/ui/InsightCard'
import type { Insight } from '@/lib/types'

interface InsightGridProps {
  insights: Insight[]
  /** v9 mode: 'marketing' (Mode A – Tier 1 cards) or 'content' (Mode B – Tier 2 cards) */
  mode?: 'marketing' | 'content'
}

export function InsightGrid({ insights, mode = 'marketing' }: InsightGridProps) {
  const categories = ['All', ...Array.from(new Set(insights.map((i) => i.category)))]
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? insights : insights.filter((i) => i.category === active)

  return (
    <section style={{ background: 'var(--color-surface-alt)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: 'var(--space-lg)' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontSize: 'var(--text-button)',
                padding: '8px 0',
                background: 'none',
                border: 'none',
                borderBottom: active === cat ? '2px solid var(--color-primary)' : '2px solid transparent',
                color: active === cat ? 'var(--color-primary)' : 'var(--color-text-muted)',
                cursor: 'pointer',
                transition: 'color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gap: 'var(--space-md)' }} className="grid-cols-1 md:grid-cols-2">
          {filtered.map((insight) => (
            <InsightCard
              key={insight.slug}
              slug={insight.slug}
              title={insight.title}
              category={insight.category}
              readTime={insight.readTime}
              publishDate={insight.publishDate}
              excerpt={insight.excerpt}
              image={insight.image}
            />
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
