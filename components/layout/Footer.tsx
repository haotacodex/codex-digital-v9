// v9 Component
// Modes: A
// B
// C
// Card Tier: N/A
// Decorative: 4-column dark footer
'use client'

import { PageWrapper } from './PageWrapper'
import { footerColumns, legalLinks, siteConfig } from '@/lib/config'
import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-dark)', color: 'var(--color-text-inverse)', marginTop: 'auto', borderTop: '1px solid var(--color-border-dark)' }}>
      <PageWrapper>
        {/* ─── Top section: 4 columns ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-lg)',
            padding: 'var(--space-xl) 0',
          }}
        >
          {/* Brand column — spans 1, wider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/images/logomark.svg" alt="" width="24" height="24" style={{ display: 'block', filter: 'brightness(0) invert(1)' }} />
              <div style={{ fontSize: 'var(--text-h4)', fontWeight: 700 }}>Codex Digital</div>
            </div>
            <p style={{ fontSize: 'var(--text-body)', color: 'rgba(248,249,250,0.55)', lineHeight: 1.6 }}>
              {siteConfig.tagline}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.4)' }}>{siteConfig.address}</span>
              <span style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.4)' }}>{siteConfig.phone}</span>
              <span style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.4)' }}>{siteConfig.email}</span>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: 'var(--text-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>
                {col.heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ fontSize: 'var(--text-body)', color: 'rgba(248,249,250,0.65)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text-inverse)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(248,249,250,0.65)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Middle divider ─── */}
        <div style={{ height: '1px', background: 'var(--color-border-dark)' }} />

        {/* ─── Bottom bar ─── */}
        <div style={{ padding: 'var(--space-md) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.35)', transition: 'color var(--duration-fast)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(248,249,250,0.65)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(248,249,250,0.35)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.35)' }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </div>
        </div>

        {/* ─── Acknowledgement ─── */}
        <div style={{ paddingBottom: 'var(--space-md)', textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.30)', lineHeight: 1.5, maxWidth: '800px', margin: '0 auto' }}>
            {siteConfig.acknowledgement}
          </p>
        </div>
      </PageWrapper>
    </footer>
  )
}
