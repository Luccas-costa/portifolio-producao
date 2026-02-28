'use client'
import React from 'react'
import GradientStripsBG from './GradientBarsBg'
import { Navbar } from './navbar'
// import MouseAnimated from '@/assets/mouse-animated'
import fonts from '@/styles/globals/fonts.module.css'
import { ArrowDownIcon, ArrowDownRightIcon } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <div
      className={`${fonts.geist} relative h-screen w-screen overflow-hidden bg-[#070B0C]`}
    >
      <div className="absolute left-1/2 top-5 z-50 -translate-x-1/2">
        <Navbar />
      </div>
      <div className="relative isolate h-screen w-screen overflow-hidden rounded-b-[100px]">
        <div className="absolute bottom-0 z-10 h-[70vh] w-full">
          <GradientStripsBG
            content={{
              stylePreset: 'soft',
              gradientFrom: 0,
              gradientTo: 100,
            }}
            layout={{
              shape: 'valley',
              direction: 'bottom-to-top',
              numBars: 13,
              angleSpread: 0,
            }}
            styleGroup={{
              backgroundColor: '#070B0C',
              showGlow: true,
              showNoise: false,
            }}
            states={{
              animationStyle: 'pulse',
              animationDuration: 5,
            }}
          />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-[90%] flex-col items-center gap-2">
        <div className="mx-auto mt-[90px] w-[160px] rounded-full border-2 border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(96,224,147,0.1),_rgba(255,255,255,0.25))] py-[6px] text-center text-base shadow-sm shadow-black/20">
          Web Developer
        </div>
        <div className="mt-8 bg-white/90 bg-clip-text text-center text-7xl text-[4.7rem] font-bold text-transparent backdrop-blur-sm">
          Redefining the Future{' '}
          <span className="bg-gradient-to-r from-[#60E093]/50 to-[#60E093] bg-clip-text text-transparent">
            one Application at a Time
          </span>
        </div>

        <div className="mt-2 w-[60%] text-center text-white/50">
          Tell us your challenge and we’ll build smart solutions using modern
          technology.
        </div>

        <div className="mt-4 flex items-center gap-10">
          <div className="group relative flex h-[60px] w-[200px] cursor-pointer items-center justify-between gap-3 rounded-full bg-white px-2 text-black transition-all duration-150 ease-out active:scale-[0.97]">
            <div className="size-[50px] rounded-full bg-neutral-900"></div>
            <div className="absolute flex h-[50px] w-[50px] items-center justify-center rounded-full bg-neutral-900 transition-all duration-300 ease-out group-hover:w-[184px] group-active:w-[184px]">
              <ArrowDownRightIcon
                size={20}
                color="white"
                weight="regular"
                className="transition-transform duration-200 ease-out group-active:rotate-12 group-active:scale-90"
              />
            </div>
            <div className="flex-1 pr-6 text-center font-semibold text-neutral-900">
              Get Started
            </div>
          </div>

          <div className="group relative flex cursor-pointer items-center gap-1 rounded-full px-4 py-2">
            <span className="relative">
              Learn more
              <span className="absolute -bottom-[2px] left-0 h-[1px] w-0 bg-white transition-all duration-200 ease-out group-hover:w-full" />
            </span>
            <ArrowDownIcon size={18} color="white" weight="bold" />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-5 left-1/2 translate-x-[-50%]">
        <MouseAnimated size={52} />
      </div> */}
    </div>
  )
}
