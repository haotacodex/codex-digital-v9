// v9 Component
// Modes: A
// Card Tier: 2 (Content Card)
// Decorative: award badges
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function AwardProof() {
  return (
    <section style={{ background: 'var(--color-bg-light)', padding: 'var(--space-xl) 0' }}>
      <PageWrapper>
        <div
          style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-lg)',
          }}
          className="lg:grid-cols-[42%_58%]"
        >
          {/* Left: award visual */}
          <div
            style={{
              background: 'linear-gradient(160deg, #14161A 0%, #1E2128 50%, #0A2E6E 200%)',
              padding: 'var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-md)',
              minHeight: '320px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle radial glow behind awards */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,109,0,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  background: 'rgba(248,249,250,0.05)',
                  border: '1px solid rgba(248,249,250,0.1)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-md)',
                  textAlign: 'center',
                  minWidth: '130px',
                }}
              >
                <div style={{ fontSize: 'var(--text-label)', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>W3 Awards</div>
                <div style={{ fontSize: 'clamp(32px, 4vw, 40px)', fontWeight: 700, color: 'var(--color-text-inverse)', marginTop: '6px', lineHeight: 1.1 }}>Gold</div>
                <div style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.45)', marginTop: '4px' }}>2018</div>
              </div>
              <div
                style={{
                  background: 'rgba(248,249,250,0.05)',
                  border: '1px solid rgba(248,249,250,0.1)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-md)',
                  textAlign: 'center',
                  minWidth: '130px',
                }}
              >
                <div style={{ fontSize: 'var(--text-label)', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Davey Awards</div>
                <div style={{ fontSize: 'clamp(32px, 4vw, 40px)', fontWeight: 700, color: 'var(--color-text-inverse)', marginTop: '6px', lineHeight: 1.1 }}>Gold</div>
                <div style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.45)', marginTop: '4px' }}>2018</div>
              </div>
            </div>
            <div style={{ fontSize: 'var(--text-caption)', color: 'rgba(248,249,250,0.35)', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              Best Website in Financial Services
            </div>
          </div>

          {/* Right: award copy */}
          <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <Badge label="GOLD W3 AWARD · GOLD DAVEY AWARD" />
            <h2 style={{ marginTop: '4px', maxWidth: '420px' }}>Multi-award winning.</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-body-lg)', lineHeight: '1.65', maxWidth: '480px' }}>
              Gold W3 and Davey Award-winning website for Qantas Super. A custom CMS platform serving 32,000 members and $7 billion AUM, built in-house by Codex Digital.
            </p>
            <div style={{ marginTop: 'var(--space-xs)' }}>
              <Button variant="secondary" href="/work/qantas-super">View the project</Button>
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
