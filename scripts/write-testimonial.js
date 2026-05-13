const fs = require('fs')

const code = `'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

interface TestimonialBlockProps {
  testimonials: Testimonial[]
  interval?: number
}

const slideVariants = {
  enter: {
    y: 16,
    opacity: 0,
    filter: 'blur(3px)',
  },
  center: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: {
    y: -16,
    opacity: 0,
    filter: 'blur(3px)',
  },
}

export function TestimonialBlock({ testimonials, interval = 6000 }: TestimonialBlockProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1
    })
  }, [testimonials.length])

  useEffect(() => {
    if (testimonials.length <= 1) return
    const timer = setInterval(() => paginate(1), interval)
    return () => clearInterval(timer)
  }, [testimonials.length, interval, paginate])

  const current = testimonials[index]
  if (!current) return null

  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel label="CLIENT VOICES" />

          {/* Editorial card with subtle surface contrast */}
          <div
            style={{
              marginTop: 'var(--space-md)',
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(32px, 5vw, 56px) clamp(28px, 4vw, 48px)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle top accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '3px',
                background: 'var(--color-primary)',
                borderRadius: '0 0 2px 2px',
                opacity: 0.6,
              }}
            />

            <div style={{ minHeight: '180px', position: 'relative' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: 'tween', duration: 0.45, ease: [0, 0, 0.2, 1] },
                    opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                    filter: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  }}
                >
                  <blockquote style={{ margin: 0 }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(20px, 2.4vw, 28px)',
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.4,
                        color: 'var(--color-text)',
                      }}
                    >
                      &ldquo;{current.quote}&rdquo;
                    </p>
                    <footer
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flexWrap: 'wrap',
                        marginTop: 'var(--space-md)',
                      }}
                    >
                      <cite
                        style={{
                          fontStyle: 'normal',
                          fontSize: 'var(--text-body)',
                          fontWeight: 600,
                          color: 'var(--color-text)',
                        }}
                      >
                        {current.name}
                      </cite>
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: 'var(--color-text-muted)',
                          flexShrink: 0,
                          opacity: 0.5,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 'var(--text-body)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {current.role}
                        {current.company && `, ${current.company}`}
                      </span>
                    </footer>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            {testimonials.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: 'var(--space-md)',
                }}
              >
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1)
                      setIndex(i)
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    style={{
                      width: i === index ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      border: 'none',
                      background: i === index ? 'var(--color-primary)' : 'var(--color-border)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
`

fs.writeFileSync('components/sections/TestimonialBlock.tsx', code, 'utf8')
console.log('TestimonialBlock.tsx written')
