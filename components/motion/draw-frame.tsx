'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type DrawFrameProps = {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Decorated frame that replicates the reference site's Lottie draw-in:
 * border lines sweep around the frame, a diagonal line draws across,
 * then the content wipes into view.
 */
export function DrawFrame({ children, className, delay = 0 }: DrawFrameProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  const ease = [0.16, 1, 0.3, 1] as const
  const lineDur = reduceMotion ? 0 : 0.7
  const revealDelay = reduceMotion ? 0 : delay + 0.55

  return (
    <div ref={ref} className={cn('relative', className)}>
      {/* Frame lines */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-10 h-px w-full origin-left bg-foreground/40"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: lineDur, delay, ease }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute right-0 top-0 z-10 h-full w-px origin-top bg-foreground/40"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: lineDur, delay: delay + 0.15, ease }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-10 h-px w-full origin-right bg-foreground/40"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: lineDur, delay: delay + 0.3, ease }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-10 h-full w-px origin-bottom bg-foreground/40"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: lineDur, delay: delay + 0.45, ease }}
      />
      {/* Diagonal accent line */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 z-10 size-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <motion.line
          x1="0"
          y1="100"
          x2="100"
          y2="0"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-foreground/25"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: delay + 0.2, ease: 'easeInOut' }}
        />
      </svg>
      {/* Content wipe reveal */}
      <motion.div
        className="relative"
        initial={reduceMotion ? { opacity: 1 } : { clipPath: 'inset(0 100% 0 0)' }}
        animate={inView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
        transition={{ duration: reduceMotion ? 0 : 0.9, delay: revealDelay, ease }}
      >
        {children}
      </motion.div>
    </div>
  )
}
