import React from 'react'

// export default function MouseAnimated() {
//   return (
//     <div className="flex w-full items-center justify-center">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="h-[72px] w-[72px] object-contain"
//       >
//         <source src="/assets/animationmouse.mp4" type="video/mp4" />
//         Seu navegador não suporta a reprodução de vídeos.
//       </video>
//     </div>
//   )
// }

import Image from 'next/image'

export default function MouseAnimated() {
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src="/assets/animationmouse.gif"
        width={72}
        height={72}
        alt="Animation mouse"
      />
    </div>
  )
}

// 'use client'

// import Image from 'next/image'
// import React, { useEffect, useRef, useState } from 'react'

// export default function MouseAnimated() {
//   const [currentFrame, setCurrentFrame] = useState(0)
//   const frameCount = 100 // total de frames
//   const fps = 30 // frames por segundo (ajuste se quiser)
//   const intervalRef = useRef<NodeJS.Timeout | null>(null)

//   useEffect(() => {
//     const frameDuration = 1000 / fps

//     intervalRef.current = setInterval(() => {
//       setCurrentFrame((prev) => (prev + 1) % frameCount)
//     }, frameDuration)

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//       }
//     }
//   }, [])

//   const frameNumber = String(currentFrame + 1).padStart(3, '0') // ex: '001'
//   const frameSrc = `/assets/mouse_animation/ezgif-frame-${frameNumber}.png`

//   return (
//     <div className="flex w-full items-center justify-center">
//       <Image
//         src={frameSrc}
//         alt="Mouse Animation"
//         width={72}
//         height={72}
//         style={{ objectFit: 'contain' }}
//         priority
//       />
//     </div>
//   )
// }
