import { team } from '@/lib/content'
import { siteConfig } from '@/lib/config'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { BeliefsGrid } from '@/components/sections/BeliefsGrid'
import { CtaBand } from '@/components/sections/CtaBand'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function AboutPage() {
  return (
    <MarketingLayout
      breadcrumb="About"
      heading="Built in-house. Accountable by design."
      subheading="Full-service digital agency in North Sydney. Senior practitioners on every project. No outsourcing. No exceptions."
    >
      <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
        <PageWrapper>
          <div style={{ display: 'flex', gap: 'var(--space-xl)', alignItems: 'center' }} className="flex-col md:flex-row">
            <div style={{ flex: '0 0 40%', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Codex Digital team collaborating in North Sydney office"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '4 / 3', borderRadius: 'var(--radius-lg)' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <SectionLabel label="OUR STORY" />
              <div style={{ marginTop: 'var(--space-sm)' }}>
                <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  Codex Digital was founded in 2015 by Jason Toyer, a digital practitioner with a decade of experience building products for Australian enterprise clients. The premise was simple: senior practitioners, working in-house, accountable for outcomes.
                </p>
                <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 'var(--space-md)' }}>
                  That premise has not changed. Every project at Codex is led by a team with 15-20 years of experience across development, design, and strategy. We do not outsource. We do not use offshore contractors. And we do not hand client work to junior staff.
                </p>
                <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: 'var(--space-md)' }}>
                  Our team is based in North Sydney. Our clients are based across Australia. And our work is measured by the outcomes it produces - not the activity it generates.
                </p>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>

      <BeliefsGrid />

      <TeamGrid team={team} />

      <ValuesSection />

      <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
        <PageWrapper>
          <SectionLabel label="GET IN TOUCH" />
          <h2 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>Contact us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-md)' }} className="md:grid-cols-3">
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)' }}>Phone</div>
              <div style={{ fontSize: 'var(--text-body-lg)', fontWeight: 600, color: 'var(--color-text)' }}>{siteConfig.phone}</div>
            </div>
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)' }}>Email</div>
              <div style={{ fontSize: 'var(--text-body-lg)', fontWeight: 600, color: 'var(--color-text)' }}>{siteConfig.email}</div>
            </div>
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)' }}>Address</div>
              <div style={{ fontSize: 'var(--text-body)', fontWeight: 500, color: 'var(--color-text)', lineHeight: 1.5 }}>{siteConfig.address}</div>
            </div>
          </div>
        </PageWrapper>
      </section>

      <CtaBand
        heading="Ready to work with a team that takes ownership?"
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </MarketingLayout>
  )
}
