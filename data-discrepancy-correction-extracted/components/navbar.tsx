'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const links = [
  { href: '/#product', label: 'Product' },
  { href: '/#institutions', label: 'For Institutions' },
  { href: '/about', label: 'About' },
  { href: '/cases', label: 'Cases' },
  { href: '/articles', label: 'Articles' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-navy-foreground/10 bg-navy/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">
            A
          </span>
          <span className="text-lg font-bold tracking-tight text-navy-foreground">Alumnest</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-navy-foreground/70 transition-colors hover:text-navy-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            render={<a href="/#download" />}
            nativeButton={false}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get the App
          </Button>
        </div>

        <button
          type="button"
          className="text-navy-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-foreground/10 bg-navy/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-foreground/80 hover:bg-navy-foreground/5 hover:text-navy-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="/#download" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get the App
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
