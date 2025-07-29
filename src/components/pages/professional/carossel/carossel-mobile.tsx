'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel'
import Slide1 from './slides/slide1'
import Slide2 from './slides/slide2'
import Slide3 from './slides/slide3'
import Slide4 from './slides/slide4'
import Slide5 from './slides/slide5'
import Slide6 from './slides/slide6'

export default function CarosselMobile() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = React.useState<any>(null)
  const components = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6]
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const totalSlides = 6

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="relative h-full w-full">
      <Carousel className="h-full w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="h-full">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div className="m-3 flex aspect-[5/3] w-full max-w-[700px] items-center justify-center rounded-lg bg-[radial-gradient(circle,_rgba(255,255,255,0.3),_rgba(255,255,255,0.2))] shadow-md">
                {React.createElement(components[index])}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botões de navegação */}
        {/* <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-4 top-1/2 -translate-y-1/2" /> */}
      </Carousel>

      {/* Bolinhas de indicação */}
      <div className="absolute bottom-[-10px] left-1/2 flex -translate-x-1/2 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              selectedIndex === index ? 'w-4 bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
