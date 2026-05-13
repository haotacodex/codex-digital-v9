import { insights } from '@/lib/content'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { InsightGrid } from '@/components/sections/InsightGrid'
import { CtaBand } from '@/components/sections/CtaBand'

export const metadata = {
  title: 'Insights | Codex Digital',
  description: 'Practical insights on web development, UX design, software, and digital strategy from the Codex Digital team in North Sydney.',
}

export default function InsightsPage() {
  return (
    <MarketingLayout
      breadcrumb="Insights"
      heading="Practical thinking on digital."
      subheading="Articles on web development, UX design, software, and digital strategy — written by the team that delivers the work."
    >
      <InsightGrid insights={insights} />
      <CtaBand
        heading="Want to talk through an idea?"
        body="Our insights are drawn from real projects. If something resonates, let's discuss how it applies to your business."
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </MarketingLayout>
  )
}
