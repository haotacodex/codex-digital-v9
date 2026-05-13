const fs = require('fs')

const code = `'use client'
import { useState } from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  surface?: 'light' | 'dark'
  blurred?: boolean
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  ariaLabel?: string
}

export function Button({
  variant = 'primary',
  surface = 'light',
  blurred = false,
  href,
  onClick,
  children,
  className,
  disabled,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  const isPrimary = variant === 'primary'
  const isDark    = surface === 'dark'

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 28px',
    borderRadius: 'var(--radius-lg)',
    fontSize: 'var(--text-button)',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.25s ease',
    textDecoration: 'none',
    transform: hovered ? 'scale(1.015)' : 'scale(1)',
  }

  const borderLight = '1px solid rgba(0,0,0,0.12)'
  const borderDark  = '1px solid rgba(255,255,255,0.25)'

  let style: React.CSSProperties

  if (isPrimary) {
    style = {
      ...baseStyle,
      background: hovered ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--color-text-inverse)',
      border: isDark ? borderDark : borderLight,
    }
  } else {
    style = {
      ...baseStyle,
      background: hovered
        ? (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(47,72,102,0.06)')
        : (isDark ? 'rgba(255,255,255,0.06)' : 'transparent'),
      color: isDark ? 'var(--color-text-inverse)' : 'var(--color-text)',
      border: isDark ? borderDark : borderLight,
    }
  }

  if (blurred) {
    style.backdropFilter = 'blur(8px)';
    style.WebkitBackdropFilter = 'blur(8px)';
  }

  const inner = (
    <span
      className={className}
      style={style}
      onClick={onClick}
      role={href ? undefined : 'button'}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  )

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {inner}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} style={{ background: 'none', padding: 0, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {inner}
    </button>
  )
}
`

fs.writeFileSync('components/ui/Button.tsx', code, 'utf8')
console.log('Button.tsx written successfully')
