// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: work card grid
﻿import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { WorkCard } from '@/components/ui/WorkCard'
import type { CaseStudy } from '@/lib/types'

interface RelatedWorkProps {
  slugs: string[]
  allCaseStudies: CaseStudy[]
  label?: string
}

export function RelatedWork({ slugs, allCaseStudies, label = 'RELATED WORK' }: RelatedWorkProps) {
  const related = allCaseStudies.filter((cs) => slugs.includes(cs.slug))
  if (related.length === 0) return null

  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <SectionLabel label={label} />
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(related.length, 3)}, 1fr)`, gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }} className="max-md:grid-cols-1">
          {related.map((cs) => (
            <WorkCard key={cs.slug} slug={cs.slug} client={cs.client} thumbnail={cs.thumbnail} services={cs.services} metric={cs.metrics[0] || { value: '', label: '' }} />
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
