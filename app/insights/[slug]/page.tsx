import { notFound } from 'next/navigation'
import Link from 'next/link'
import { insights } from '@/lib/content'
import { ContentLayout } from '@/components/layout/ContentLayout'
import { CtaBand } from '@/components/sections/CtaBand'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)
  if (!insight) return {}
  return { title: insight.metaTitle, description: insight.metaDescription }
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)
  if (!insight) notFound()

  const meta = `${insight.readTime} · ${formatDate(insight.publishDate)}`

  return (
    <>
      <ContentLayout
        breadcrumb={`Insights / ${insight.category}`}
        heading={insight.title}
        category={insight.category}
        meta={meta}
      >
        {/* Featured image */}
        {insight.image && (
          <div style={{ width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 'var(--space-lg)' }}>
            <img src={insight.image} alt={insight.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        )}

        {/* Excerpt (shown as intro) */}
        {insight.excerpt && (
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text)', marginBottom: 'var(--space-lg)', lineHeight: 1.7, fontWeight: 500 }}>
            {insight.excerpt}
          </p>
        )}

        {/* Main content */}
        {insight.content ? (
          <div
            dangerouslySetInnerHTML={{ __html: insight.content }}
            style={{
              lineHeight: 1.8,
              color: 'var(--color-text)',
              fontSize: 'var(--text-body)',
            }}
          />
        ) : (
          <div style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>Full article coming soon.</p>
            <Link href="/insights" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 500 }}>← Back to all insights</Link>
          </div>
        )}
      </ContentLayout>
      <CtaBand
        heading="Want to apply this thinking to your project?"
        ctaLabel="Start a project"
        ctaHref="/start-a-project"
      />
    </>
  )
}
