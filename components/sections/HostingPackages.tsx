// v9 Component
// Modes: A
// B
// Card Tier: 1 (Feature Card)
// Decorative: pricing table
'use client'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import type { HostingPackage } from '@/lib/types'

interface HostingPackagesProps {
  packages: HostingPackage[]
}

export function HostingPackages({ packages }: HostingPackagesProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <SectionLabel label="MANAGED HOSTING" />
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.2vw, 36px)', fontWeight: 700, color: 'var(--color-text)', marginBottom: 'var(--space-sm)' }}>Enterprise hosting, delivered locally</h2>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto' }}>Enterprise-grade infrastructure with 99.9% uptime SLA. Managed by the same team that built your site.</p>
        </div>
      </PageWrapper>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)' }}>
        <div style={{ display: 'grid', gap: 'var(--space-md)' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} style={{ 
              border: pkg.recommended ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', 
              borderRadius: 'var(--radius-xl)', 
              padding: 'var(--space-lg) var(--space-md)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'var(--space-sm)', 
              background: pkg.recommended ? 'linear-gradient(180deg, var(--color-bg-card) 0%, rgba(10,102,255,0.02) 100%)' : 'var(--color-bg-card)',
              boxShadow: pkg.recommended ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
              position: 'relative',
            }}>
              {pkg.recommended && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  background: 'var(--color-primary)', 
                  color: 'var(--color-text-inverse)', 
                  fontSize: 'var(--text-label)', 
                  fontWeight: 600, 
                  padding: '4px 14px', 
                  borderRadius: 'var(--radius-full)', 
                  boxShadow: 'var(--shadow-card)',
                  whiteSpace: 'nowrap',
                }}>
                  MOST POPULAR
                </div>
              )}
              <div>
                <div style={{ fontSize: 'var(--text-h4)', fontWeight: 600, fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '4px' }}>{pkg.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 800, color: pkg.recommended ? 'var(--color-primary)' : 'var(--color-text)' }}>{pkg.price}</div>
                  {pkg.price !== 'Custom' && <div style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)' }}>AUD / mo</div>}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'var(--space-xs)', flex: 1, padding: 'var(--space-xs) 0' }}>
                {pkg.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    <div style={{ 
                      flexShrink: 0, 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: pkg.recommended ? 'rgba(10,102,255,0.1)' : 'rgba(10,102,255,0.05)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: pkg.recommended ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      fontSize: '12px',
                    }}>
                      ✓
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Button variant={pkg.recommended ? 'primary' : 'secondary'} href="/start-a-project">{pkg.ctaLabel}</Button>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <p style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)' }}>All plans include SSL certificates, daily backups, and 99.9% uptime SLA. <a href="/contact" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>Need something different?</a></p>
        </div>
      </div>
    </section>
  )
}
