'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type LineRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  paddingBottom?: string
}

/**
 * Masked line reveal: content rises up from behind an overflow-hidden mask,
 * matching the reference site's heading animation.
 *
 * The in-view trigger observes the mask (not the moving child) because the
 * translated child is fully clipped and would never intersect the viewport.
 */
export function LineReveal({ children, className, delay = 0, paddingBottom }: LineRevealProps) {
  const reduceMotion = useReducedMotion()
  const maskRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(maskRef, { once: true, margin: '-60px' })

  return (
    <span ref={maskRef} className={cn('block overflow-hidden', className)} style={{ paddingBottom }}>
      <motion.span
        className="block"
        initial={reduceMotion ? { y: 0 } : { y: '110%' }}
        animate={inView ? { y: '0%' } : {}}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

type LinesRevealProps = {
  lines: string[]
  className?: string
  lineClassName?: string
  stagger?: number
  delay?: number
}

/** Multiple stacked masked lines with stagger. */
export function LinesReveal({
  lines,
  className,
  lineClassName,
  stagger = 0.08,
  delay = 0,
}: LinesRevealProps) {
  return (
    <span className={cn('block', className)}>
      {lines.map((line, i) => (
        <LineReveal key={i} className={lineClassName} delay={delay + i * stagger}>
          {line}
        </LineReveal>
      ))}
    </span>
  )
}
