// v9 Component
// Modes: A
// Card Tier: N/A (slider)
// Decorative: continuous horizontal scroll
'use client'

import { useEffect, useState } from 'react'
import { useMotionValue, animate, motion } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { cn } from '@/lib/utils'

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)

  // Track hover state to change duration gracefully
  const handleHoverStart = () => {
    if (!durationOnHover) return
    setIsTransitioning(true)
    setCurrentDuration(durationOnHover)
  }

  const handleHoverEnd = () => {
    if (!durationOnHover) return
    setIsTransitioning(true)
    setCurrentDuration(duration)
  }

  useEffect(() => {
    let controls
    const size = direction === 'horizontal' ? width : height
    if (size === 0) return

    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    if (isTransitioning) {
      const distance = Math.abs(translation.get() - to)
      const transitionDuration = currentDuration * (distance / contentSize)
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prev) => prev + 1)
        },
      })
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from)
        },
      })
    }

    return () => controls?.stop()
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ])

  const hoverProps =
    durationOnHover !== undefined
      ? {
          onMouseEnter: handleHoverStart,
          onMouseLeave: handleHoverEnd,
        }
      : {}

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
