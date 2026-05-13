// v9 Component
// Modes: A
// B
// Card Tier: N/A (CTA section)
// Decorative: gradient bg + ambient glows in A; flat bg in B/C
'use client'

import { PageWrapper } from '@/components/layout/PageWrapper'
import { Button } from '@/components/ui/Button'
import { useMode } from '@/components/layout/ModeContext'

interface CtaBandSectionProps {
  heading: string
  body?: string
  ctaLabel: string
  ctaHref: string
  microCopy?: string
}

export function CtaBand({ heading, body, ctaLabel, ctaHref, microCopy }: CtaBandSectionProps) {
  const mode = useMode()
  const isMarketing = mode === 'marketing'

  return (
    <section
      style={{
        background: isMarketing
          ? 'linear-gradient(135deg, #0C0E12 0%, #12151A 40%, #0F1114 100%)'
          : 'var(--color-bg-dark)',
        padding: 'var(--space-xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top light line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(10,102,255,0.12), transparent)',
        }}
      />

      {/* Ambient glows — Mode A only */}
      {isMarketing && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '-10%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(10,102,255,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-50%',
              right: '-15%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,109,0,0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      <PageWrapper>
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h2 style={{ color: 'var(--color-text-inverse)' }}>{heading}</h2>
          {body && (
            <p style={{ color: 'rgba(248,249,250,0.7)', fontSize: 'var(--text-body-lg)', lineHeight: '1.65', maxWidth: '560px', margin: '0 auto' }}>
              {body}
            </p>
          )}
          <div style={{ marginTop: 'var(--space-xs)' }}>
            <Button variant="primary" surface="dark" href={ctaHref}>{ctaLabel}</Button>
          </div>
          {microCopy && (
            <p style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)', marginTop: 'var(--space-xs)', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5' }}>
              {microCopy}
            </p>
          )}
        </div>
      </PageWrapper>
    </section>
  )
}
