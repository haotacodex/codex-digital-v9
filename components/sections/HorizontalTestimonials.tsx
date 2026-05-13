// v9 Component
// Modes: A
// Card Tier: N/A
// Decorative: horizontal scroll, carousel
﻿'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue } from 'framer-motion'

interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

interface HorizontalTestimonialsProps {
  testimonials: Testimonial[]
  autoScrollSpeed?: number
}

export function HorizontalTestimonials({ 
  testimonials, 
  autoScrollSpeed = 40
}: HorizontalTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  
  const scrollX = useMotionValue(0)
  const scrollRef = useRef<number>(0)
  const requestRef = useRef<number | undefined>(undefined)
  const lastTimeRef = useRef<number | undefined>(undefined)
  
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
      
      const testContainer = document.createElement('div')
      testContainer.style.position = 'absolute'
      testContainer.style.left = '-9999px'
      testContainer.style.display = 'flex'
      testContainer.style.gap = 'var(--space-2xl)'
      
      testimonials.forEach(() => {
        const card = document.createElement('div')
        card.innerHTML = '<div style="padding: 48px; min-width: 320px; background: white; border-radius: 16px;">Test</div>'
        testContainer.appendChild(card)
      })
      
      document.body.appendChild(testContainer)
      setContentWidth(testContainer.scrollWidth)
      document.body.removeChild(testContainer)
    }
    
    updateWidths()
    window.addEventListener('resize', updateWidths)
    
    return () => window.removeEventListener('resize', updateWidths)
  }, [testimonials.length])

  const animate = useCallback((time: number) => {
    if (lastTimeRef.current !== undefined) {
      const deltaTime = (time - lastTimeRef.current) / 1000
      
      if (!isPaused && !isDragging && containerWidth > 0 && contentWidth > 0) {
        const speed = autoScrollSpeed * (containerWidth / 1240)
        const move = speed * deltaTime
        
        let newX = scrollRef.current - move
        
        if (newX <= -contentWidth / 2) {
          newX = 0
        }
        
        scrollRef.current = newX
        scrollX.set(newX)
      }
    }
    
    lastTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }, [autoScrollSpeed, containerWidth, contentWidth, isPaused, isDragging, scrollX])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])

  const handleDragStart = useCallback(() => {
    setIsDragging(true)
    setIsPaused(true)
  }, [])

  const handleDragEnd = useCallback(() => {
    setTimeout(() => {
      setIsDragging(false)
    }, 150)
    
    setTimeout(() => {
      setIsPaused(false)
    }, 500)
  }, [])

  const renderCards = useCallback(() => {
    return [...testimonials, ...testimonials].map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ))
  }, [testimonials])

  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        <div 
          ref={containerRef}
          style={{ 
            position: 'relative',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '80px',
              background: 'linear-gradient(to right, var(--color-bg-light), transparent)',
              zIndex: 10,
            }}
          />
          
          <div 
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '80px',
              background: 'linear-gradient(to left, var(--color-bg-light), transparent)',
              zIndex: 10,
            }}
          />

          <motion.div
            drag="x"
            dragConstraints={{ left: -contentWidth / 2, right: 0 }}
            dragElastic={0}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ 
              display: 'flex',
              gap: 'var(--space-2xl)',
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'pan-y',
              x: scrollX 
            }}
          >
            {renderCards()}
          </motion.div>
        </div>

        {!prefersReducedMotion && !isDragging && (
          <div 
            style={{
              position: 'absolute',
              bottom: 'var(--space-lg)',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0,0,0,0.05)',
              padding: '8px 16px',
              borderRadius: '100px',
              fontSize: 'var(--text-caption)',
              color: 'var(--color-text-muted)',
              opacity: 0.5,
            }}
          >
            {isPaused ? 'Paused - drag to scroll' : 'Drag to scroll • Auto-scrolling'}
          </div>
        )}
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      style={{
        minWidth: '360px',
        maxWidth: '400px',
        background: 'var(--color-bg-card)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-2xl)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-card)',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 'var(--space-md)',
          left: 'var(--space-md)',
          fontSize: '80px',
          lineHeight: 0.8,
          color: 'var(--color-primary)',
          opacity: 0.12,
          fontWeight: 700,
        }}
      >
        &ldquo;
      </div>

      <blockquote style={{ margin: 0, marginTop: 'var(--space-sm)' }}>
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(18px, 2vw, 22px)',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'var(--color-text)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {testimonial.quote}
        </p>
      </blockquote>

      <figcaption
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          marginTop: 'var(--space-lg)',
        }}
      >
        <div
          style={{
            flex: 1,
            lineHeight: 1.3,
          }}
        >
          <div
            style={{
              fontSize: 'var(--text-body)',
              fontWeight: 600,
              color: 'var(--color-text)',
            }}
          >
            {testimonial.name}
          </div>
          <div
            style={{
              fontSize: 'var(--text-caption)',
              color: 'var(--color-text-muted)',
            }}
          >
            {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ''}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
