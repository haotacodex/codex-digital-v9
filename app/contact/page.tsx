import { siteConfig } from '@/lib/config'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContactForm } from '@/components/forms/ContactForm'
import { CtaBand } from '@/components/sections/CtaBand'

export const metadata = {
  title: 'Contact | Codex Digital',
  description: 'Get in touch with Codex Digital. Phone, email, or visit our North Sydney office.',
}

export default function ContactPage() {
  return (
    <MarketingLayout
      breadcrumb="Contact"
      heading="Let's talk."
      subheading="Whether you have a brief ready or just want to understand what is possible, we are happy to have a conversation."
    >
      <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
        <PageWrapper>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)' }} className="lg:grid-cols-[1fr_1.2fr]">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
                <h3 style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</h3>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: 'var(--text-body-lg)', fontWeight: 500 }}>{siteConfig.phone}</a>
              </div>
              <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
                <h3 style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</h3>
                <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: 'var(--text-body-lg)', fontWeight: 500 }}>{siteConfig.email}</a>
              </div>
              <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
                <h3 style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Address</h3>
                <p style={{ color: 'var(--color-text)', fontSize: 'var(--text-body-lg)', fontWeight: 500, lineHeight: 1.6 }}>{siteConfig.address}</p>
              </div>
              <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
                <h3 style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Office hours</h3>
                <p style={{ color: 'var(--color-text)', fontSize: 'var(--text-body-lg)', fontWeight: 500 }}>Monday — Friday, 9:00am — 5:30pm AEDT</p>
              </div>
            </div>
            <div style={{ background: 'var(--color-bg-card)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-lg)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, marginBottom: 'var(--space-md)' }}>Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </PageWrapper>
      </section>
      <CtaBand
        heading="Prefer to talk through your project in person?"
        body="We offer complimentary discovery meetings at our North Sydney office or via video call."
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </MarketingLayout>
  )
}
