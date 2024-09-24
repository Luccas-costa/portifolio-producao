import React from 'react'
import Image from 'next/image'

import HeroImage from 'public/background-bags.jpg'

export default function Hero() {
  return (
    <div className="h-full w-full">
      <div className="flex h-[calc(100vh-110px)] w-full items-center justify-center bg-primary px-[50px]">
        <div className="h-[99%] w-[99%] overflow-hidden">
          <Image
            src={HeroImage}
            alt="Imagem de fundo principal"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
