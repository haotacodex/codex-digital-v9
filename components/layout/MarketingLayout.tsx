// v9 Component
// Mode: A
// Card Tier: N/A (layout shell)
// Decorative: full brand flourishes allowed
// components/layout/MarketingLayout.tsx
// v9 Experience Mode A  Marketing Layout
// Used for: Home, About, Services overview, Work overview
// Characteristics: confident, visually rich, polished; full brand flourishes allowed
// Supports HeroSection, PageHeader, or custom marketing sections

'use client'

import { ReactNode } from 'react'
import { PageWrapper } from './PageWrapper'
import { ModeProvider } from './ModeContext'

interface MarketingLayoutProps {
  /** Breadcrumb label e.g. "About" */
  breadcrumb?: string
  /** Page title (used if heading provided  renders its own PageHeader-style section) */
  heading?: string
  /** Optional subheading / intro paragraph */
  subheading?: string
  /** If true, hides the page header section (for custom header designs like homepage) */
  hideHeader?: boolean
  /** Main content sections */
  children: ReactNode
  /** Optional background variant for the content area */
  background?: 'light' | 'default'
}

export function MarketingLayout({
  breadcrumb,
  heading,
  subheading,
  hideHeader = false,
  children,
  background = 'default',
}: MarketingLayoutProps) {
  return (
    <ModeProvider mode="marketing">
      {/* PageHeader section (Mode A: polished, brand flourishes allowed) */}
      {!hideHeader && (heading || breadcrumb) && (
        <section
          style={{
            background: 'var(--color-bg-light)',
            borderBottom: '1px solid var(--color-border-subtle)',
            paddingTop: 'calc(64px + var(--space-lg))',
            paddingBottom: 'var(--space-lg)',
          }}
        >
          <PageWrapper>
            <div style={{ maxWidth: '800px' }}>
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

              {/* Heading */}
              {heading && <h1>{heading}</h1>}

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
      )}

      {/* Main content area  delegates to children for full flexibility */}
      <section
        style={{
          background: background === 'light'
            ? 'var(--color-bg-light)'
            : 'var(--color-surface-default)',
        }}
      >
        {children}
      </section>
    </ModeProvider>
  )
}
