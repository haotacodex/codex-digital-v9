// v9 Component
// Modes: A
// B
// Card Tier: 1 (A)
// 2 (B)
// Decorative: 6-phase timeline
﻿'use client'

import { PageWrapper } from '@/components/layout/PageWrapper'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ClipboardList, Search, PenTool, Code, Rocket, TrendingUp } from 'lucide-react'
import type { ProcessPhase } from '@/lib/types'

interface ProcessTimelineProps {
  phases: ProcessPhase[]
}

const phaseIcons = [ClipboardList, Search, PenTool, Code, Rocket, TrendingUp]

const iconPill: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: 'var(--radius-lg)',
  background: 'rgba(10,102,255,0.08)',
  color: 'var(--color-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

export function ProcessTimeline({ phases }: ProcessTimelineProps) {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        {/* Process diagram image */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <SectionLabel label="OUR PROCESS" />
          <img
            src="/images/process/Codex_process_General.svg"
            alt="Codex Digital six-phase process diagram"
            style={{ width: '100%', maxWidth: '900px', margin: 'var(--space-md) auto 0', display: 'block' }}
          />
        </div>

        {/* Phase cards */}
        <div style={{ display: 'grid', gap: 'var(--space-md)' }} className="grid-cols-1 md:grid-cols-2">
          {phases.map((phase, i) => {
            const Icon = phaseIcons[i]
            return (
              <div
                key={phase.number}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  transition: 'transform 250ms ease, box-shadow 250ms ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top row: icon + number + name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={iconPill}>
                    <Icon size={18} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 'var(--text-caption)', fontWeight: 600, color: 'var(--color-primary)' }}>
                      Phase {phase.number}
                    </div>
                    <div style={{ fontSize: 'var(--text-h4)', fontWeight: 600, color: 'var(--color-text)' }}>
                      {phase.name}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {phase.description}
                </p>

                {/* Footer: leader + deliverable */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                  <span style={{
                    fontSize: 'var(--text-caption)',
                    fontWeight: 500,
                    color: 'var(--color-primary)',
                    background: 'rgba(10,102,255,0.06)',
                    border: '1px solid rgba(10,102,255,0.12)',
                    borderRadius: '999px',
                    padding: '4px 12px',
                  }}>
                    Led by {phase.leader}
                  </span>
                  <span style={{
                    fontSize: 'var(--text-caption)',
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '999px',
                    padding: '4px 12px',
                  }}>
                    {phase.deliverable}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </PageWrapper>
    </section>
  )
}