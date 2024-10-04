import React, { useState } from 'react'
import {
  X,
  Star,
  Binoculars,
  ArrowRight,
  TiktokLogo,
  InstagramLogo,
  CaretRight,
} from '@phosphor-icons/react/dist/ssr'

import { useUrlBags } from '@/hooks/useUrlBags'

import Link from 'next/link'
import Image from 'next/image'

interface CardModalProps {
  id: number
  title: string
  description: string
  price: number
  Imagem: string
  variantImages: string[]
  handlerIsModalRemove: () => void
}

export default function CardModal({
  id,
  title,
  description,
  price,
  Imagem,
  handlerIsModalRemove,
  variantImages,
}: CardModalProps) {
  const [{ idBags }] = useUrlBags()

  const [selectedImage, setSelectedImage] = useState(Imagem)
  const [activeDot, setActiveDot] = useState(0) // Estado para controlar o dot ativo

  const images = [Imagem, ...variantImages] // Combina a Imagem com as variantImages

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image)
    setActiveDot(index) // Atualiza o dot ativo com base no índice clicado
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/50 transition-all duration-200">
      <div
        className="absolute inset-0 flex h-full w-full items-center justify-center"
        onClick={handlerIsModalRemove}
      ></div>
      <div className="relative flex h-[900px] w-[1500px] items-center rounded-xl bg-zinc-200">
        <div
          className="absolute left-0 top-0 flex size-[80px] translate-x-[-30%] translate-y-[-30%] cursor-pointer items-center justify-center rounded-full bg-zinc-200/90 shadow-xl"
          onClick={handlerIsModalRemove}
        >
          <X size={50} color="#52525b " />
        </div>

        <div className="flex h-full w-[150px] flex-col items-center justify-center gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="size-[100px] cursor-pointer rounded-lg border border-zinc-600/10 shadow-lg transition-all duration-200 hover:scale-110"
              onClick={() => handleImageClick(image, index)}
            >
              <Image
                src={image}
                alt={`variant-image-${index}`}
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-mediun flex items-center gap-1 text-zinc-700">
            início <CaretRight size={12} weight="regular" color="#3f3f46 " />
            bags <CaretRight size={12} weight="regular" color="#3f3f46 " />
            estampas <CaretRight
              size={12}
              weight="regular"
              color="#3f3f46 "
            />{' '}
            <span className="font-bold">{title}</span>
          </div>
          <div className="flex h-[800px] w-[720px] flex-col rounded-lg border border-zinc-800 shadow-xl">
            <div className="relative flex-1">
              <Image
                src={selectedImage}
                alt="Imagem"
                width={720}
                height={700}
              />
              <div className="absolute bottom-2 left-0 flex w-full items-center justify-center gap-1">
                {/* Renderização dos dots */}
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(images[index], index)}
                    className={`size-[12px] cursor-pointer rounded-full shadow ${
                      activeDot === index ? 'bg-zinc-700' : 'bg-zinc-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex h-[80px] border-t border-zinc-800">
              <div className="flex h-full w-1/2 cursor-pointer items-center justify-center gap-2 border-r border-zinc-800 text-xl font-medium text-[#52525b] hover:bg-zinc-300/60">
                <Binoculars size={40} color="#52525b" />
                Ver similares
              </div>
              <div className="flex h-full w-1/2 cursor-pointer items-center justify-center gap-2 text-xl font-medium text-[#52525b] hover:bg-zinc-300/60">
                <Star size={40} color="#52525b" />
                Avaliações
              </div>
            </div>
          </div>
        </div>

        <div className="ml-[20px] mt-[150px] flex h-full flex-col text-[#52525b]">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-zinc-600/50">{title}</div>
            <div className="text-4xl font-light text-zinc-600/50">|</div>
            <div className="flex items-center gap-2 text-xl font-medium underline">
              4.7 <Star size={25} color="#52525b" />
            </div>
          </div>

          <div className="pt-3 text-xs text-zinc-600/50">Código: {id}</div>

          <div className="pt-[50px] text-5xl font-bold text-zinc-700">
            R$ {price}
          </div>

          <div className="max-w-[70%] pt-[20px] text-sm font-medium text-zinc-600/50">
            {description}
          </div>

          <div className="absolute bottom-[40px] w-[30%]">
            <Link href={`/pages/vitrine/?idBags=${idBags}`}>
              <button className="flex w-full items-center justify-center gap-1 rounded-lg bg-zinc-300 py-3 hover:bg-zinc-400/40">
                <div>Levar para Compras</div>
                <ArrowRight size={25} color="#52525b" />
              </button>
            </Link>

            <div className="flex w-full items-center justify-between px-4 pt-2 text-sm">
              <div>Curtiu? Compartilhe essa peça!</div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/tekobags/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={25} color="#52525b" />
                </a>
                <a
                  href="https://www.tiktok.com/@teko.bag"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiktokLogo size={25} color="#52525b" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
