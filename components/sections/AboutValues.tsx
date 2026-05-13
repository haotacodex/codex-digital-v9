// v9 Component
// Modes: A
// B
// Card Tier: N/A
// Decorative: values list, icon accent
'use client'
import { PageWrapper } from '@/components/layout/PageWrapper'
import {
  Wrench,
  Sliders,
  Handshake,
  Shield,
  Rocket,
  Lock,
} from 'lucide-react'
import type { CompanyValue } from '@/lib/types'

interface AboutValuesProps {
  values: CompanyValue[]
}

const valueIcons: Record<string, React.ReactNode> = {
  'Complete solution': <Wrench size={24} strokeWidth={1.8} />,
  'Fully customisable': <Sliders size={24} strokeWidth={1.8} />,
  'Own your customer relationship': <Handshake size={24} strokeWidth={1.8} />,
  'Smooth compliance': <Shield size={24} strokeWidth={1.8} />,
  'Build and launch faster': <Rocket size={24} strokeWidth={1.8} />,
  'Scalable and secure': <Lock size={24} strokeWidth={1.8} />,
}

const fallbackIcon = <Wrench size={24} strokeWidth={1.8} />

export function AboutValues({ values }: AboutValuesProps) {
  return (
    <section style={{ background: '#f0f7f4' }}>
      <PageWrapper>
        <div className="flex flex-col lg:flex-row lg:gap-16" style={{ padding: 'var(--space-xl) 0' }}>
          {/* Left column — headline + decorative illustration */}
          <div style={{ flex: '0 0 35%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <h2
              style={{
                fontSize: '2.75rem',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#1a3c34',
                maxWidth: '380px',
              }}
            >
              Our values that drive everything we do.
            </h2>

            {/* Decorative isometric illustration anchored to bottom-left, bleeding out */}
            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)', position: 'relative', left: '-40px', bottom: '-40px', overflow: 'hidden' }}>
              <svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Isometric cube-like shape */}
                <path d="M120 10 L210 60 L120 110 L30 60 Z" fill="#d4e8e0" stroke="#b8d4ca" strokeWidth="1.5" />
                <path d="M120 110 L210 60 L210 140 L120 190 Z" fill="#c6ddd4" stroke="#b8d4ca" strokeWidth="1.5" />
                <path d="M120 110 L30 60 L30 140 L120 190 Z" fill="#daede6" stroke="#b8d4ca" strokeWidth="1.5" />
                {/* Small accent cube */}
                <path d="M160 80 L190 95 L160 110 L130 95 Z" fill="#a3cbbd" stroke="#8fb8a8" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Right column — values grid */}
          <div style={{ flex: '0 0 60%', marginTop: 'var(--space-lg)' }} className="lg:mt-0">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 3rem' }} className="max-sm:grid-cols-1">
              {values.map((v) => (
                <div key={v.name}>
                  <div style={{ color: '#1a3c34' }}>
                    {valueIcons[v.name] || fallbackIcon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a3c34', marginTop: '0.75rem', lineHeight: 1.3 }}>
                    {v.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', fontWeight: 400, color: '#5a7a72', lineHeight: 1.6, marginTop: '0.4rem' }}>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}