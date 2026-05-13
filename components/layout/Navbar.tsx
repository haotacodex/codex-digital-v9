// v9 Component
// Modes: A
// B
// C
// Card Tier: N/A
// Decorative: scroll-aware, backdrop blur, mega menus
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navLinks } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { MegaMenu } from './MegaMenu'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#main-content" style={{ position: 'absolute', top: '-40px', left: '0', zIndex: 9999, padding: '8px 16px', background: 'var(--color-primary)', color: 'var(--color-text-inverse)', fontSize: 'var(--text-caption)', fontWeight: 500, transition: 'top var(--duration-fast)' }} onFocus={(e) => { e.currentTarget.style.top = '0' }} onBlur={(e) => { e.currentTarget.style.top = '-40px' }}>
        Skip to main content
      </a>
      <nav aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: scrolled ? '56px' : '64px',
          backdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
          background: scrolled ? 'rgba(248, 249, 250, 0.92)' : 'transparent',
          boxShadow: scrolled ? 'var(--shadow-navbar)' : 'none',
          transition: 'height var(--duration-base), background var(--duration-base), box-shadow var(--duration-base), backdrop-filter var(--duration-base)',
          borderBottom: scrolled ? 'none' : '1px solid rgba(0,0,0,0.04)',
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding-x)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/images/logomark.svg" alt="" width="28" height="28" style={{ display: 'block' }} />
            <span style={{ fontSize: 'var(--text-h4)', fontWeight: 700, color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Codex Digital</span>
          </Link>
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <MegaMenu
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  items={link.children}
                  isOpen={openMegaMenu === link.label}
                  onToggle={() => setOpenMegaMenu((v) => v === link.label ? null : link.label)}
                  onOpen={() => setOpenMegaMenu(link.label)}
                  onClose={() => setOpenMegaMenu(null)}
                  scrolled={scrolled}
                />
              ) : (
                <Link key={link.href} href={link.href}
                  style={{ fontSize: 'var(--text-body)', fontWeight: 500, color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color var(--duration-fast)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)' }}
                >
                  {link.label}
                </Link>
              )
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Button variant="primary" href="/start-a-project">Start a project</Button>
            </div>
          </div>
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu" aria-expanded={mobileOpen} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
            <Menu size={24} color="var(--color-text)" />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,17,20,0.7)', backdropFilter: 'blur(4px)' }} onClick={() => setMobileOpen(false)} />
          <nav aria-label="Mobile navigation" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '400px', background: 'var(--color-bg-dark)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 'var(--text-h4)', fontWeight: 700, color: 'var(--color-text-inverse)' }}>Codex Digital</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-inverse)', padding: '8px' }}>
                <X size={24} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'var(--space-lg)' }}>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setOpenMobileSubmenu((v) => v === link.label ? null : link.label)}
                      aria-expanded={openMobileSubmenu === link.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        fontSize: 'var(--text-h3)',
                        color: 'var(--color-text-inverse)',
                        textDecoration: 'none',
                        padding: '16px 0',
                        borderBottom: '1px solid var(--color-border-dark)',
                        fontWeight: 500,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        style={{
                          transform: openMobileSubmenu === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform var(--duration-base) var(--ease-standard)',
                        }}
                      />
                    </button>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateRows: openMobileSubmenu === link.label ? '1fr' : '0fr',
                        transition: 'grid-template-rows var(--duration-base) var(--ease-standard)',
                      }}
                    >
                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '8px 0 12px' }}>
                          {link.children.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => {
                                  setMobileOpen(false)
                                  setOpenMobileSubmenu(null)
                                }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  padding: '10px 12px',
                                  borderRadius: 'var(--radius-md)',
                                  textDecoration: 'none',
                                }}
                              >
                                <span
                                  style={{
                                    flexShrink: 0,
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: 'var(--radius-sm)',
                                    background: 'rgba(10,102,255,0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-primary)',
                                  }}
                                >
                                  <Icon size={16} />
                                </span>
                                <span style={{ fontSize: 'var(--text-body)', fontWeight: 500, color: 'var(--color-text-inverse)' }}>
                                  {item.title}
                                </span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontSize: 'var(--text-h3)', color: 'var(--color-text-inverse)', textDecoration: 'none', padding: '16px 0', borderBottom: '1px solid var(--color-border-dark)', fontWeight: 500 }}>
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)' }}>
              <Button variant="primary" surface="dark" href="/start-a-project" onClick={() => setMobileOpen(false)}>Start a project</Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
