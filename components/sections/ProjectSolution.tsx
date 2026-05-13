// v9 Component
// Modes: A
// B
// Card Tier: 2 (Content Card)
// Decorative: features/tech/awards with ContentCard
﻿import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { ContentCard } from '@/components/ui/ContentCard'

interface ProjectSolutionProps {
  features: string[]
  tech: string[]
  awards?: string[]
}

export function ProjectSolution({ features, tech, awards }: ProjectSolutionProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="lg:grid-cols-2">
          <div>
            <ContentCard title="WHAT WE BUILT" variant="callout" interactive={false}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'var(--space-lg)' }}>
              {features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px', color: 'var(--color-text-muted)' }}>
                  <span style={{ color: 'var(--color-primary)' }}>&bull;</span>
                  {f}
                </li>
              ))}
            </ul>
          </ContentCard>
            </div>
          <div>
            <ContentCard title="TECHNOLOGY" variant="default" interactive={false}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'var(--space-lg)' }}>
                {tech.map((t) => (
                  <Tag key={t} label={t} />
                  ))}
                </div>
          </ContentCard>
            {awards && awards.length > 0 && (
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <ContentCard title="AWARDS" variant="note" interactive={false}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'var(--space-sm)' }}>
                  {awards.map((a, i) => (
                    <div key={i} style={{ fontSize: 'var(--text-body)', fontWeight: 600 }}>{a}</div>
                  ))}
              </div>
              </ContentCard>
              </div>
            )}
        </div>
        </div>
      </PageWrapper>
    </section>
  )
}

