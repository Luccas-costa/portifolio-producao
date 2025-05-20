'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
// import TekoBag from '../../../../../public/projects/cardbranco.png'
// import Image from 'next/image'

export default function Carossel() {
  const cards = [
    'herobrine',
    'herobrine',
    'herobrine',
    'herobrine',
    'herobrine',
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  // Referência para aplicar overflow visível no Swiper
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      // Força overflow visível no wrapper do Swiper
      swiperRef.current.style.overflow = 'visible'
    }
  }, [])

  return (
    <a
      className="relative min-h-full w-screen overflow-visible"
      href="#professional"
    >
      <div ref={swiperRef}>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {cards.map((card, index) => {
            const isActive =
              index === activeIndex ||
              (index === 0 && activeIndex === cards.length)

            return (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center !overflow-visible transition-transform duration-300 ease-in-out"
              >
                <div
                  style={{ userSelect: 'none' }}
                  className={clsx(
                    'mt-[80px] aspect-[5/3] w-full max-w-[500px] overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle,_rgba(255,255,255,0.25),_rgba(255,255,255,0.15))] text-xl font-semibold shadow-md transition-all duration-300 ease-in-out screen1700:max-w-[570px]',
                    isActive
                      ? 'z-10 -translate-y-[50px] scale-105 opacity-80'
                      : 'translate-y-0 scale-100 opacity-60',
                  )}
                >
                  {/* <Image
                    src={TekoBag}
                    alt="herobrine"
                    fill
                    className="object-cover"
                  /> */}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </a>
  )
}
