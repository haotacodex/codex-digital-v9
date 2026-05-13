// v9 Component
// Modes: A
// B
// Card Tier: N/A
// Decorative: dropdown with icon+title+description
'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import type { MegaMenuItem } from '@/lib/types'

interface MegaMenuProps {
  label: string
  href: string
  items: MegaMenuItem[]
  isOpen: boolean
  onToggle: () => void
  onOpen: () => void
  onClose: () => void
  scrolled: boolean
}

export function MegaMenu({
  label,
  href,
  items,
  isOpen,
  onToggle,
  onOpen,
  onClose,
  scrolled,
}: MegaMenuProps) {
  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: 'var(--text-body)',
          fontWeight: 500,
          color: isOpen ? 'var(--color-text)' : 'var(--color-text-muted)',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px 0',
          transition: 'color var(--duration-fast)',
        }}
      >
        {label}
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--duration-base) var(--ease-standard)',
          }}
        />
      </button>

      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: isOpen
            ? 'translateX(-50%) translateY(0) scale(1)'
            : 'translateX(-50%) translateY(-8px) scale(0.98)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition:
            'opacity var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
          zIndex: 50,
          paddingTop: '8px',
        }}
      >
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
            padding: 'var(--space-sm)',
            width: '720px',
            maxWidth: '90vw',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '4px',
            }}
          >
            {items.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    transition:
                      'background var(--duration-fast) var(--ease-standard)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'var(--color-bg-light)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(10,102,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon size={18} />
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontSize: 'var(--text-body)',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontSize: 'var(--text-caption)',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.4,
                        marginTop: '2px',
                      }}
                    >
                      {item.description}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
