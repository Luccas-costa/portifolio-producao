'use client'
import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ArrowRightIcon, Plus } from '@phosphor-icons/react/dist/ssr'
import fonts from '@/styles/globals/fonts.module.css'
import animated from '@/styles/globals/animated.module.css'
import { Bolinhas } from './ui/bolinhas'
export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      className="relative mx-auto max-w-[44rem] rounded-[1rem] border border-white/10 p-12"
      style={{ background: '#ffffff0d', boxShadow: '0 1px 2px #00000012' }}
    >
      <Bolinhas />

      <div className="flex h-full w-full flex-col items-start gap-5 text-white">
        <div className="inline-block">
          <div
            ref={ref}
            className={`${fonts.geistmono} ${animated.typewriter} ${isInView ? animated['typewriter-animate3'] : ''} font-medium text-[#f63a22]`}
          >
            Mission
          </div>
        </div>
        <div className="text-xl">
          We{"'"}re in the plastic era of design. <br /> <br /> Templates, quick
          turnarounds, and cut corners leave startups with sites that look
          disposable. <br /> <br /> My goal is to do the opposite: a slower,
          more deliberate approach that builds clarity, proof, and polish into
          every page. <br /> <br /> I help startups:
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xl">
            <Plus size={14} color="#f63a22" weight="bold" />
            Build credibility
          </div>
          <div className="flex items-center gap-2 text-xl">
            <Plus size={14} color="#f63a22" weight="bold" />
            Tell their story
          </div>
          <div className="flex items-center gap-2 text-xl">
            <Plus size={14} color="#f63a22" weight="bold" />
            Get a site that lasts
          </div>
        </div>
        <div className="text-xl">
          If that sounds like what you’re after, let’s chat.
        </div>

        <div className="flex items-center gap-4">
          <div className="size-[3.5rem] rounded-full bg-white"></div>
          <div className="flex flex-col font-normal">
            <div>Lucas Costa</div>
            <div className="text-sm opacity-50">Designer & Developer</div>
          </div>
        </div>

        <div className="mt-[30px] flex items-center gap-4">
          <div className="group relative flex h-[55px] w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-b border-white bg-gradient-to-b from-[#BCBCBC] to-[#F8F8F8] font-medium text-black transition-all duration-300">
            <span className="absolute top-[14px] flex items-center justify-center gap-2 transition-all duration-300 group-hover:top-[-24px]">
              Start today <ArrowRightIcon size={16} color="black" />
            </span>
            <span className="absolute bottom-[-22px] transition-all duration-300 group-hover:bottom-[14px]">
              Get a helping hand
            </span>
          </div>
          <div className="flex h-[55px] cursor-pointer items-center justify-center rounded-full border border-white/10 px-5 font-medium text-white transition-colors duration-200">
            Book a call
          </div>
        </div>
      </div>
    </div>
  )
}
