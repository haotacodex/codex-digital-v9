const fs = require('fs')

const code = `'use client'

import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { siteConfig } from '@/lib/config'

interface TrustBarProps {
  logos: { name: string; src: string }[]
  showSteadfastCallout?: boolean
}

// Uniform width for all logos — aligns them cleanly in the row
const LOGO_WIDTH = 120

export function TrustBar({ logos, showSteadfastCallout }: TrustBarProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-lg) 0', borderTop: '1px solid var(--color-border)' }}>
      <PageWrapper>
        <SectionLabel label="TRUSTED BY" />

        <h2
          style={{
            fontSize: 'clamp(22px, 2.8vw, 32px)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            color: 'var(--color-text)',
            marginTop: 'var(--space-md)',
            marginBottom: 'var(--space-lg)',
          }}
        >
          <span style={{ color: 'var(--color-text-muted)' }}>Partnerships built on</span>{' '}
          <span style={{ fontWeight: 700 }}>results, not promises.</span>
        </h2>

        <div
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <InfiniteSlider
            gap={64}
            reverse
            duration={55}
            durationOnHover={110}
          >
            {logos.map((logo) => {
              const isSteadfast = logo.name === 'Steadfast'
              return (
                <div
                  key={logo.name}
                  style={{
                    flexShrink: 0,
                    width: LOGO_WIDTH,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: 'grayscale(100%) opacity(0.5)',
                    transition: 'filter var(--duration-base)',
                    cursor: 'default',
                    transform: isSteadfast ? 'translateY(-35%)' : undefined,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)' }}
                >
                  <img
                    src={logo.src}
                    alt={\`\${logo.name} logo\`}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
              )
            })}
          </InfiniteSlider>
        </div>

        {showSteadfastCallout && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 20px',
              marginTop: 'var(--space-md)',
              background: 'var(--color-bg-card)',
            }}
          >
            <img
              src="/images/clients/steadfast.svg"
              alt="Steadfast Group"
              style={{ width: LOGO_WIDTH, height: 'auto', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.6)' }}
              loading="lazy"
            />
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
              {siteConfig.steadfastNote}
            </p>
          </div>
        )}
      </PageWrapper>
    </section>
  )
}
`

fs.writeFileSync('components/sections/TrustBar.tsx', code, 'utf8')
console.log('TrustBar.tsx written')
