'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../public/assets/mouse_animation/animation.json'

interface MouseAnimatedProps {
  size?: number
}

export default function MouseAnimated({ size = 72 }: MouseAnimatedProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
