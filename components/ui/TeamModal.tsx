// v9 Component
// Modes: A
// B
// Card Tier: N/A (modal/lightbox)
// Decorative: lightbox overlay, two-column layout, keyboard nav
'use client'
import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Linkedin, Mail, Phone } from 'lucide-react'
import type { TeamMember } from '@/lib/types'

interface TeamModalProps {
  members: TeamMember[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function TeamModal({ members, currentIndex, onClose, onNavigate }: TeamModalProps) {
  const member = members[currentIndex]

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1)
    if (e.key === 'ArrowRight' && currentIndex < members.length - 1) onNavigate(currentIndex + 1)
  }, [onClose, onNavigate, currentIndex, members.length])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!member) return null

  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < members.length - 1

  return (
    /* Backdrop */
    <div
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-md)',
      }}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--color-bg-card)',
          borderRadius: 'var(--radius-2xl)',
          maxWidth: '820px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxShadow: 'var(--shadow-xl)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: 'var(--space-sm)',
            right: 'var(--space-sm)',
            zIndex: 10,
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.08)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            color: 'var(--color-text)',
            transition: 'background var(--duration-fast)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.14)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.08)' }}
        >
          <X size={20} />
        </button>

        {/* Content: left photo / right info on desktop, stacked on mobile */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
          }}
          className="flex-col md:flex-row"
        >
          {/* Left: Photo */}
          <div
            style={{
              width: '100%',
              minHeight: '280px',
              flexShrink: 0,
              overflow: 'hidden',
            }}
            className="md:min-h-full md:w-[320px]"
          >
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right: Info */}
          <div
            style={{
              flex: 1,
              padding: 'var(--space-md)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            {/* Name */}
            <h3 style={{ fontSize: 'var(--text-h3)', fontWeight: 700, lineHeight: 1.2 }}>
              {member.name}
            </h3>

            {/* Role */}
            <div
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--color-primary)',
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              {member.role}
            </div>

            {/* Since */}
            {member.since && (
              <div
                style={{
                  fontSize: 'var(--text-caption)',
                  color: 'var(--color-text-muted)',
                  marginTop: 2,
                }}
              >
                Digital since {member.since}
              </div>
            )}

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'var(--color-border)',
                margin: 'var(--space-sm) 0',
              }}
            />

            {/* Bio */}
            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--color-text)',
                lineHeight: 1.65,
                overflowY: 'auto',
                flex: 1,
              }}
            >
              {member.bio}
            </p>

            {/* Spacer */}
            <div style={{ flex: 1, minHeight: 'var(--space-sm)' }} />

            {/* Contact links */}
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-sm)' }}>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
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
                  {member.email}
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
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
                  {member.phone}
                </a>
              )}
            </div>

            {/* Navigation at bottom */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'var(--space-md)',
                paddingTop: 'var(--space-sm)',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {/* Prev button */}
              <button
                onClick={() => hasPrev && onNavigate(currentIndex - 1)}
                disabled={!hasPrev}
                aria-label="Previous team member"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 'var(--text-caption)',
                  fontWeight: 600,
                  color: hasPrev ? 'var(--color-text)' : 'var(--color-text-muted)',
                  background: 'none',
                  border: '1px solid var(--color-border)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  cursor: hasPrev ? 'pointer' : 'default',
                  opacity: hasPrev ? 1 : 0.4,
                  transition: 'border-color var(--duration-fast), opacity var(--duration-fast)',
                }}
                onMouseEnter={(e) => {
                  if (hasPrev) e.currentTarget.style.borderColor = 'var(--color-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
              >
                <ChevronLeft size={14} />
                Prev
              </button>

              {/* Position indicator */}
              <div
                style={{
                  fontSize: 'var(--text-caption)',
                  fontWeight: 500,
                  color: 'var(--color-text-muted)',
                }}
              >
                {currentIndex + 1} / {members.length}
              </div>

              {/* Next button */}
              <button
                onClick={() => hasNext && onNavigate(currentIndex + 1)}
                disabled={!hasNext}
                aria-label="Next team member"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: 'var(--text-caption)',
                  fontWeight: 600,
                  color: hasNext ? 'var(--color-text)' : 'var(--color-text-muted)',
                  background: 'none',
                  border: '1px solid var(--color-border)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  cursor: hasNext ? 'pointer' : 'default',
                  opacity: hasNext ? 1 : 0.4,
                  transition: 'border-color var(--duration-fast), opacity var(--duration-fast)',
                }}
                onMouseEnter={(e) => {
                  if (hasNext) e.currentTarget.style.borderColor = 'var(--color-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
              >
                Next
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}