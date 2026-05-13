// v9 Component
// Modes: A
// B
// C
// Card Tier: N/A (chip/badge)
// Decorative: accent orange glassmorphism (core brand)
// components/ui/Badge.tsx

interface BadgeProps {
  label: string
}

export function Badge({ label }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(255,109,0,0.10)',
        color: 'var(--color-accent)',
        fontSize: 'var(--text-label)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        padding: '4px 10px',
        borderRadius: 'var(--radius-sm)',
      }}
    >
      {label}
    </span>
  )
}
