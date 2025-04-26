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
        <Hero />

        <div className="relative">
          <div
            style={{ zIndex: 2 }}
            className="relative translate-y-[-50px] screen9:translate-y-[140px] screen95:translate-y-[100px] screen105:translate-y-[60px] screen11:translate-y-[0px] screen11_5:translate-y-[-20px]"
          >
            <CarosselMobile />
          </div>

          <div
            style={{ zIndex: 1 }}
            className="relative translate-y-[-265px] bg-[#121212] pb-[600px] screen9:translate-y-[-270px]"
          >
            <div className="translate-y-[250px]">
              <Iphone />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
