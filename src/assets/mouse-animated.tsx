import React from 'react'

export default function MouseAnimated() {
  return (
    <div className="flex w-full items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-[72px] w-[72px] object-contain"
      >
        <source src="/assets/animationmouse3.webm" type="video/webm" />
        Seu navegador não suporta a reprodução de vídeos.
      </video>
    </div>
  )
}
