'use client'
import React, { useState } from 'react'
import type { InstagramMedia } from 'types/instagram-media'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

interface InstagramFeedProps {
  feed: InstagramMedia[]
}

export default function InstagramFeed({ feed }: InstagramFeedProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imagesPerPage = 3
  const totalImages = feed.length
  const [direction, setDirection] = useState(0) // -1 para esquerda, 1 para direita

  const handleNext = () => {
    setDirection(1) // Movimentar para a direita
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
  }

  const handlePrevious = () => {
    setDirection(-1) // Movimentar para a esquerda
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : (prevIndex - 1) % totalImages,
    )
  }

  // Função para pegar as 3 imagens atuais em sequência
  const getVisibleImages = () => {
    const indices = []
    for (let i = 0; i < imagesPerPage; i++) {
      indices.push((currentIndex + i) % totalImages)
    }
    return indices.map((index) => feed[index])
  }

  const visibleImages = getVisibleImages()

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300, // Entrando pela esquerda (nova imagem entrando pela esquerda)
      opacity: 0,
    }),
    center: {
      x: 0, // Fica no centro
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300, // Saindo para a direita se direção for 1 (imagem da direita saindo)
      opacity: 0,
    }),
  }

  return (
    <div className="relative mb-[150px] flex h-[800px] w-full flex-col items-center justify-center gap-4 bg-zinc-200">
      <div className="text-4xl font-bold text-zinc-700">
        Um pouco mais sobre tekobag
      </div>
      <div className="text-xl font-medium text-zinc-500">
        Clique para ver mais e conhecer nosso Instagram e nossos conteúdos
      </div>

      {/* Setas de navegação */}
      <div className="relative flex items-center">
        <button
          onClick={handlePrevious}
          className="absolute left-0 cursor-pointer rounded-full bg-gray-500 p-2 text-white"
        >
          &#8592; {/* seta para a esquerda */}
        </button>

        <div className="flex items-center gap-10 overflow-hidden">
          {visibleImages.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-xl bg-black shadow-xl ${
                index === 1 ? 'size-[600px]' : 'size-[400px]'
              }`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <a
                href="https://www.instagram.com/tekobags/"
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0"
              >
                <Image
                  src={item.thumbnail_url || item.media_url}
                  alt={item.caption || 'Instagram media'}
                  layout="fill" // Ajusta para preencher o div
                  objectFit="cover" // Mantém a proporção da imagem
                  className="rounded-xl" // Adiciona bordas arredondadas
                />
              </a>
            </motion.div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 cursor-pointer rounded-full bg-zinc-300/50 p-2"
        >
          <CaretRight size={35} color="white" />
        </button>
      </div>
    </div>
  )
}
