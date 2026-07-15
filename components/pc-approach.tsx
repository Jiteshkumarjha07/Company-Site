'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const LINES = ['Spotting Alumni', 'Creating Bonds']

function Typewriter() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()
  const [text, setText] = useState<string[]>(['', ''])
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setText(LINES)
      setDone(true)
      return
    }
    let line = 0
    let char = 0
    const id = setInterval(() => {
      if (line >= LINES.length) {
        clearInterval(id)
        setDone(true)
        return
      }
      char++
      const currentLine = line
      const currentChar = char
      setText((prev) => {
        if (currentLine >= LINES.length) return prev
        const next = [...prev]
        next[currentLine] = LINES[currentLine].slice(0, currentChar)
        return next
      })
      if (char >= LINES[line].length) {
        line++
        char = 0
      }
    }, 55)
    return () => clearInterval(id)
  }, [inView, reduceMotion])

  return (
    <div ref={ref} className="font-serif text-2xl leading-snug text-foreground md:text-4xl">
      <span className="block">{text[0]}</span>
      <span className={`block ${done ? '' : 'typewriter-caret'}`}>{text[1]}</span>
    </div>
  )
}

export function PcApproach() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="approach" className="relative overflow-hidden bg-transparent py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-xl text-foreground/90 md:text-2xl"
        >
          ( Approach )
        </motion.p>

        <div className="mt-16 flex flex-col gap-8 md:mt-24 md:flex-row md:items-end md:gap-14">
          <motion.h2
            initial={reduceMotion ? {} : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif leading-none tracking-tight text-foreground [font-size:clamp(4rem,9vw,8.5rem)]"
          >
            Reconnect
          </motion.h2>
          <Typewriter />
        </div>

        <motion.p
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 max-w-2xl font-serif text-base leading-relaxed text-muted-foreground md:mt-20 md:text-lg"
        >
          We identify the true potential of every alumni community and reconstruct its
          value through verified identity and the collective intelligence of the tribe.
          As the network working behind the scenes, we create unprecedented connections
          between students, alumni, and institutions.
        </motion.p>


      </div>
    </section>
  )
}
