import { caseStudies } from '@/lib/content'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { WorkGrid } from '@/components/sections/WorkGrid'

export default function WorkPage() {
  return (
    <MarketingLayout
      breadcrumb="Work"
      heading="Work that performs."
      subheading="Selected projects across financial services, insurance, energy, manufacturing, and distribution."
    >
      <WorkGrid heading="" caseStudies={caseStudies} showFilter />
    </MarketingLayout>
  )
}
