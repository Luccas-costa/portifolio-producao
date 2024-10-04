'use client'
import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

// Estilos do Splide
import '@splidejs/splide/css'

const Teste1 = () => {
  const [activeIndex, setActiveIndex] = useState(1) // Inicializa o índice do slide ativo

  // Função para atualizar o índice ativo após a mudança de slide
  const handleSlideChange = (splide) => {
    const newIndex = splide.index
    setActiveIndex(newIndex)
  }

  return (
    <Splide
      options={{
        type: 'loop', // Tipo do slider (loop, slide, fade)
        perPage: 3, // Número de slides a serem exibidos por página
        perMove: 1, // Número de slides a serem movidos a cada clique
        gap: '1rem', // Espaço entre os slides
        pagination: false, // Desativar a paginação
        arrows: true, // Ativar as setas de navegação
        breakpoints: {
          640: {
            perPage: 1, // Ajustar o número de slides por página em telas menores
          },
          1024: {
            perPage: 2, // Ajustar em telas médias
          },
        },
      }}
      aria-label="My Favorite Images"
      onMoved={handleSlideChange} // Atualiza o índice ativo após a mudança
    >
      {Array.from({ length: 10 }, (_, index) => (
        <SplideSlide key={index}>
          <div
            className={`transition-all duration-500 ${activeIndex === index ? 'w-[600px]' : 'w-[400px]'}`}
          >
            <Image
              width={activeIndex === index ? 600 : 400} // Largura dinâmica com base na posição
              height={activeIndex === index ? 600 : 400} // Altura também igual
              src={`/test/quadrado-${index + 1}.jpg`} // Ajuste o caminho da imagem conforme necessário
              alt={`Image ${index + 1}`}
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Teste1
