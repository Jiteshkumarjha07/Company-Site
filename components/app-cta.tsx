'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Apple, Play, QrCode } from 'lucide-react'
import { PhoneMockup } from '@/components/phone-mockup'
import { ScrollReveal } from '@/components/scroll-reveal'

export function AppCta() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="download" className="relative overflow-hidden bg-transparent py-24 md:py-32">
      {/* Fade into the pitch-black footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 px-6 md:px-10 lg:grid-cols-2">
        <ScrollReveal>
          <p className="mb-12 font-serif text-xl text-foreground/90 md:text-2xl">( Download )</p>
          <h2 className="text-balance font-serif leading-[1.05] tracking-tight text-navy-foreground [font-size:clamp(2.75rem,5.5vw,4.5rem)]">
            Your college never has to end
          </h2>
          <p className="mt-6 max-w-md text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
            Alumnest is in final review with the App Store and Google Play. Coming soon —
            reconnect with the people who shaped your journey, wherever your career takes
            you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-foreground/30 bg-secondary/60 px-5 py-3 transition-colors hover:border-foreground/60"
            >
              <Apple className="size-6 text-navy-foreground" aria-hidden="true" />
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">
                  Coming soon to the
                </span>
                <span className="block text-sm font-bold text-navy-foreground">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-foreground/30 bg-secondary/60 px-5 py-3 transition-colors hover:border-foreground/60"
            >
              <Play className="size-6 text-navy-foreground" aria-hidden="true" />
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">
                  Coming soon to
                </span>
                <span className="block text-sm font-bold text-navy-foreground">Google Play</span>
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {/* QR code placeholder — replace with a real download QR code */}
            <span className="flex size-20 items-center justify-center border border-foreground/30 bg-secondary/60">
              <QrCode className="size-10 text-navy-foreground/70" aria-hidden="true" />
            </span>
            <p className="max-w-[180px] text-sm leading-relaxed text-muted-foreground">
              Scan to be first in line when the app goes live
            </p>
          </div>
        </ScrollReveal>

        <div className="flex justify-center">
          <motion.div
            className="w-56 md:w-64"
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <PhoneMockup
              src="/images/app-splash.png"
              alt="Alumnest app welcome screen with the tribe crest and Get Started"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
