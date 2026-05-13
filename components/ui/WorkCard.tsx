// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: translateY(-4px), shadow-card-hover, primary border on hover
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Tag } from './Tag'

interface WorkCardProps {
  slug: string
  client: string
  thumbnail: string
  services: string[]
  metric: { value: string; label: string }
  award?: string
}

export function WorkCard({ slug, client, thumbnail, services, metric, award }: WorkCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link href={`/work/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          position: 'relative',
          background: 'var(--color-bg-card-dark)',
          aspectRatio: '16 / 10',
          border: '1px solid var(--color-border)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? 'var(--shadow-card-hover)' : 'none',
          borderColor: hovered ? 'var(--color-primary)' : 'var(--color-border)',
          transition: 'transform var(--duration-base), box-shadow var(--duration-base), border-color var(--duration-base)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={thumbnail}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform var(--duration-slow)',
          }}
          alt={`${client} project screenshot`}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 45%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <Tag label={services[0] || 'Project'} />
        </div>
        {award && (
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255,109,0,0.12)',
              border: '1px solid rgba(255,109,0,0.25)',
              color: 'var(--color-accent)',
              fontSize: 'var(--text-caption)',
              fontWeight: 600,
              zIndex: 2,
            }}
          >
            {award}
          </div>
        )}
        <div style={{ position: 'absolute', bottom: '22px', left: '22px', zIndex: 2, maxWidth: '80%' }}>
          <div style={{ fontSize: 'var(--text-h3)', fontWeight: 600, color: 'var(--color-text-inverse)' }}>{client}</div>
          <div style={{ fontSize: 'var(--text-caption)', fontWeight: 500, color: 'rgba(248,249,250,0.7)', marginTop: '6px' }}>
            {metric.value} {metric.label}
          </div>
        </div>
      </div>
    </Link>
  )
}

