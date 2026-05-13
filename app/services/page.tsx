import { services } from '@/lib/content'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CtaBand } from '@/components/sections/CtaBand'

export default function ServicesPage() {
  return (
    <MarketingLayout
      breadcrumb="Services"
      heading="End-to-end digital services. Built in-house."
      subheading="Seven disciplines. One delivery team. Senior practitioners on every project."
    >
      <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
        <PageWrapper>
          <SectionLabel label="WHAT WE BUILD" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }} className="md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} slug={service.slug} name={service.name} icon={service.icon} tagline={service.tagline} />
            ))}
          </div>
        </PageWrapper>
      </section>
      <CtaBand heading="Not sure what you need?" ctaLabel="Start a project" ctaHref="/start-a-project" />
    </MarketingLayout>
  )
}
