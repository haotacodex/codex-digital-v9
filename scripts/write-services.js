const fs = require('fs')

const code = `'use client'

import Link from 'next/link'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Service } from '@/lib/types'

interface ServicesStripProps {
  heading: string
  services: Service[]
}

const iconColors: Record<string, string> = {
  'website.svg': '#0A66FF',
  'design.svg': '#FF6D00',
  'branding.svg': '#E91E63',
  'mobile.svg': '#00BFA5',
  'software.svg': '#7C4DFF',
  'campaigns.svg': '#FF1744',
  'hosting.svg': '#2979FF',
}

export function ServicesStrip({ heading, services }: ServicesStripProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <SectionLabel label="WHAT WE BUILD" />
        <h2 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>{heading}</h2>

        <div style={{ display: 'grid', gap: 'var(--space-md)' }} className="grid-cols-1 md:grid-cols-2">
          {services.map((service) => {
            const color = iconColors[service.icon] || 'var(--color-primary)'
            const techTags = service.tech.slice(0, 3)
            return (
              <Link key={service.slug} href={\`/services/\${service.slug}\`} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-sm)',
                    transition: 'transform 250ms ease, box-shadow 250ms ease',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Top row: icon pill + service name */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-lg)',
                      background: color + '14',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <img src={\`/icons/\${service.icon}\`} alt="" width="20" height="20" style={{ display: 'block' }} />
                    </span>
                    <div style={{ fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--color-text)' }}>
                      {service.name}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {service.subheadline}
                  </p>

                  {/* Footer: tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                    {techTags.map((tech) => (
                      <span key={tech} style={{
                        fontSize: 'var(--text-caption)',
                        color: 'var(--color-text-muted)',
                        background: 'var(--color-bg-light)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '999px',
                        padding: '4px 12px',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </PageWrapper>
    </section>
  )
}
`

fs.writeFileSync('components/sections/ServicesStrip.tsx', code, 'utf8')
console.log('ServicesStrip.tsx written')
