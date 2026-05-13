// v9 Component
// Modes: A
// B
// C (provides mode)
// Card Tier: N/A (Context)
// Decorative: none
// components/layout/ModeContext.tsx
// v9 Experience Mode Context
// Provides 'marketing' | 'content' | 'docs' mode to all descendant components
// Used to control decorative elements, motion intensity, and card tier behavior

'use client'

import { createContext, useContext, ReactNode } from 'react'

export type ExperienceMode = 'marketing' | 'content' | 'docs'

interface ModeContextValue {
  mode: ExperienceMode
}

const ModeContext = createContext<ModeContextValue>({ mode: 'marketing' })

export function useMode(): ExperienceMode {
  return useContext(ModeContext).mode
}

interface ModeProviderProps {
  mode: ExperienceMode
  children: ReactNode
}

export function ModeProvider({ mode, children }: ModeProviderProps) {
  return (
    <ModeContext.Provider value={{ mode }}>
      {children}
    </ModeContext.Provider>
  )
}
