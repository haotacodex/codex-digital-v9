// v9 Component
// Modes: A
// Card Tier: N/A
// Decorative: client logos, fade edges

'use client'

import { PageWrapper } from '@/components/layout/PageWrapper'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

interface TrustBarProps {
  logos: { name: string; src: string }[]
  showSteadfastCallout?: boolean
}

const logoWidths: Record<string, number> = {
  'Energy Locals': 120,
  'Steadfast': 80,
  'GME': 80,
}
const DEFAULT_WIDTH = 120

export function TrustBar({ logos, showSteadfastCallout }: TrustBarProps) {
  return (
    <section
      style={{
        background: 'var(--color-bg-light)',
        padding: 'var(--space-lg) 0 var(--space-lg)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <PageWrapper>
        <div
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <InfiniteSlider gap={64} reverse duration={55} durationOnHover={110}>
            {logos.map((logo) => {
              const w = logoWidths[logo.name] ?? DEFAULT_WIDTH
              const isSteadfast = logo.name === 'Steadfast'
              return (
                <div
                  key={logo.name}
                  style={{
                    flexShrink: 0,
                    width: isSteadfast ? w + 36 : w,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    filter: 'grayscale(100%) opacity(0.5)',
                      transition: 'filter var(--duration-base)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)'
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name + ' logo'}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    loading="lazy"
                  />
                  {isSteadfast && (
                    <span
                      style={{
                        fontSize: '9px',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        whiteSpace: 'nowrap',
                        lineHeight: 1,
                      }}
                    >
                      Preferred Provider
                    </span>
                  )}
                </div>
              )
            })}
          </InfiniteSlider>
        </div>
      </PageWrapper>
    </section>
  )
}


