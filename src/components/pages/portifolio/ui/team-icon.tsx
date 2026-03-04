'use client'
import dynamic from 'next/dynamic'
import animationData from '../../../../../public/portifolio/lotties/team.json'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})

interface MouseAnimatedProps {
  size?: number
}

export default function TeamIcon({ size = 72 }: MouseAnimatedProps) {
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
