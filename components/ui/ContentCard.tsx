// v9 Component
// Modes: A
// B
// C
// Card Tier: 2 (Content Card)
// Decorative: subtle border, optional hover tint/shift
// components/ui/ContentCard.tsx
// v9 Tier 2 – Content Card (Mode B)
// Used for: inline information in ContentLayout, info panels, callouts
// Characteristics: subtle borders, no big lift, minimal shadow

'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ContentCardProps {
  title: string
  description?: string
  href?: string
  icon?: React.ReactNode
  variant?: 'default' | 'callout' | 'note'
  /** If true, card has hover interaction (subtle) */
  interactive?: boolean
  className?: string
  children?: React.ReactNode
}

export function ContentCard({
  title,
  description,
  href,
  icon,
  variant = 'default',
  interactive = false,
  className,
  children,
}: ContentCardProps) {
  const [hovered, setHovered] = useState(false)

  const baseStyles: React.CSSProperties = {
    background: 'var(--color-surface-default)',
    border: '1px solid var(--color-border-subtle)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-md)',
    transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    position: 'relative',
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {},
    callout: {
      borderLeft: '3px solid var(--color-primary)',
      background: 'rgba(10, 102, 255, 0.04)',
    },
    note: {
      borderLeft: '3px solid var(--color-secondary)',
      background: 'rgba(47, 72, 102, 0.04)',
    },
  }

  const hoverStyles: React.CSSProperties = interactive && hovered
    ? {
        borderColor: 'var(--color-border-strong)',
        boxShadow: 'var(--shadow-sm)',
        transform: 'translateY(-1px)',
      }
    : {}

  const mergedStyles = { ...baseStyles, ...variantStyles[variant], ...hoverStyles }

  const content = (
    <>
      <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'flex-start' }}>
        {icon && (
          <div
            style={{
              flexShrink: 0,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(10, 102, 255, 0.08)',
              color: 'var(--color-primary)',
            }}
          >
            {icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: 'var(--text-body)', fontWeight: 600, marginBottom: description || children ? '4px' : 0 }}>
            {title}
          </h4>
          {description && (
            <p style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              {description}
            </p>
          )}
          {children && <div style={{ marginTop: 'var(--space-xs)' }}>{children}</div>}
        </div>
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block', ...mergedStyles }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={className}
      >
        {content}
      </Link>
    )
  }

  return (
    <div
      style={mergedStyles}
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
      className={className}
    >
      {content}
    </div>
  )
}
