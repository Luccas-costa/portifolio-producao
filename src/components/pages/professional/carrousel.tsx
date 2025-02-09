/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useState, useEffect } from 'react'

export function CarouselSize() {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [carouselApi, setCarouselApi] = useState<any>(null)

  useEffect(() => {
    if (!carouselApi) return
    const onSelect = () =>
      setSelectedIndex(carouselApi.selectedScrollSnap() + 1)
    carouselApi.on('select', onSelect)
    return () => carouselApi.off('select', onSelect)
  }, [carouselApi])

  return (
    <Carousel
      opts={{
        align: 'start',
        // Se desejar controle sobre o scroll (ex: suavizar), adicione as opções necessárias aqui.
        loop: false,
      }}
      setApi={setCarouselApi}
      className="w-full max-w-screen-sm"
    >
      <CarouselContent className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className={`transition-transform duration-300 ${
              index === selectedIndex ? 'translate-y-[-50px]' : ''
            }`}
          >
            <div className="p-1">
              <div
                style={{ userSelect: 'none' }}
                className="flex h-[300px] w-[calc(33vw-35px)] items-center justify-center rounded-lg bg-[radial-gradient(circle,_rgba(255,255,255,0.3),_rgba(255,255,255,0.2))]"
              >
                <span className="text-3xl font-semibold">{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
