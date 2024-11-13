'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Background1 from '@/assets/showcase-slides/background-1'
import Background2 from '@/assets/showcase-slides/background-2'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'

interface HeroProps {
  onSlideChange: (index: number) => void
}

const slides = [<Background1 key="slide1" />, <Background2 key="slide2" />]

export default function Hero({ onSlideChange }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Função para mudar de slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const nextSlide = (prev + 1) % slides.length
      onSlideChange(nextSlide)
      return nextSlide
    })
  }, [onSlideChange])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, isHovering])

  // Animação de transição
  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  return (
    <div
      className="relative h-[717px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute left-0 top-0 h-full w-full"
          drag="x"
          dragListener={true}
          onDragEnd={(e, { offset }) => {
            if (offset.x < -50) nextSlide()
            if (offset.x > 50) {
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length,
              )
            }
          }}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Controle de Navegação com Setas */}
      <div
        className={`pointer-events-auto absolute inset-y-0 left-0 right-0 flex items-center justify-between ${isHovering ? 'block' : 'hidden'}`}
      >
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length,
            )
          }
          className="z-10 ml-4 rounded-full bg-zinc-300/70 p-2 text-white"
        >
          <CaretLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="z-10 mr-4 rounded-full bg-zinc-300/70 p-2 text-white"
        >
          <CaretRight size={30} />
        </button>
      </div>

      {/* Localizador de Slides */}
      <div className="absolute bottom-4 flex h-full w-full items-end justify-center gap-1">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-[10px] w-[10px] rounded-full ${currentSlide === index ? 'bg-zinc-800' : 'bg-zinc-200'}`}
          />
        ))}
      </div>
    </div>
  )
}
