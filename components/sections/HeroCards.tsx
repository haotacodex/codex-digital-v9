// v9 Component
// Modes: A
// Card Tier: 1 (Feature Card)
// Decorative: floating metric cards
'use client'

import { useEffect, useRef, useState } from 'react'
import { Trophy } from 'lucide-react'

const serviceChips = [
  { label: 'Websites', image: '/images/work/sydney-packaging.jpg' },
  { label: 'Apps', image: '/images/work/energy-locals.jpg' },
  { label: 'Software', image: '/images/work/qantas-super.jpg' },
  { label: 'Branding', image: '/images/work/gme.jpg' },
  { label: 'Campaigns', image: '/images/work/perfection-fresh.jpg' },
  { label: 'Hosting', image: '/images/work/nautilus-marine.jpg' },
]

const defaultImage = serviceChips[0].image
const allImages = serviceChips.map((s) => s.image)

export function HeroCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [reducedMotion, setReducedMotion] = useState(false)
  const [activeImage, setActiveImage] = useState(defaultImage)
  const [isHovered, setIsHovered] = useState(false)

  /* Preload all images */
  useEffect(() => {
    allImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setOffset({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reducedMotion])

  const px = (intensity: number) => (reducedMotion ? 0 : Math.round(offset.x * intensity))
  const py = (intensity: number) => (reducedMotion ? 0 : Math.round(offset.y * intensity))

  const shift = (intensity: number, extra = ''): React.CSSProperties => ({
    transform: `${extra} translate(${px(intensity)}px, ${py(intensity)}px)`,
    transition: reducedMotion ? undefined : 'transform 0.25s ease-out',
  })

  const cardBase: React.CSSProperties = {
    background: '#FFFFFF',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-lg)',
    padding: '20px 24px',
  }

  const handleChipEnter = (image: string) => {
    setActiveImage(image)
    setIsHovered(true)
  }

  const handleChipLeave = () => {
    setActiveImage(defaultImage)
    setIsHovered(false)
  }

  const handleChipTap = (image: string) => {
    setActiveImage((prev) => (prev === image && isHovered ? defaultImage : image))
    setIsHovered((prev) => !(prev && activeImage === image))
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Card 3: Status pill — top edge, slight overlap */}
      <div className="float-slow" style={{ position: 'absolute', top: '-6px', left: '58%', zIndex: 4 }}>
        <div style={shift(10, 'translateX(-50%)')}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              fontSize: 'var(--text-caption)',
              fontWeight: 500,
              color: 'var(--color-text)',
              whiteSpace: 'nowrap',
            }}
          >
            <span className="pulse-dot" />
            Currently accepting projects
          </div>
        </div>
      </div>

      {/* Card 1: Stat — left edge, slight overlap */}
      <div className="float-mid" style={{ position: 'absolute', top: '32%', left: '-18px', zIndex: 2 }}>
        <div style={shift(14)}>
          <div style={{ ...cardBase, minWidth: '170px' }}>
            <div style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.1 }}>
              20+
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: 1.4, maxWidth: '130px' }}>
              Years building digital products
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Award — bottom right, slight overlap */}
      <div className="float-fast" style={{ position: 'absolute', bottom: '8%', right: '-20px', zIndex: 3 }}>
        <div style={shift(18)}>
          <div style={{ ...cardBase, minWidth: '150px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: 'var(--radius-md)',
              background: 'rgba(10,102,255,0.08)', color: 'var(--color-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px',
            }}>
              <Trophy size={16} />
            </div>
            <div style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.1 }}>
              2×
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'var(--color-text-muted)', marginTop: '6px', lineHeight: 1.4 }}>
              Global award winner
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Large interactive image card — hero-sized */}
      <div className="float-slow" style={{ position: 'absolute', top: '2%', left: '50%', zIndex: 1, width: '100%', maxWidth: '540px' }}>
        <div style={shift(10, 'translateX(-50%)')}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
              background: '#1a1a2e',
            }}
            onMouseLeave={handleChipLeave}
          >
            {/* Stacked image layers */}
            {allImages.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: activeImage === src ? 1 : 0,
                  transition: 'opacity 350ms ease-in-out',
                }}
              />
            ))}

            {/* Bottom gradient overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '55%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />

            {/* Glassmorphism chips */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '16px 18px 18px',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {serviceChips.slice(0, 4).map((chip) => (
                  <button
                    key={chip.label}
                    onMouseEnter={() => handleChipEnter(chip.image)}
                    onClick={() => handleChipTap(chip.image)}
                    style={{
                      fontSize: 'var(--text-caption)',
                      fontWeight: 500,
                      color: activeImage === chip.image ? '#0A1021' : '#FFFFFF',
                      background: activeImage === chip.image
                        ? 'rgba(255,255,255,0.92)'
                        : 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: activeImage === chip.image
                        ? '1px solid rgba(255,255,255,0.9)'
                        : '1px solid rgba(255,255,255,0.25)',
                      borderRadius: '999px',
                      padding: '5px 13px',
                      cursor: 'pointer',
                      transition: 'all 250ms ease',
                    }}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {serviceChips.slice(4).map((chip) => (
                  <button
                    key={chip.label}
                    onMouseEnter={() => handleChipEnter(chip.image)}
                    onClick={() => handleChipTap(chip.image)}
                    style={{
                      fontSize: 'var(--text-caption)',
                      fontWeight: 500,
                      color: activeImage === chip.image ? '#0A1021' : '#FFFFFF',
                      background: activeImage === chip.image
                        ? 'rgba(255,255,255,0.92)'
                        : 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: activeImage === chip.image
                        ? '1px solid rgba(255,255,255,0.9)'
                        : '1px solid rgba(255,255,255,0.25)',
                      borderRadius: '999px',
                      padding: '5px 13px',
                      cursor: 'pointer',
                      transition: 'all 250ms ease',
                    }}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .float-mid {
          animation: floatMid 3.2s ease-in-out infinite;
        }
        .float-fast {
          animation: floatFast 3.6s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatMid {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .pulse-dot {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00C853;
          position: relative;
        }
        .pulse-dot::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: #00C853;
          opacity: 0.4;
          animation: pulseRing 2s ease-out infinite;
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .float-slow, .float-mid, .float-fast {
            animation: none !important;
          }
          .pulse-dot::after {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
