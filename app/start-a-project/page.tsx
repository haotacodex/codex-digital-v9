import { siteConfig } from '@/lib/config'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ProjectBriefForm } from '@/components/forms/ProjectBriefForm'
import { CtaBand } from '@/components/sections/CtaBand'

export const metadata = {
  title: 'Start a Project | Codex Digital',
  description: 'Tell us about your project. We will review your brief and be in touch within 1 business day. No sales pitch. Just an honest assessment.',
}

export default function StartProjectPage() {
  return (
    <MarketingLayout
      breadcrumb="Start a project"
      heading="Tell us what you are building."
      subheading="We review every brief personally. If we are the right fit, we will propose a clear scope, timeline, and investment. If not, we will tell you that too."
    >
      <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
        <PageWrapper>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="lg:grid-cols-[1fr_1.2fr]">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
                <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>What happens next?</h3>
                <ol style={{ color: 'var(--color-text-muted)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', lineHeight: 1.6 }}>
                  <li>We review your brief within 1 business day.</li>
                  <li>If we are a fit, we schedule a 30-minute discovery call.</li>
                  <li>We send a written scope, timeline, and investment proposal.</li>
                  <li>You decide. No pressure. No follow-up spam.</li>
                </ol>
              </div>
              <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
                <h3 style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h3>
                <p style={{ color: 'var(--color-text)', lineHeight: 1.6, fontWeight: 500 }}>{siteConfig.phone}</p>
                <p style={{ color: 'var(--color-text)', lineHeight: 1.6, fontWeight: 500 }}>{siteConfig.email}</p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: 'var(--space-sm)' }}>{siteConfig.address}</p>
              </div>
            </div>
            <div style={{ background: 'var(--color-bg-card)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-lg)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginBottom: 'var(--space-md)' }}>Project brief</h3>
              <ProjectBriefForm />
            </div>
          </div>
        </PageWrapper>
      </section>
      <CtaBand
        heading="Rather talk first?"
        body="Call us directly or book a complimentary discovery meeting at our North Sydney office."
        ctaLabel="Contact us"
        ctaHref="/contact"
      />
    </MarketingLayout>
  )
}
