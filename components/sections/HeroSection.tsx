// v9 Component
// Modes: A
// Card Tier: N/A (hero layout)
// Decorative: uses HeroBackground, gradient bg, HeroCards
'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { HeroBackground } from './HeroBackground'
import { HeroCards } from './HeroCards'

interface HeroSectionProps {
  heading: string
  subheading: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export function HeroSection({ heading, subheading, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #F8F9FA 0%, #EFF2F6 100%)',
        paddingTop: 'calc(64px + var(--space-2xl))',
        paddingBottom: 'var(--space-3xl)',
        overflow: 'hidden',
      }}
    >
      <HeroBackground />

      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--container-padding-x)',
          display: 'grid',
          gap: 'var(--space-xl)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
        className="grid-cols-1 lg:grid-cols-[46%_54%]"
      >
        {/* Left column: copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', maxWidth: '580px' }}>
          <SectionLabel label="DIGITAL AGENCY, NORTH SYDNEY" />
          <h1 style={{ marginTop: 'var(--space-xs)', maxWidth: '560px' }}>{heading}</h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-muted)', lineHeight: '1.65', maxWidth: '500px' }}>
            {subheading}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
            <Button variant="primary" href={primaryCta.href}>{primaryCta.label}</Button>
            <Button variant="secondary" href={secondaryCta.href}>{secondaryCta.label}</Button>
          </div>
        </div>

        {/* Right column: floating cards */}
        <div style={{ position: 'relative', padding: '0 24px' }}>
          <HeroCards />
        </div>
      </div>
    </section>
  )
}
