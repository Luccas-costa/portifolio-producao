import React from 'react'
import gradient from '@/styles/globals/gradients.module.css'

interface BackgroundProps {
  Above: boolean
}

export default function Background({ Above }: BackgroundProps) {
  return (
    <>
      <div
        className={`absolute top-0 z-10 h-[100vh] w-[100vw] ${gradient.sobreposicao}`}
      ></div>
      {Above ? (
        <>
          <div
            className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradient}`}
          ></div>
          <div
            className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradient} scale-x-[-1]`}
          ></div>
        </>
      ) : (
        <>
          <div
            className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradien2}`}
          ></div>
          <div
            className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradient2} scale-x-[-1]`}
          ></div>
        </>
      )}
    </>
  )
}
