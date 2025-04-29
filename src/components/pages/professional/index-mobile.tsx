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
      className={`relative min-h-screen w-screen bg-black short800and768:pt-[0px] short900and700:pt-[0px] pt-[65px] text-white`}
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
          style={{ zIndex: 3 }}
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
            className="short800and700min:translate-y-[-375px] short900and700min:translate-y-[-345px] short1024and700min:translate-y-[-315px] short800and700:translate-y-[-360px] short900and700:translate-y-[-330px] short1024and700:translate-y-[-300px] short800and650:translate-y-[-330px]  short900and650:translate-y-[-298px] short1024and650:translate-y-[-268px] short800and600:translate-y-[-299px] short900and600:translate-y-[-269px] short1024and600:translate-y-[-235px]  short800and550:translate-y-[-270px] short900and550:translate-y-[-238px] short1024and550:translate-y-[-208px] short800and500:translate-y-[-240px]  short900and500:translate-y-[-208px] short1024and500:translate-y-[-175px] short800and450:translate-y-[-210px] short900and450:translate-y-[-178px] short1024and450:translate-y-[-148px] screen670:translate-y-[-270px] screen600:translate-y-[-235px] screen550:translate-y-[-195px] screen500:translate-y-[-163px] relative translate-y-[-80px] bg-[#121212] pb-[700px] screen400:translate-y-[-103px] screen450:translate-y-[-133px]"
          >
            <div
              className={`absolute left-1/2 top-0 h-[768px] w-[180vw] translate-y-[-176px] opacity-[70%] -translate-x-1/2 rounded-[100%] border border-[#FF793F] ${styles.degrade2}`}
              style={{ zIndex: 3, clipPath: 'inset(0 0 50%  0)', }}
            ></div>

            <div
              className={`absolute right-0 translate-x-[50%] w-[500px] h-[550px] screen600:h-[800px] screen600:w-[768px] rounded-[100%] screen1200:top-[360px] top-[300px] border border-[#FF793F] bg-black ${styles.degrade2}`}
              style={{ zIndex: 1 }}
            />
            <div
              className={`absolute left-0 translate-x-[-50%] w-[500px] h-[550px] screen600:h-[800px] screen600:w-[768px] rounded-[100%] top-[1035px] border border-[#FF793F] bg-black ${styles.degrade2}`}
              style={{ zIndex: 1 }}
            />
            <div
              className={`absolute left-[158px] screen600:left-[280px] h-[100px] w-[100px] screen600:top-[1700px] screen600:h-[200px] screen600:w-[200px] rounded-[100%] top-[1523px] border border-[#FF793F] bg-black ${styles.degrade5}`}
              style={{ zIndex: 1 }}
            />
            <div 
              className="relative translate-y-[130px] screen450:translate-y-[300px]"
              style={{ zIndex: 2 }}>
              <Iphone />
            </div>
          </div>

          <div className='h-screen bg-[#121212] translate-y-[-270px]'></div>
        </div>
      </div>
    </div>
  )
}
