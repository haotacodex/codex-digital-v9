// v9 Component (Refactored)
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: tabbed filter grid, hero card, hover lift
'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import type { Service } from '@/lib/types'
import {
  Monitor, Palette, Sparkles, Smartphone,
  Box, Megaphone, Server,
} from 'lucide-react'

interface ServicesStripProps {
  heading: string
  services: Service[]
}

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'infrastructure', label: 'Infrastructure' },
] as const

type Viewport = 'mobile' | 'tablet' | 'desktop'

const serviceCategory = (slug: string): string => {
  const map: Record<string, string> = {
    'design-ux-ui': 'design',
    branding: 'design',
    'website-development': 'development',
    'custom-software': 'development',
    'mobile-apps': 'development',
    'digital-campaigns': 'marketing',
    'hosting-infrastructure': 'infrastructure',
  }
  return map[slug] ?? 'development'
}

const serviceIconMap: Record<string, React.ComponentType<{ size?: number; 'aria-hidden'?: boolean | undefined; style?: React.CSSProperties }>> = {
  'website-development': Monitor,
  'design-ux-ui': Palette,
  branding: Sparkles,
  'mobile-apps': Smartphone,
  'custom-software': Box,
  'digital-campaigns': Megaphone,
  'hosting-infrastructure': Server,
}

export function ServicesStrip({ heading, services }: ServicesStripProps) {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [animState, setAnimState] = useState<'entered' | 'leaving' | 'entering'>('entered')
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [viewport, setViewport] = useState<Viewport>('desktop')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      if (w < 768) setViewport('mobile')
      else if (w < 1024) setViewport('tablet')
      else setViewport('desktop')
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const filteredServices = useMemo(() => {
    if (activeTab === 'all') return services
    return services.filter(s => serviceCategory(s.slug) === activeTab)
  }, [activeTab, services])

  const heroService = useMemo(() => {
    if (activeTab !== 'all') return null
    return services.find(s => s.slug === 'website-development') ?? null
  }, [activeTab, services])

  const gridServices = useMemo(() => {
    if (activeTab !== 'all') return filteredServices
    return filteredServices.filter(s => s.slug !== 'website-development')
  }, [activeTab, filteredServices])

  const gridCols = viewport === 'mobile'
    ? '1fr'
    : viewport === 'tablet'
      ? 'repeat(2, minmax(0, 1fr))'
      : 'repeat(3, minmax(0, 1fr))'

  const handleTabChange = useCallback((tabId: string) => {
    if (tabId === activeTab) return
    setAnimState('leaving')
    setTimeout(() => {
      setActiveTab(tabId)
      setAnimState('entering')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimState('entered')
        })
      })
    }, 180)
  }, [activeTab])

  useEffect(() => {
    const idx = CATEGORIES.findIndex(c => c.id === activeTab)
    const el = tabRefs.current[idx]
    if (el && el.parentElement) {
      const parentRect = el.parentElement.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setIndicatorStyle({
        left: elRect.left - parentRect.left,
        width: elRect.width,
      })
    }
  }, [activeTab])

  const cardAnimStyle: React.CSSProperties = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        opacity: animState === 'entered' ? 1 : 0,
        transition: 'opacity 180ms var(--ease-standard)',
      }
    }
    switch (animState) {
      case 'leaving':
        return {
          opacity: 0,
          transform: 'translateY(8px)',
          transition: 'opacity 180ms var(--ease-standard), transform 180ms var(--ease-standard)',
        }
      case 'entering':
        return {
          opacity: 0,
          transform: 'translateY(8px)',
          transition: 'none',
        }
      default:
        return {
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'opacity 180ms var(--ease-standard), transform 180ms var(--ease-standard)',
        }
    }
  }, [animState, prefersReducedMotion])

  const renderCard = (service: Service, isHero: boolean) => {
    const IconComponent = serviceIconMap[service.slug]
    const techTags = service.tech.slice(0, 3)

    return (
      <article
        key={service.slug}
        aria-label={service.name}
        style={{
          background: 'var(--color-surface-default)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-sm)',
          ...(isHero ? { gridColumn: '1 / -1' } : {}),
          ...cardAnimStyle,
        }}
        onMouseEnter={(e) => {
          const card = e.currentTarget
          card.style.transform = 'translateY(-4px)'
          card.style.boxShadow = 'var(--shadow-md)'
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget
          card.style.transform = 'translateY(0)'
          card.style.boxShadow = 'var(--shadow-sm)'
        }}
      >
        <Link
          href={'/services/' + service.slug}
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            color: 'inherit',
            height: '100%',
          }}
        >
          {IconComponent && (
            <IconComponent
              size={24}
              aria-hidden={true}
              style={{ color: 'var(--color-primary)' }}
            />
          )}

          <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--color-text-heading)', margin: 0 }}>
            {service.name}
          </h3>

          <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
            {service.subheadline}
          </p>

          {techTags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
              {techTags.map((tech) => (
                <span key={tech} style={{ fontSize: 'var(--text-label)', color: 'var(--color-text-muted)', border: '1px solid oklch(from var(--color-text) l c h / 0.12)', borderRadius: '999px', padding: '2px 10px', lineHeight: 1.5 }}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </Link>
      </article>
    )
  }

  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <SectionLabel label="WHAT WE BUILD" />
        <h2 style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>{heading}</h2>

        <div role="tablist" aria-label="Filter services by category" style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-md)', position: 'relative', borderBottom: '1px solid var(--color-border-subtle)', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {CATEGORIES.map((cat, idx) => (
            <button key={cat.id} ref={(el) => { tabRefs.current[idx] = el }} role="tab" aria-selected={activeTab === cat.id} onClick={() => handleTabChange(cat.id)} style={{ background: 'none', border: 'none', padding: '10px 20px', fontSize: 'var(--text-body)', fontWeight: activeTab === cat.id ? 600 : 500, color: activeTab === cat.id ? 'var(--color-primary)' : 'var(--color-text-muted)', cursor: 'pointer', position: 'relative', zIndex: 1, transition: 'color var(--duration-fast) var(--ease-standard)', fontFamily: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {cat.label}
            </button>
          ))}
          <div aria-hidden={true} style={{ position: 'absolute', bottom: 0, left: indicatorStyle.left, width: indicatorStyle.width, height: '2px', background: 'var(--color-primary)', borderRadius: '1px', transition: 'left 250ms var(--ease-standard), width 250ms var(--ease-standard)', pointerEvents: 'none' }} />
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 'var(--space-sm)' }}>
          {heroService && renderCard(heroService, true)}
          {gridServices.map((service) => renderCard(service, false))}
        </div>
      </PageWrapper>
    </section>
  )
}
