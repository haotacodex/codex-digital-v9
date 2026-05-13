// v9 Component
// Modes: A
// B
// Card Tier: 1 (Feature Card)
// Decorative: hover dim + slide-up CTA
'use client'
import { useState } from 'react'
import { Mail, ChevronDown, ChevronUp, Phone } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  since: number
  photo: string
  bio?: string
  email?: string
  phone?: string
}

export function TeamCard({ name, role, since, photo, bio, email, phone }: TeamCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-md)',
        transition: 'border-color var(--duration-fast), box-shadow var(--duration-fast)',
        cursor: 'pointer',
      }}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary)'
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          border: '2px solid var(--color-border)',
          transition: 'border-color var(--duration-fast)',
        }}>
          <img
            src={photo}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 'var(--text-body)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>
            {name}
          </div>
          <div style={{ fontSize: 'var(--text-caption)', color: 'var(--color-primary)', fontWeight: 600, marginTop: '2px' }}>
            {role}
          </div>
          <div style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
            Digital since {since}
          </div>
        </div>
        <div style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}>
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>

      {expanded && (
        <div style={{
          marginTop: 'var(--space-md)',
          paddingTop: 'var(--space-sm)',
          borderTop: '1px solid var(--color-border)',
        }}>
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
            {bio}
          </p>
          <div style={{ marginTop: 'var(--space-sm)', display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', alignItems: 'center' }}>
            {email && (
              <a
                href={`mailto:${email}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: 'var(--text-caption)',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '6px 12px',
                  background: 'rgba(10,102,255,0.06)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background var(--duration-fast)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(10,102,255,0.12)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(10,102,255,0.06)' }}
              >
                <Mail size={14} />
                {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: 'var(--text-caption)',
                  color: 'var(--color-secondary)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '6px 12px',
                  background: 'rgba(47,72,102,0.06)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background var(--duration-fast)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(47,72,102,0.12)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(47,72,102,0.06)' }}
              >
                <Phone size={14} />
                {phone}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
