'use client'
import { useEffect, useState } from 'react'

import Feedback from 'ui/feedback'
import IntroAnimationUse from 'ui/intro-tekobag/intro-animation-use'

import Navbar from 'showcase/navbar'
import SliderPromotions from 'showcase/slider-promotions'
import { CaretRight } from '@phosphor-icons/react'
import { useTaster } from '@/hooks/useTaster'
import { AllBags } from '@/utils/all-bags'

export default function Showcase() {
  const [isintro, setIsintro] = useState(true)
  const [taster] = useTaster()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500) // 0.5 segundos

    return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
  }, [])

  const themes = ['light', 'dark']

  // Busca o item correspondente em AllBags pelo id do taster
  const selectedBag = AllBags.find((bag) => bag.id === taster.idBagsTaster)

  return (
    <>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <>
          <div className="relative size-full min-h-screen">
            <div style={{ zIndex: 90 }}>
              <Feedback />
            </div>
            {/* <Suspense fallback={<div>Loading...</div>}>
        <Aindanada />
        </Suspense> */}
            <div style={{ zIndex: 10 }}>
              <div className="absolute w-full pt-2" style={{ zIndex: 91 }}>
                <Navbar theme={themes[1]} />
              </div>
              <div className="translate-y-[3px] pt-[72px]">
                <SliderPromotions />
              </div>
              <div className="h-[60px] w-full bg-zinc-300/50 px-[280px]">
                <div className="font-mediun flex h-full items-center gap-1 text-zinc-700">
                  início{' '}
                  <CaretRight size={12} weight="regular" color="#3f3f46 " />
                  bags{' '}
                  <CaretRight size={12} weight="regular" color="#3f3f46 " />
                  estampas{' '}
                  <CaretRight
                    size={12}
                    weight="regular"
                    color="#3f3f46 "
                  />{' '}
                  <span className="font-bold">
                    {selectedBag ? selectedBag.title : 'Item não encontrado'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
