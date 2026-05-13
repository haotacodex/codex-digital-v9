import { team } from '@/lib/content'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { CtaBand } from '@/components/sections/CtaBand'

export const metadata = {
  title: 'Our Team | Codex Digital',
  description: 'Meet the Codex Digital team. Senior practitioners with 15-20 years of experience delivering digital products from our North Sydney studio.',
}

export default function TeamPage() {
  return (
    <MarketingLayout
      breadcrumb="Team"
      heading="Built by senior practitioners."
      subheading="Every project at Codex is led by practitioners with 15-20 years of experience across development, design, and strategy."
    >
      <TeamGrid team={team} showHeader={false} />
      <CtaBand
        heading="Want to work with this team?"
        body="The first phase is a conversation. No pitch deck. No pressure."
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </MarketingLayout>
  )
}