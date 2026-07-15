'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type SectionLabelProps = {
  children: string
  className?: string
  sub?: string
}

/**
 * Reference-style "( Heading )" section label with a staggered
 * per-character rise reveal between the parentheses.
 */
export function SectionLabel({ children, className, sub }: SectionLabelProps) {
  const reduceMotion = useReducedMotion()
  const chars = children.split('')

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="inline-flex items-baseline gap-[0.35em] font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground"
      >
        <span aria-hidden="true">{'('}</span>
        <span className="inline-block overflow-hidden" aria-label={children}>
          {chars.map((c, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="inline-block"
              variants={{
                hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: '0.9em' },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.035 },
                },
              }}
            >
              {c === ' ' ? '\u00A0' : c}
            </motion.span>
          ))}
        </span>
        <span aria-hidden="true">{')'}</span>
      </motion.span>
      {sub ? <p className="text-xs text-muted-foreground/70">{sub}</p> : null}
    </div>
  )
}
