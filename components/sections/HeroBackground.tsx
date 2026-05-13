// v9 Component
// Modes: A only
// Card Tier: N/A
// Decorative: 5 animated ribbons, gradient mesh, noise, vignette. Null in B/C
'use client'

import { useEffect, useState } from 'react'
import { useMode } from '@/components/layout/ModeContext'

export function HeroBackground() {
  const mode = useMode()
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Mode B/C: render nothing — no ribbons, glows, or hero gradients
  if (mode !== 'marketing') {
    return null
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Base gradient — soft warm-to-cool transition */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, #F8F9FA 0%, #F0F2F5 35%, #E8ECF2 70%, #E2E8F0 100%)',
        }}
      />

      {/* Ribbon 1 — large blue sweep, top-right */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-15%',
          width: '90%',
          height: '75%',
          borderRadius: '50% 40% 60% 45%',
          background:
            'linear-gradient(225deg, rgba(10,102,255,0.55) 0%, rgba(59,130,246,0.25) 50%, transparent 80%)',
          filter: 'blur(90px)',
          opacity: 0.9,
          transform: reducedMotion
            ? 'translate(0, 0) rotate(-12deg)'
            : undefined,
          animation: reducedMotion ? 'none' : 'ribbonDrift1 22s ease-in-out infinite alternate',
        }}
      />

      {/* Ribbon 2 — warm orange arc, mid-right */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '70%',
          height: '60%',
          borderRadius: '45% 55% 40% 60%',
          background:
            'linear-gradient(195deg, rgba(255,109,0,0.35) 0%, rgba(255,160,80,0.18) 60%, transparent 90%)',
          filter: 'blur(80px)',
          opacity: 0.85,
          transform: reducedMotion
            ? 'translate(0, 0) rotate(8deg)'
            : undefined,
          animation: reducedMotion ? 'none' : 'ribbonDrift2 18s ease-in-out infinite alternate',
        }}
      />

      {/* Ribbon 3 — cool purple-blue, bottom-right diagonal */}
      <div
        style={{
          position: 'absolute',
          bottom: '-25%',
          right: '0%',
          width: '75%',
          height: '65%',
          borderRadius: '55% 45% 50% 50%',
          background:
            'linear-gradient(165deg, rgba(99,102,241,0.28) 0%, rgba(10,102,255,0.40) 40%, transparent 75%)',
          filter: 'blur(100px)',
          opacity: 0.8,
          transform: reducedMotion
            ? 'translate(0, 0) rotate(-6deg)'
            : undefined,
          animation: reducedMotion ? 'none' : 'ribbonDrift3 26s ease-in-out infinite alternate',
        }}
      />

      {/* Ribbon 4 — soft teal accent, far right edge */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '-25%',
          width: '55%',
          height: '85%',
          borderRadius: '40% 60% 55% 45%',
          background:
            'linear-gradient(210deg, rgba(20,184,166,0.22) 0%, rgba(10,102,255,0.15) 70%, transparent 100%)',
          filter: 'blur(110px)',
          opacity: 0.75,
          transform: reducedMotion
            ? 'translate(0, 0) rotate(15deg)'
            : undefined,
          animation: reducedMotion ? 'none' : 'ribbonDrift4 20s ease-in-out infinite alternate',
        }}
      />

      {/* Ribbon 5 — warm peach highlight, upper-mid right */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '15%',
          width: '50%',
          height: '50%',
          borderRadius: '60% 40% 45% 55%',
          background:
            'linear-gradient(240deg, rgba(255,140,60,0.28) 0%, rgba(255,200,150,0.12) 50%, transparent 80%)',
          filter: 'blur(70px)',
          opacity: 0.8,
          transform: reducedMotion
            ? 'translate(0, 0) rotate(-18deg)'
            : undefined,
          animation: reducedMotion ? 'none' : 'ribbonDrift5 24s ease-in-out infinite alternate',
        }}
      />

      {/* Fine noise texture overlay for premium grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
          pointerEvents: 'none',
        }}
      />

      {/* Vignette to keep left side clean for text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(248,249,250,0.85) 0%, rgba(248,249,250,0.35) 35%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(248,249,250,0.4) 0%, transparent 25%, transparent 75%, rgba(248,249,250,0.4) 100%)',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes ribbonDrift1 {
          0%   { transform: translate(0, 0) rotate(-12deg) scale(1); }
          50%  { transform: translate(-3%, 4%) rotate(-10deg) scale(1.04); }
          100% { transform: translate(2%, -2%) rotate(-14deg) scale(0.98); }
        }
        @keyframes ribbonDrift2 {
          0%   { transform: translate(0, 0) rotate(8deg) scale(1); }
          50%  { transform: translate(4%, -3%) rotate(10deg) scale(1.03); }
          100% { transform: translate(-2%, 3%) rotate(6deg) scale(0.97); }
        }
        @keyframes ribbonDrift3 {
          0%   { transform: translate(0, 0) rotate(-6deg) scale(1); }
          50%  { transform: translate(-4%, 2%) rotate(-4deg) scale(1.05); }
          100% { transform: translate(3%, -3%) rotate(-8deg) scale(0.99); }
        }
        @keyframes ribbonDrift4 {
          0%   { transform: translate(0, 0) rotate(15deg) scale(1); }
          50%  { transform: translate(3%, 5%) rotate(17deg) scale(1.02); }
          100% { transform: translate(-3%, -2%) rotate(13deg) scale(0.96); }
        }
        @keyframes ribbonDrift5 {
          0%   { transform: translate(0, 0) rotate(-18deg) scale(1); }
          50%  { transform: translate(-2%, -4%) rotate(-16deg) scale(1.04); }
          100% { transform: translate(4%, 2%) rotate(-20deg) scale(0.98); }
        }
      `}</style>
    </div>
  )
}
