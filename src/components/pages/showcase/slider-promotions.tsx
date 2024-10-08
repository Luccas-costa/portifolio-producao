'use client'
import { Truck } from '@phosphor-icons/react/dist/ssr'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SliderPromotions() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Alterna entre as divs a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
    }, 5000)

    return () => clearInterval(interval) // Limpa o intervalo quando o componente é desmontado
  }, [])

  // Variantes de animação para a div que entra
  const variants = {
    hidden: { x: '100%' }, // Inicia fora da tela à direita
    visible: { x: 0 }, // Move-se para o centro
  }

  return (
    <div
      className="relative h-[30px] w-full translate-y-[-3px] overflow-hidden"
      style={{ zIndex: 70 }}
    >
      {/* Div que está saindo (sem animação) */}
      <div
        className={`absolute left-0 top-0 flex h-[30px] w-full items-center justify-center gap-1 text-sm ${
          activeIndex === 0 ? 'bg-zinc-300' : 'bg-[#FF6262]'
        }`}
        style={{ zIndex: 0 }}
      >
        {activeIndex === 0 ? (
          <>
            <Truck size={22} /> você ganha{' '}
            <span className="font-bold">frete grátis</span> a partir de R$279{' '}
            <span className="text-xs underline">*consulte condições</span>
          </>
        ) : (
          <>
            compre no <span className="font-bold">pix</span> e ganhe{' '}
            <span className="font-bold">5%OFF</span> em todo o site
          </>
        )}
      </div>

      {/* Div que está entrando (com animação) */}
      <motion.div
        className={`absolute left-0 top-0 flex h-[30px] w-full items-center justify-center gap-1 text-sm ${
          activeIndex === 0 ? 'bg-[#FF6262]' : 'bg-zinc-300'
        }`}
        style={{ zIndex: 1 }}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
        key={activeIndex} // Novo key para reiniciar a animação a cada troca
      >
        {activeIndex === 0 ? (
          <>
            compre no <span className="font-bold">pix</span> e ganhe{' '}
            <span className="font-bold">5%OFF</span> em todo o site
          </>
        ) : (
          <>
            <Truck size={22} /> você ganha{' '}
            <span className="font-bold">frete grátis</span> a partir de R$279{' '}
            <span className="text-xs underline">*consulte condições</span>
          </>
        )}
      </motion.div>
    </div>
  )
}
