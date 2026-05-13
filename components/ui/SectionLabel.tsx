// v9 Component
// Modes: A
// B
// C
// Card Tier: N/A (label/divider)
// Decorative: blue accent line, thinner in B, sparing in C
// components/ui/SectionLabel.tsx

interface SectionLabelProps {
  label: string
  inverted?: boolean
}

export function SectionLabel({ label, inverted }: SectionLabelProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div
        style={{
          width: '24px',
          height: '2px',
          background: 'var(--color-primary)',
        }}
      />
      <span
        style={{
          fontSize: 'var(--text-label)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: inverted ? 'rgba(248,249,250,0.6)' : 'var(--color-text-muted)',
        }}
      >
        {label}
      </span>
    </div>
  )
}
