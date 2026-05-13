// v9 Component
// Modes: A
// B
// Card Tier: N/A
// Decorative: light bg, breadcrumb, title, intro
﻿import { PageWrapper } from '@/components/layout/PageWrapper'

interface PageHeaderSectionProps {
  breadcrumb?: string
  heading: string
  subheading?: string
}

export function PageHeader({ breadcrumb, heading, subheading }: PageHeaderSectionProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', paddingTop: 'calc(64px + var(--space-lg))', paddingBottom: 'var(--space-lg)', borderBottom: '1px solid var(--color-border)' }}>
      <PageWrapper>
        <div style={{ maxWidth: '720px' }}>
          {breadcrumb && <p style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>{breadcrumb}</p>}
          <h1>{heading}</h1>
          {subheading && <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-muted)', marginTop: 'var(--space-sm)' }}>{subheading}</p>}
        </div>
      </PageWrapper>
    </section>
  )
}
