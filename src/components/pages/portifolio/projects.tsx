'use client'

import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import imagel from '../../../../public/portifolio/laudyF.png'
import images from '../../../../public/portifolio/testesyscare.png'
import React, { useRef } from 'react'
import Display from './display'
import fonts from '@/styles/globals/fonts.module.css'
import animated from '@/styles/globals/animated.module.css'
import styles from '@/styles/globals/gradients.module.css'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Infos from './infos'

export default function Projects() {
  const typeWriterRef = useRef(null)
  const isInView = useInView(typeWriterRef, { once: true })
  const displayRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: displayRef,
    offset: ['end 10%', 'end 0%'],
  })

  // A cor de fundo principal ainda escurece
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#f4f4f4', '#1B1B1B'],
  )

  // A opacidade do SVG também aumenta junto
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      style={{ backgroundColor }}
      className="relative flex h-full w-full flex-col items-center overflow-hidden px-[270px]"
    >
      {/* 2. Aplique a classe do módulo CSS na sobreposição */}
      <motion.div
        className={`absolute inset-0 z-0 ${styles.bgLines}`}
        style={{
          opacity: overlayOpacity,
        }}
      />

      {/* Camada de conteúdo principal (z-10) */}
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="my-[140px] text-8xl text-[7rem] font-medium text-[black]">
          Crafted websites{' '}
          <span className="text-[#C9C9C9]">for ambitious founders</span>
        </div>

        <div className="w-full">
          <div className="w-[48%] text-2xl text-black/40">
            I help startups move from vision to reality, and beyond. One hand on
            design, the other on development.
          </div>
        </div>

        <div className="flex w-full justify-end">
          <div className="mr-[150px] inline-block">
            <div
              ref={typeWriterRef}
              className={`${fonts.geistmono} ${animated.typewriter} ${isInView ? animated['typewriter-animate'] : ''} text-end text-lg font-semibold text-green-600`}
            >
              Trusted by 40+ founders
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex items-center gap-4">
            <div className="group relative flex h-[55px] w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#747474] bg-gradient-to-b from-[#282828] to-[#1D1D1D] font-medium text-white transition-all duration-300">
              <span className="absolute top-[14px] flex items-center justify-center gap-2 transition-all duration-300 group-hover:top-[-24px]">
                Start today <ArrowRightIcon size={16} color="white" />
              </span>
              <span className="absolute bottom-[-22px] transition-all duration-300 group-hover:bottom-[14px]">
                Get a helping hand
              </span>
            </div>
            <div className="flex h-[55px] cursor-pointer items-center justify-center rounded-full border border-zinc-400/40 bg-white px-5 font-medium text-neutral-900 transition-colors duration-200 hover:bg-zinc-100">
              View Pricing
            </div>
          </div>
          <div className="flex h-[70px] w-[400px] items-center gap-6">
            <Image src={imagel} width={140} height={100} alt="logo" />
            <Image src={images} width={160} height={100} alt="logo" />
          </div>
        </div>

        <div ref={displayRef} className="w-full">
          <Display />
        </div>

        <Infos />
      </div>
    </motion.div>
  )
}
