// v9 Component
// Modes: A
// B
// Card Tier: 1 (Feature Card)
// Decorative: responsive grid, mobile carousel
'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TeamCardModern } from '@/components/ui/TeamCardModern'
import { TeamModal } from '@/components/ui/TeamModal'
import type { TeamMember } from '@/lib/types'

interface TeamGridProps {
  team: TeamMember[]
  showHeader?: boolean
}

export function TeamGrid({ team, showHeader = true }: TeamGridProps) {
  const [modalIndex, setModalIndex] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // --- Smooth drag-to-scroll ---
  const isDragging = useRef(false)
  const hasMoved = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    isDragging.current = true
    hasMoved.current = false
    startX.current = e.pageX - el.offsetLeft
    scrollLeft.current = el.scrollLeft
    el.style.cursor = 'grabbing'
    el.style.userSelect = 'none'
  }, [])

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return
    isDragging.current = false
    const el = scrollRef.current
    if (el) {
      el.style.cursor = 'grab'
      el.style.userSelect = ''
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!isDragging.current) return
    isDragging.current = false
    const el = scrollRef.current
    if (el) {
      el.style.cursor = 'grab'
      el.style.userSelect = ''
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const el = scrollRef.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    const dx = x - startX.current
    if (Math.abs(dx) > 5) hasMoved.current = true
    el.scrollLeft = scrollLeft.current - dx * 2
  }, [])

  // Handle card click — only open modal if user didn't drag
  const handleCardClick = useCallback((index: number) => {
    if (hasMoved.current) return
    setModalIndex(index)
  }, [])

  // --- Track scroll progress for thin progress bar ---
  const updateProgress = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const scrollableWidth = el.scrollWidth - el.clientWidth
    if (scrollableWidth <= 0) {
      setScrollProgress(1)
      return
    }
    setScrollProgress(Math.min(el.scrollLeft / scrollableWidth, 1))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
    return () => el.removeEventListener('scroll', updateProgress)
  }, [updateProgress])
  // --- End scroll progress ---

  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        {showHeader && (
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-lg)',
            }}
          >
            <h2>
              <span style={{ fontWeight: 300, color: 'var(--color-text-muted)' }}>Meet the </span>
              <span style={{ fontWeight: 700, color: 'var(--color-text)' }}>Team</span>
            </h2>
          </div>
        )}

        {/* Carousel: smooth free-scroll — click, hold, drag */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: 'var(--space-md)',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: 'grab',
            paddingBottom: 'var(--space-lg)',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {team.map((member, index) => (
            <div
              key={member.name}
              style={{
                flex: '0 0 calc((100% - 3 * var(--space-md)) / 3.15)',
              }}
              className="max-md:flex-[0_0_80%]"
            >
              <TeamCardModern
                name={member.name}
                role={member.role}
                photo={member.photo}
                onOpen={() => handleCardClick(index)}
              />
            </div>
          ))}
        </div>

        {/* Thin progress bar */}
        <div
          style={{
            width: '100%',
            height: '3px',
            background: 'var(--color-border)',
            borderRadius: '4px',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${Math.max(scrollProgress * 100, 25)}%`,
              background: 'var(--color-primary)',
              borderRadius: '4px',
              transition: 'width 0.1s ease-out',
            }}
          />
        </div>
      </PageWrapper>

      {/* Modal */}
      {modalIndex !== null && (
        <TeamModal
          members={team}
          currentIndex={modalIndex}
          onClose={() => setModalIndex(null)}
          onNavigate={(index) => setModalIndex(index)}
        />
      )}
    </section>
  )
}

