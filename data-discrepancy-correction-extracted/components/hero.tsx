'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const title = 'For The Tribe'

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-transparent">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pt-28 md:px-10 md:pt-36">
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Beyond Batchmates.
          <br />
          Rebuild What&apos;s Lost.
        </motion.p>

        {/* Massive display type — vertically centered, slightly below middle */}
        <div className="relative -mx-6 flex flex-1 select-none items-center overflow-hidden pt-10 md:-mx-10 md:pt-16">
          <h1
            aria-label="For The Tribe — Alumnest"
            className="w-full whitespace-nowrap text-center font-serif italic leading-[0.95] tracking-tight text-foreground [font-size:clamp(4rem,15vw,15rem)]"
          >
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                className="inline-block"
                initial={reduceMotion ? {} : { opacity: 0, y: '0.5em' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.35 + i * 0.045,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-end pb-10 md:pb-14"
        >
          <a
            href="#approach"
            className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="font-serif text-lg">Scroll</span>
            <span className="flex size-11 items-center justify-center rounded-full border border-foreground/25 transition-transform duration-300 group-hover:translate-y-1">
              <ArrowDown className="size-4" aria-hidden="true" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
