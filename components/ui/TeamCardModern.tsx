// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: portrait, dark gradient overlay, hover dim + slide-up
'use client'
import { useState } from 'react'

interface TeamCardModernProps {
  name: string
  role: string
  since?: number
  photo: string
  onOpen: () => void
}

export function TeamCardModern({ name, role, photo, onOpen }: TeamCardModernProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        aspectRatio: '4 / 5',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      {/* Photo */}
      <img
        src={photo}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'filter var(--duration-base) var(--ease-standard)',
          filter: isHovered ? 'brightness(0.75)' : 'brightness(1)',
        }}
      />

      {/* Dark gradient overlay at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom section: name/role + sliding "More about" */}
      <div
        style={{
          position: 'absolute',
          bottom: 'var(--space-sm)',
          left: 'var(--space-md)',
          right: 'var(--space-md)',
          color: 'white',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: 'var(--text-body)',
            fontWeight: 700,
            lineHeight: 1.3,
            transition: 'transform 0.2s ease',
            transform: isHovered ? 'translateY(-38px)' : 'translateY(0)',
          }}
        >
          {name}
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 'var(--text-caption)',
            opacity: 0.85,
            lineHeight: 1.4,
            transition: 'transform 0.2s ease',
            transform: isHovered ? 'translateY(-38px)' : 'translateY(0)',
          }}
        >
          {role}
        </div>

        {/* "More about" — slides up from below */}
        <div
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            marginTop: '6px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'white',
              color: 'var(--color-text)',
              fontSize: 'var(--text-caption)',
              fontWeight: 600,
              padding: '8px 18px',
              borderRadius: '100px',
              lineHeight: 1.4,
              letterSpacing: '0.02em',
            }}
          >
            More about {name.split(' ')[0]}
          </span>
        </div>
      </div>
    </div>
  )
}