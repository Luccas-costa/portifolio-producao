'use client'
import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'

import IntroAnimationUse from 'ui/intro-tekobag/intro-animation-use'
import Feedback from 'ui/feedback'

import { CaretRight } from '@phosphor-icons/react'

import { useTaster } from '@/hooks/useTaster'
import { useCart } from '@/hooks/useCart'

import { AllBags } from '@/utils/all-bags'

import SliderPromotions from 'showcase/slider-promotions'
import Section1 from 'taster/section-1'
import Pictures from 'taster/pictures'
import Navbar from 'showcase/navbar'
import Infos from 'taster/infos'
import Footer from 'home/footer'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Taster />
    </Suspense>
  )
}

function Taster() {
  const [isintro, setIsintro] = useState(true)
  const [taster] = useTaster()
  const [cart] = useCart()

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
        <div className="bg-zinc-200 antialiased transition-all duration-200">
          <div className="relative size-full min-h-screen">
            <div style={{ zIndex: 90 }}>
              <Feedback theme="dark" />
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
              <div className="flex h-[60px] w-full items-center justify-between bg-zinc-300/50 px-[280px]">
                <div className="font-mediun flex h-full items-center gap-1 text-zinc-700">
                  <Link href={`/?bagsCart=${cart.bagsCart}`}>início </Link>
                  <CaretRight size={12} weight="regular" color="#3f3f46 " />
                  <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                    {' '}
                    bags{' '}
                  </Link>
                  <CaretRight size={12} weight="regular" color="#3f3f46 " />
                  estampas{' '}
                  <CaretRight
                    size={12}
                    weight="regular"
                    color="#3f3f46 "
                  />{' '}
                  <span className="font-bold text-zinc-600">
                    {selectedBag ? selectedBag.title : 'Item não encontrado'}
                  </span>
                </div>
                {cart.bagsCart.length > 0 ? (
                  <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                    <div className="font-medium text-zinc-700 underline">
                      Ver mais modelos
                    </div>
                  </Link>
                ) : (
                  <Link href={`showcase`}>
                    <div className="font-medium text-zinc-700 underline">
                      Ver mais modelos
                    </div>
                  </Link>
                )}
              </div>
              <div className="mt-[25px] flex gap-[20px] pl-[280px] pr-[230px]">
                <div>
                  {selectedBag ? (
                    <Pictures
                      image={selectedBag.image}
                      variantImages={selectedBag.variant_images}
                    />
                  ) : (
                    <div>Item nao encontrado</div>
                  )}
                </div>
                <div>
                  {selectedBag ? (
                    <Infos
                      title={selectedBag.title}
                      description={selectedBag?.description}
                      price={selectedBag?.price}
                      id={selectedBag?.id}
                    />
                  ) : (
                    <div>Item nao encontrado</div>
                  )}
                </div>
              </div>
              <div className="h-full w-full pt-[40px]">
                <div className="mx-auto my-[60px] h-[3px] w-[calc(100%-500px)] rounded bg-zinc-300" />
                <div className="mb-[30px]">
                  <Section1 />
                </div>
              </div>
              {cart.bagsCart.length > 0 ? (
                <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                  <div className="mb-[30px] flex h-[60px] w-full items-center justify-center bg-zinc-300/20 px-[280px]">
                    <div className="text-lg font-medium text-zinc-700 underline">
                      Ver mais modelos
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={`showcase`}>
                  <div className="mb-[30px] flex h-[60px] w-full items-center justify-center bg-zinc-300/20 px-[280px]">
                    <div className="text-lg font-medium text-zinc-700 underline">
                      Ver mais modelos
                    </div>
                  </div>
                </Link>
              )}
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
