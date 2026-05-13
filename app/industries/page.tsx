import { industries } from '@/lib/content'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { IndustryGrid } from '@/components/sections/IndustryGrid'
import { CtaBand } from '@/components/sections/CtaBand'

export const metadata = {
  title: 'Industries | Codex Digital',
  description: 'Digital solutions for financial services, insurance, energy, manufacturing, and SaaS. Built in-house by Codex Digital, North Sydney.',
}

export default function IndustriesPage() {
  return (
    <MarketingLayout
      breadcrumb="Industries"
      heading="Sector expertise, built on delivery."
      subheading="We have delivered custom digital products for leading brands across financial services, insurance, energy, manufacturing, and SaaS."
    >
      <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
        <PageWrapper>
          <IndustryGrid industries={industries} />
        </PageWrapper>
      </section>
      <CtaBand
        heading="Not sure which industry category fits?"
        body="Every project is different. Let's talk about what you need, and we will tell you honestly whether we are the right team for it."
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </MarketingLayout>
  )
}
