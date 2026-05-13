import { services } from '@/lib/content'
import { getServiceBySlug } from '@/lib/utils'
import { ContentLayout } from '@/components/layout/ContentLayout'
import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { RelatedWork } from '@/components/sections/RelatedWork'
import { HostingPackages } from '@/components/sections/HostingPackages'
import { CtaBand } from '@/components/sections/CtaBand'
import { caseStudies, hostingPackages } from '@/lib/content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getServiceBySlug(slug, services)
  if (!s) return {}
  return {
    title: s.metaTitle,
    description: s.metaDescription,
  }
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getServiceBySlug(slug, services)
  if (!s) return notFound()

  return (
    <>
      <ContentLayout
        breadcrumb="Services"
        heading={s.name}
        subheading={s.tagline}
        contentWidth={920}
      >
        <ServiceDetail service={s} />
        {s.slug === 'hosting-infrastructure' && <HostingPackages packages={hostingPackages} />}
        <RelatedWork slugs={s.relatedWork} allCaseStudies={caseStudies} label="RELATED WORK" />
      </ContentLayout>
      <CtaBand heading={`Need ${s.name.toLowerCase()}?`} ctaLabel="Start a project" ctaHref="/start-a-project" />
    </>
  )
}
