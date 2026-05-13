import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/content'
import { getCaseStudyBySlug } from '@/lib/utils'
import { ContentLayout } from '@/components/layout/ContentLayout'
import { PageHeader } from '@/components/sections/PageHeader'
import { MetricTiles } from '@/components/sections/MetricTiles'
import { ProjectOverview } from '@/components/sections/ProjectOverview'
import { ProjectSolution } from '@/components/sections/ProjectSolution'
import { RelatedWork } from '@/components/sections/RelatedWork'
import { CtaBand } from '@/components/sections/CtaBand'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug, caseStudies)
  if (!cs) return {}
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    openGraph: { title: cs.metaTitle, description: cs.metaDescription, url: `/work/${cs.slug}` },
    twitter: { card: 'summary_large_image', title: cs.metaTitle, description: cs.metaDescription },
    alternates: { canonical: `/work/${cs.slug}` },
  }
}

export default async function WorkSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug, caseStudies)
  if (!cs) return notFound()

  return (
    <>
      <ContentLayout
        breadcrumb={cs.industry}
        heading={`Project: ${cs.client}`}
        subheading={cs.descriptor}
      >
        {/* Metric tiles section */}
        <MetricTiles metrics={cs.metrics} />

        {/* Overview, Challenge, Role */}
        <ProjectOverview overview={cs.overview} challenge={cs.challenge} role={cs.role} />

        {/* Solution, features, tech, awards */}
        <ProjectSolution features={cs.features} tech={cs.tech} awards={cs.awards} />

        {/* Related work */}
        <RelatedWork slugs={cs.relatedWork ?? []} allCaseStudies={caseStudies} label="RELATED WORK" />
      </ContentLayout>
      <CtaBand heading={`Ready to talk about ${cs.services[0].toLowerCase()}?`} ctaLabel="Get in touch" ctaHref="/start-a-project" />
    </>
    )
}
