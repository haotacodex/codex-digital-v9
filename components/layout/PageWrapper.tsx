// v9 Component
// Modes: A
// B
// C
// Card Tier: N/A
// Decorative: max-width container
﻿// components/layout/PageWrapper.tsx

export function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      style={{
        maxWidth: 'var(--container-max)',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'var(--container-padding-x)',
        paddingRight: 'var(--container-padding-x)',
      }}
      className={className}
    >
      {children}
    </div>
  )
}
