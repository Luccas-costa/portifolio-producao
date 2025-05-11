/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'

import { ShootingStars } from 'ui/shooting-stars'
import { StarsBackground } from 'ui/stars-background'

import styles from '@/styles/professional.module.css'
import rocket from "../../../../../public/assets/icons/astronaut/rocket.png"
import astronaut from "../../../../../public/assets/icons/astronaut/astronaut-orange.png"

import Imac from '../chatbot/imac'
import Ipad from '../chatbot/ipad'
import Hero from '../sections/hero'
import About from '../sections/about'
import Numbers from '../sections/numbers'
import Carossel from '../carossel/carossel'
import CarosselMobile from '../carossel/carossel-mobile'

export default function IndexDesktop() {
  return (
    <div
      className={`relative min-h-screen w-screen bg-black short800and865:pt-[0px] pt-[65px] text-white`}
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
      <div style={{ zIndex: 2 }} className="absolute w-full" id='professional'>
        <Hero isMobile={false} />

        <div className="relative">
          <div
            style={{ zIndex: 2 }}
            className="relative hidden translate-y-[40px] overflow-visible screen1000:left-1/2 screen1000:translate-x-[-48.5%] screen1070:block screen1070:translate-x-[-50%] screen1550:translate-x-[-48.5%]"
          >
            <Carossel />
          </div>
          <div
            style={{ zIndex: 2 }}
            className="relative flex h-full translate-y-[100px] screen1070:hidden"
          >
            <CarosselMobile />
          </div>

          <div
            style={{ zIndex: 1 }}
            className="short800and1070:translate-y-[-375px] short900and1070:translate-y-[-345px] short1024and1070:translate-y-[-315px] short800and1400min:translate-y-[-311px] short900and1400min:translate-y-[-281px] short1024and1400min:translate-y-[-251px] short800and1300min:translate-y-[-290px] short900and1300min:translate-y-[-260px] short1024and1300min:translate-y-[-230px] short800and1070min:translate-y-[-262px]  short900and1070min:translate-y-[-230px] short1024and1070min:translate-y-[-200px] relative h-full translate-y-[-270px] bg-[#121212] pb-[400px] screen1070:translate-y-[-170px] screen1200:pb-0 screen1300:translate-y-[-210px]"
          >
            <div className={`absolute right-0 translate-x-[57%] h-[800px] w-[768px] screen1200:top-[400px] top-[340px]`}>
              <Image src={astronaut} alt="Luccas" width={50} height={50} />
            </div>
            <div
              className={`absolute right-0 translate-x-[50%] h-[800px] w-[768px] rounded-[100%] screen1200:top-[360px] top-[300px] border border-[#FF793F] bg-black ${styles.degrade2}`}
              style={{ zIndex: 1 }}
            />
            <div
              className={`absolute left-0 translate-x-[-50%] h-[800px] w-[768px] rounded-[100%] top-[1035px] border border-[#FF793F] bg-black ${styles.degrade2}`}
              style={{ zIndex: 1 }}
            />
            <div
              className={`absolute left-0 screen900:translate-x-[45%] translate-x-[60%] h-[800px] w-[768px] rounded-[100%] screen900:top-[1600px] top-[1690px]`}
              style={{ zIndex: 1 }}
            >
               <Image src={rocket} alt="Luccas" width={100} height={100} />
            </div>
            <div
              className={`absolute left-[280px] h-[200px] w-[200px] rounded-[100%] top-[1700px] border border-[#FF793F] bg-black ${styles.degrade4}`}
              style={{ zIndex: 1 }}
            />
            <div style={{ zIndex: 2 }} className="relative hidden translate-y-[150px] pb-[600px] screen1200:block">
              <Imac />
            </div>
            <div style={{ zIndex: 2 }} className="relative block translate-y-[120px] pb-[400px] screen1200:hidden">
              <Ipad />
            </div>
          </div>

          <div style={{ zIndex: 2 }} className='relative h-screen bg-[#121212] screen1070:translate-y-[-210px] translate-y-[-270px]'>
            <Numbers />
            <About />
          </div>
        </div>
      </div>
    </div>
  )
}
