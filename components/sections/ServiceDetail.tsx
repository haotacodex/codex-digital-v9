// v9 Component
// Modes: A
// B
// Card Tier: 2 (Content Card)
// Decorative: two-column grid, standalone prop
import { Tag } from '@/components/ui/Tag'
import { ContentCard } from '@/components/ui/ContentCard'
import type { Service } from '@/lib/types'

interface ServiceDetailProps {
  service: Service
  /** If true, renders without the outer section wrapper (for use inside ContentLayout / multi-section pages) */
  standalone?: boolean
}

export function ServiceDetail({ service, standalone = false }: ServiceDetailProps) {
  const content = (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="lg:grid-cols-[50%_50%]">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <h2>{service.headline}</h2>
        <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-muted)' }}>{service.subheadline}</p>
        <div style={{ marginTop: 'var(--space-sm)' }}>
          <h3 style={{ fontSize: 'var(--text-h4)', marginBottom: 'var(--space-sm)' }}>What we build</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            {service.what.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '8px', color: 'var(--color-text-muted)' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: 'var(--text-body)' }}>&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: 'var(--text-h4)', marginBottom: 'var(--space-sm)' }}>Technology</h3>
        <ContentCard title="Technology Stack" variant="callout">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {service.tech.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        </ContentCard>
      </div>
    </div>
  )

  if (standalone) {
    return content
  }

  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'var(--container-padding-x)',
          paddingRight: 'var(--container-padding-x)',
        }}
      >
        {content}
      </div>
    </section>
  )
}

