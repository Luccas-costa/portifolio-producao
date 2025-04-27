/* eslint-disable prettier/prettier */
import React from 'react'

import Hero from '@/components/pages/professional/hero'
import { ShootingStars } from 'ui/shooting-stars'
import { StarsBackground } from 'ui/stars-background'

import styles from '@/styles/professional.module.css'
import Iphone from './iphone'
import CarosselMobile from './carossel-mobile'

export default function IndexMobile() {
  return (
    <div
      className={`relative min-h-screen w-screen bg-black pt-[65px] text-white`}
    >
      {/* Background */}
      <div
        style={{ zIndex: 1, pointerEvents: 'none' }}
        className={`${styles.degradeold} absolute top-0 flex h-screen w-full flex-col items-center overflow-hidden`}
      >
        <ShootingStars />
        <StarsBackground />
        <div
          className={`absolute left-1/2 top-[calc(100%-180px)] h-[768px] w-[180vw] -translate-x-1/2 rounded-[100%] border border-[#FF793F] bg-black ${styles.degrade2}`}
          style={{ zIndex: 1 }}
        ></div>
      </div>

      {/* Conteudo */}
      <div style={{ zIndex: 2 }} className="absolute w-full">
        <Hero isMobile={true} />

        <div className="relative">
          <div
            style={{ zIndex: 2 }}
            className="relative translate-y-[120px] screen450:translate-y-[140px]"
          >
            <CarosselMobile />
          </div>

          <div
            style={{ zIndex: 1 }}
            className="short1024and700min:translate-y-[-315px] short1024and700:translate-y-[-300px] short1024and650:translate-y-[-268px] short1024and600:translate-y-[-235px]  short1024and550:translate-y-[-208px] short1024and500:translate-y-[-175px] short1024and450:translate-y-[-148px] screen670:translate-y-[-270px] screen600:translate-y-[-235px] screen550:translate-y-[-195px] screen500:translate-y-[-163px] relative translate-y-[-80px] bg-[#121212] pb-[700px] screen400:translate-y-[-103px] screen450:translate-y-[-133px]"
          >
            <div className="translate-y-[130px] screen450:translate-y-[300px]">
              <Iphone />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
