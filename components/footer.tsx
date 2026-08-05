'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUp } from 'lucide-react'

export function Footer({
  pageLink = { label: 'Next Page [ Vision & Way ]', href: '/about' },
}: {
  pageLink?: { label: string; href: string }
}) {
  const reduceMotion = useReducedMotion()

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 md:px-10">
        <p className="text-center font-serif text-sm leading-relaxed tracking-wide text-foreground/80 md:text-base">
          Beyond Batchmates.
          <br />
          Rebuild What&apos;s Lost.
        </p>

        <motion.a
          href="mailto:hello@alumnest.in"
          initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="group mt-16 text-center"
        >
          <span className="font-serif leading-none text-foreground [font-size:clamp(3.5rem,9vw,8rem)]">
            Contact us
          </span>
          <span className="mt-4 block h-px w-full bg-foreground/60 transition-colors group-hover:bg-foreground" />
        </motion.a>

        <button
          type="button"
          onClick={backToTop}
          className="group mt-20 flex flex-col items-center gap-4 text-foreground/80 transition-colors hover:text-foreground"
        >
          <span className="font-serif text-lg">Back To Top</span>
          <span className="flex size-12 items-center justify-center rounded-full border border-foreground/25 transition-transform group-hover:-translate-y-1">
            <ArrowUp className="size-4" aria-hidden="true" />
            <ArrowDown className="size-4 -ml-1 mt-2 opacity-40" aria-hidden="true" />
          </span>
        </button>

        <a href={pageLink.href} className="mt-12 font-serif text-lg text-foreground/80 transition-colors hover:text-foreground">
          {pageLink.label}
        </a>

        <nav aria-label="Footer" className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { label: 'About', href: '/about' },
            { label: 'Features', href: '/#features' },
            { label: 'The App', href: '/#app' },
            { label: 'Roadmap', href: '/#roadmap' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'Delete Account', href: '/delete-account' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-serif text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Vertical copyright like the reference */}
      <p
        className="absolute bottom-8 right-6 hidden font-serif text-xs tracking-widest text-muted-foreground md:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        &copy; {new Date().getFullYear()} Alumnest
      </p>
    </footer>
  )
}
