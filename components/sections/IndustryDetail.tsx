// v9 Component
// Modes: A
// B
// Card Tier: 2 (Content Card)
// Decorative: responsive grid, award ContentCard
﻿import { PageWrapper } from '@/components/layout/PageWrapper'
import { Badge } from '@/components/ui/Badge'
import { ContentCard } from '@/components/ui/ContentCard'
import type { Industry } from '@/lib/types'

interface IndustryDetailProps {
  industry: Industry
}

export function IndustryDetail({ industry }: IndustryDetailProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <h1>{industry.headline}</h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-muted)' }}>{industry.subheadline}</p>
          <p style={{ color: 'var(--color-text-muted)' }}>{industry.body}</p>
        </div>
        {industry.showAwardBlock && (
          <ContentCard title="Multi-award winning." variant="callout" interactive={false}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)', marginTop: 'var(--space-md)' }} className="md:grid-cols-[40%_60%]">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ width: '96px', height: '96px', background: 'var(--color-bg-card-dark)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: 'var(--text-caption)', fontWeight: 600 }}>W3 GOLD</div>
              <div style={{ width: '96px', height: '96px', background: 'var(--color-bg-card-dark)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: 'var(--text-caption)', fontWeight: 600 }}>DAVEY GOLD</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <Badge label="GOLD W3 AWARD &middot; GOLD DAVEY AWARD" />
                <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-sm)' }}>Gold W3 and Davey Award-winning website for Qantas Super. A custom CMS platform serving 32,000 members and $7 billion AUM, built in-house by Codex Digital.</p>
            </div>
          </div>
          </ContentCard>
        )}
      </PageWrapper>
    </section>
  )
}

