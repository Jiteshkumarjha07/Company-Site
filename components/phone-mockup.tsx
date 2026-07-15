import Image from 'next/image'
import { cn } from '@/lib/utils'

type PhoneMockupProps = {
  /* Placeholder screenshots — replace with real Alumnest app screenshots when available */
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({ src, alt, className, priority = false }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-navy bg-navy shadow-2xl ring-1 ring-foreground/15',
        className,
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy" />
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 60vw, 300px"
        priority={priority}
      />
    </div>
  )
}
