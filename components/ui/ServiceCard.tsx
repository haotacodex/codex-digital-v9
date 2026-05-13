// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: translateY(-4px), shadow-card-hover, primary border on hover
'use client'
import { useState } from 'react'
import Link from 'next/link'

interface ServiceCardProps {
  slug: string
  name: string
  icon: string
  tagline: string
}

const iconColors: Record<string, string> = {
  'website.svg': '#0A66FF',
  'design.svg': '#FF6D00',
  'branding.svg': '#E91E63',
  'mobile.svg': '#00BFA5',
  'software.svg': '#7C4DFF',
  'campaigns.svg': '#FF1744',
  'hosting.svg': '#2979FF',
}

export function ServiceCard({ slug, name, icon, tagline }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)
  const color = iconColors[icon] || 'var(--color-primary)'

  return (
    <Link href={`/services/${slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        style={{
          background: 'var(--color-bg-card)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-md)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-sm)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? 'var(--shadow-card-hover)' : 'none',
          borderColor: hovered ? 'var(--color-primary)' : 'var(--color-border)',
          transition: 'transform var(--duration-base), box-shadow var(--duration-base), border-color var(--duration-base)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={`/icons/${icon}`} alt="" width="22" height="22" style={{ display: 'block' }} />
          </div>
          <span style={{ color: 'var(--color-primary)', fontSize: '20px', opacity: hovered ? 1 : 0, transition: 'opacity var(--duration-base)' }}>
            &rarr;
          </span>
        </div>
        <div style={{ fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--color-text)', marginTop: '4px' }}>{name}</div>
        <div style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>{tagline}</div>
      </div>
    </Link>
  )
}

