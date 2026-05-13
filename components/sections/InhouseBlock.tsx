// v9 Component
// Modes: A, B
// Card Tier: N/A
// Decorative: centered layout, stat cards, pill CTA

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageWrapper } from '@/components/layout/PageWrapper'

interface InhouseBlockProps {
  heading: string
  paragraphs: string[]
}

export function InhouseBlock({ heading, paragraphs }: InhouseBlockProps) {
  const [hovered, setHovered] = useState(false)

  const stats = [
    { value: '20+', label: 'Years experience' },
    { value: '7', label: 'Core services' },
    { value: '2×', label: 'Global awards' },
    { value: '0', label: 'Outsourcing' },
  ]

  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 'var(--space-lg)',
          }}
        >
          {/* Label: blue dash + uppercase text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: 24,
                height: 2,
                backgroundColor: 'var(--color-primary)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 'var(--text-label)',
                letterSpacing: '0.08em',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
              }}
            >
              BUILT IN-HOUSE
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ maxWidth: 720, margin: 0 }}>{heading}</h2>

          {/* Body paragraphs */}
          <div
            style={{
              maxWidth: 640,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
            }}
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: 'var(--text-body-lg)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Stats: 4-column card grid, 2 columns on mobile */}
          <div style={{ width: '100%' }} className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(32px, 3.5vw, 48px)',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-caption)',
                    color: 'var(--color-text-muted)',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Avatar stack */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '-8px',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', marginRight: '8px' }}>
              {[
                '/images/team/jason-toyer.jpg',
                '/images/team/sam-pryor.jpg',
                '/images/team/nathan-dailo.jpg',
                '/images/team/michael-collins.jpg',
              ].map((src, i) => (
                <div
                  key={src}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--color-bg-card)',
                    marginLeft: i > 0 ? '-12px' : 0,
                    boxShadow: 'var(--shadow-sm)',
                    zIndex: 4 - i,
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(30%)',
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <span
              style={{
                fontSize: 'var(--text-caption)',
                color: 'var(--color-text-muted)',
                fontWeight: 500,
              }}
            >
              +10 team members
            </span>
          </div>

          {/* CTA button (secondary style) */}
          <Link
            href="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: 'var(--radius-full)',
              background: hovered ? 'var(--color-bg-dark)' : 'transparent',
              color: hovered ? 'var(--color-text-inverse)' : 'var(--color-text)',
              fontSize: 'var(--text-button)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              border: '1px solid var(--color-border)',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span>Meet the team</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transition: 'transform 0.25s ease',
                transform: hovered ? 'translateX(3px)' : 'translateX(0)',
              }}
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </PageWrapper>
    </section>
  )
}
