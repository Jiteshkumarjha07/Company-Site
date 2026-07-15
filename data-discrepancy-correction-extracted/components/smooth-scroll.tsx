'use client'

import { ReactLenis } from 'lenis/react'
import type { ReactNode } from 'react'

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        // Expo-out easing, matching the reference site's --ease-expo-out
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
