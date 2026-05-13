// v9 Component
// Modes: A
// B
// Card Tier: 3 (Utility)
// Decorative: none or very subtle border
// components/ui/MetricTile.tsx

interface MetricTileProps {
  value: string
  label: string
  sub?: string
}

export function MetricTile({ value, label, sub }: MetricTileProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span
        style={{
          fontSize: 'var(--text-h2)',
          fontWeight: 700,
          color: 'var(--color-primary)',
          lineHeight: 1.1,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: 'var(--text-body)', color: 'var(--color-text)' }}>
        {label}
      </span>
      {sub && (
        <span
          style={{
            fontSize: 'var(--text-caption)',
            color: 'var(--color-text-muted)',
          }}
        >
          {sub}
        </span>
      )}
    </div>
  )
}
