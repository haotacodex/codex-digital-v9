// v9 Component
// Modes: A
// B
// C
// Card Tier: N/A (chip/tag)
// Decorative: electric blue glassmorphism (core brand)
// components/ui/Tag.tsx

interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(10,102,255,0.08)',
        color: 'var(--color-primary)',
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
