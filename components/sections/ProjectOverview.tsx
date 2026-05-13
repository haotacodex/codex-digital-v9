// v9 Component
// Modes: A
// B
// Card Tier: 2 (Content Card)
// Decorative: challenge/role with ContentCard
﻿import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContentCard } from '@/components/ui/ContentCard'

interface ProjectOverviewProps {
  overview: string
  challenge: string
  role: string
}

export function ProjectOverview({ overview, challenge, role }: ProjectOverviewProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="lg:grid-cols-[40%_60%]">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <ContentCard title="The challenge" variant="note" interactive={false}>
            <p style={{ color: 'var(--color-text-muted)' }}>{challenge}</p>
            <h3 style={{ fontSize: 'var(--text-h4)', marginTop: 'var(--space-md)' }}>Codex's role</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>{role}</p>
            </ContentCard>
          </div>
          <div>
            <ContentCard title="Overview" variant="callout" interactive={false}>
            <p style={{ color: 'var(--color-text-muted)' }}>{overview}</p>
            </ContentCard>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}

