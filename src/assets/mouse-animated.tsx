'use client'
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
//         <source src="/assets/animationmouse.webm" type="video/webm" />
//         Seu navegador não suporta a reprodução de vídeos.
//       </video>
//     </div>
//   )
// }

// export default function MouseAnimated() {
//   return (
//     <div className="flex w-full items-center justify-center">
//       <Image
//         src="/assets/animationmouse.gif"
//         width={72}
//         height={72}
//         alt="Animation mouse"
//       />
//     </div>
//   )
// }

// export default function MouseAnimated() {
//   const [currentFrame, setCurrentFrame] = useState(0)
//   const frameCount = 32 // total de frames
//   const fps = 25 // frames por segundo (ajuste se quiser)
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
//   const frameSrc = `/assets/mouse_animation/frame_${frameNumber}.png`

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

// // components/LottieAnimation.tsx
// import Lottie from 'lottie-react'
// import animationData from '../../public/assets/animation.json' // Caminho do arquivo JSON
// import React from 'react'

// export default function MouseAnimated() {
//   // const defaultOptions = {
//   //   loop: true,
//   //   autoplay: true,
//   //   animationData,
//   //   rendererSettings: {
//   //     preserveAspectRatio: 'xMidYMid slice',
//   //   },
//   // }

//   return (
//     <div>
//       <Lottie
//         loop={true}
//         animationData={animationData}
//         autoplay={true}
//         rendererSettings={{
//           preserveAspectRatio: 'xMidYMid slice',
//         }}
//         height={72}
//         width={72}
//       />
//     </div>
//   )
// }

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from '../../public/assets/mouse_animation/animation.json' // ou o caminho correto para o seu arquivo de animação

export default function MouseAnimated() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Esse código será executado apenas no cliente
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Retorna null ou um fallback enquanto o componente é carregado no servidor
    return null
  }

  return (
    <div>
      <Lottie
        loop={true}
        animationData={animationData}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
        }}
        height={72}
        width={72}
      />
    </div>
  )
}
