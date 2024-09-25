import React from 'react'
import Image from 'next/image'
import Imagem from 'public/logos/logo-na-folha.jpg'

export default function Products() {
  return (
    <div className="flex h-[82vh] w-full items-end">
      <div>
        <Image src={Imagem} alt="teste" />
      </div>
    </div>
  )
}
