import { notFound } from 'next/navigation'
import { industries, caseStudies } from '@/lib/content'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { IndustryDetail } from '@/components/sections/IndustryDetail'
import { WorkGrid } from '@/components/sections/WorkGrid'
import { CtaBand } from '@/components/sections/CtaBand'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) return {}
  return { title: industry.metaTitle, description: industry.metaDescription }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industries.find((i) => i.slug === slug)
  if (!industry) notFound()

  const related = caseStudies.filter((cs) => industry.relatedWork.includes(cs.slug))

  return (
    <MarketingLayout
      breadcrumb={`Industries / ${industry.name}`}
      heading={industry.headline}
      subheading={industry.subheadline}
    >
      <IndustryDetail industry={industry} />
      {related.length > 0 && (
        <WorkGrid
          heading="Related work"
          subheading={`Case studies from ${industry.name.toLowerCase()}.`}
          caseStudies={related}
          ctaLabel="View all work"
          ctaHref="/work"
        />
      )}
      <CtaBand
        heading={`Need a ${industry.name.toLowerCase()} digital partner?`}
        body="We deliver custom digital products in-house — from strategy to launch to ongoing growth."
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </MarketingLayout>
  )
}
