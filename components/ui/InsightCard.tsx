// v9 Component
// Modes: A (preview)
// B (detail)
// Card Tier: 1 (A)
// 2 (B)
// Decorative: Tier 1 hover in A, subtle tint in B
'use client'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface InsightCardProps {
  slug: string
  title: string
  category: string
  readTime: string
  publishDate: string
  excerpt?: string
  image: string
}

const glassPillStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: '#FFFFFF',
  background: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.25)',
  borderRadius: '999px',
  padding: '5px 13px',
  display: 'inline-block',
}

export function InsightCard({ slug, title, category, readTime, publishDate, excerpt, image }: InsightCardProps) {
  return (
    <Link href={`/insights/${slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform var(--duration-base), box-shadow var(--duration-base), border-color var(--duration-base)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
          e.currentTarget.style.borderColor = 'var(--color-primary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = 'var(--color-border)'
        }}
      >
        {/* Image area with category pill */}
        <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 400ms ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
          />
          {/* Bottom gradient for readability */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Category pill — same glassmorphism as hero service chips */}
          <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 2 }}>
            <span style={glassPillStyle}>{category}</span>
          </div>
        </div>

        {/* Content area */}
        <div style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          {/* Time */}
          <div style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)' }}>
            {readTime} &middot; {formatDate(publishDate)}
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-h4)',
              fontWeight: 600,
              lineHeight: 1.35,
              color: 'var(--color-text)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              transition: 'color 150ms ease',
            }}
            className="hover:text-[var(--color-primary)]"
          >
            {title}
          </h3>

          {/* Short blurb */}
          {excerpt && (
            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginTop: '2px',
              }}
            >
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
