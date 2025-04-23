import React from 'react'

import Hero from '@/components/pages/professional/hero'
import { ShootingStars } from 'ui/shooting-stars'
import { StarsBackground } from 'ui/stars-background'

import styles from '@/styles/professional.module.css'
import Carousel from '@/components/pages/professional/carossel'
import Imac from './imac'
import Ipad from './ipad'

export default function IndexDesktop() {
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
            className="relative overflow-visible screen1000:left-1/2 screen1000:translate-x-[-48.5%] screen1070:left-0 screen1070:translate-x-[0%]"
          >
            <Carousel />
          </div>

          <div
            style={{ zIndex: 1 }}
            className="relative h-full translate-y-[-403px] bg-[#121212] pb-[400px] screen1070:translate-y-[-203px] screen1200:pb-0"
          >
            <div className="hidden pb-[400px] screen1200:block">
              <Imac />
            </div>
            <div className="block pb-[400px] screen1200:hidden">
              <Ipad />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
