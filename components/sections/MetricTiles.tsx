// v9 Component
// Modes: A
// B
// Card Tier: 3 (Utility)
// Decorative: number display
﻿import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { MetricTile } from '@/components/ui/MetricTile'
import type { Metric } from '@/lib/types'

interface MetricTilesSectionProps {
  metrics: Metric[]
  label?: string
}

export function MetricTiles({ metrics, label = 'OUTCOMES' }: MetricTilesSectionProps) {
  return (
    <section style={{ background: 'var(--color-bg-card)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <SectionLabel label={label} />
        <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap', marginTop: 'var(--space-lg)' }} className="max-md:grid max-md:grid-cols-2 max-md:gap-var(--space-md)">
          {metrics.map((m, i) => (
            <div key={i} style={{ paddingLeft: i > 0 ? 'var(--space-xl)' : '0', borderLeft: i > 0 ? '1px solid var(--color-border)' : 'none' }} className="max-md:border-l-0 max-md:pl-0">
              <MetricTile value={m.value} label={m.label} sub={m.sub} />
            </div>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}
