'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const SCRAMBLE = ['*', '?', '!', '#', 'A', 'l', 'u', 'm', 'N', 'e', 'S', 't']

function randomChar() {
  return SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]
}

type TypeTextProps = {
  children: string
  className?: string
  duration?: number
  delay?: number
}

/**
 * Scramble-typing reveal: characters appear left-to-right with a band of
 * random glyphs ahead of the reveal frontier, then settle to the real text.
 * Layout-stable: an invisible copy of the full text reserves space.
 */
export function TypeText({ children: text, className, duration = 0.8, delay = 0 }: TypeTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduceMotion = useReducedMotion()
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setOutput(text)
      setDone(true)
      return
    }

    const len = text.length || 1
    let raf = 0
    let start: number | null = null
    let last = -Infinity
    const frameGap = 1000 / 30

    const tick = (now: number) => {
      if (start === null) start = now + delay * 1000
      const t = Math.min(Math.max((now - start) / (duration * 1000), 0), 1)

      if (now - last >= frameGap) {
        last = now
        let s = ''
        for (let i = 0; i < len; i++) {
          const pos = i / len
          if (pos <= t) {
            s += text[i]
          } else if (t > 0 && pos - t < 0.35) {
            s += text[i] === ' ' ? ' ' : randomChar()
          } else {
            break
          }
        }
        setOutput(s)
      }

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setOutput(text)
        setDone(true)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, text, duration, delay, reduceMotion])

  return (
    <span ref={ref} className={cn('relative inline-block', className)}>
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {done ? text : output}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}
