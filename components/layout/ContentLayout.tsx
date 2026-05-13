// v9 Component
// Mode: B
// Card Tier: N/A (layout shell)
// Decorative: no hero ribbons, no glows, Tier 2 cards
// components/layout/ContentLayout.tsx
// v9 Experience Mode B – Content / Insights Layout
// Used for: insight detail pages, case study pages, long-form content
// Characteristics: calm, clear, expert, focused on content
// No HeroBackground ribbons or large ambient glows

'use client'

import { ReactNode } from 'react'
import { PageWrapper } from './PageWrapper'
import { ModeProvider } from './ModeContext'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface ContentLayoutProps {
  /** Breadcrumb label e.g. "Insights / Web Development" */
  breadcrumb: string
  /** Page title */
  heading: string
  /** Optional subheading / intro paragraph */
  subheading?: string
  /** Optional category pill */
  category?: string
  /** Optional metadata line e.g. "5 min read · 2025-01-15" */
  meta?: string
  /** Main content area */
  children: ReactNode
  /** Optional right rail content (e.g. related links, small cards) */
  rightRail?: ReactNode
  /** Max content width (default: 720px) */
  contentWidth?: number
}

export function ContentLayout({
  breadcrumb,
  heading,
  subheading,
  category,
  meta,
  children,
  rightRail,
  contentWidth = 720,
}: ContentLayoutProps) {
  return (
    <ModeProvider mode="content">
      {/* PageHeader: simple light background, clear title */}
      <section
        style={{
          background: 'var(--color-bg-light)',
          borderBottom: '1px solid var(--color-border-subtle)',
          paddingTop: 'calc(64px + var(--space-lg))',
          paddingBottom: 'var(--space-lg)',
        }}
      >
        <PageWrapper>
          <div style={{ maxWidth: `${contentWidth}px` }}>
            {/* Breadcrumb */}
            {breadcrumb && (
              <div
                style={{
                  fontSize: 'var(--text-caption)',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {breadcrumb}
              </div>
            )}

            {/* Category + Meta row */}
            {(category || meta) && (
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  marginBottom: 'var(--space-sm)',
                  fontSize: 'var(--text-caption)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {category && (
                  <span
                    style={{
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      background: 'rgba(10, 102, 255, 0.08)',
                      padding: '2px 10px',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {category}
                  </span>
                )}
                {meta && <span>{meta}</span>}
              </div>
            )}

            {/* Heading */}
            <h1>{heading}</h1>

            {/* Subheading */}
            {subheading && (
              <p
                style={{
                  fontSize: 'var(--text-body-lg)',
                  color: 'var(--color-text-muted)',
                  marginTop: 'var(--space-sm)',
                  lineHeight: 1.6,
                  maxWidth: '640px',
                }}
              >
                {subheading}
              </p>
            )}
          </div>
        </PageWrapper>
      </section>

      {/* Content area */}
      <section
        style={{
          background: 'var(--color-surface-alt)',
          padding: 'var(--space-xl) 0',
        }}
      >
        <PageWrapper>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: rightRail ? `1fr 300px` : '1fr',
              gap: 'var(--space-xl)',
              alignItems: 'start',
            }}
          >
            {/* Main content column */}
            <div style={{ maxWidth: `${contentWidth}px`, width: '100%' }}>
              {children}
            </div>

            {/* Right rail */}
            {rightRail && (
              <aside
                style={{
                  position: 'sticky',
                  top: 'calc(64px + var(--space-md))',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-md)',
                }}
                className="hidden lg:block"
              >
                {rightRail}
              </aside>
            )}
          </div>
        </PageWrapper>
      </section>
    </ModeProvider>
  )
}
