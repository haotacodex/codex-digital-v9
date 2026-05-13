import { processPhases } from '@/lib/content'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { CtaBand } from '@/components/sections/CtaBand'

export const metadata = {
  title: 'Our Process | Codex Digital',
  description: 'Six-phase delivery process: Opportunity, Exploration, Design, Development, Rollout, and Growth. Built in-house, accountable by design.',
}

export default function ProcessPage() {
  return (
    <MarketingLayout
      breadcrumb="Process"
      heading="A six-phase process. One point of contact."
      subheading="From first conversation to post-launch growth — every phase is led by senior practitioners and designed for accountability."
    >
      <ProcessTimeline phases={processPhases} />
      <CtaBand
        heading="Ready to start?"
        body="The first phase is a conversation. No pitch deck. No pressure. Just an honest assessment of whether we are the right fit."
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </MarketingLayout>
  )
}
