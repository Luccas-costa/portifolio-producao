/* eslint-disable prettier/prettier */
import React from 'react'
import MouseAnimated from '@/assets/mouse-animated'

interface HeroProps {
  isMobile: boolean
}

export default function Hero({ isMobile }: HeroProps) {
  return (
    <>
      {isMobile ? (
        <>
          <div className="relative short900and700:h-[calc(68vh+65px)] h-[68vh]">
            <div className="mx-auto mt-[90px] w-[160px] rounded-full border-2 border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_rgba(255,255,255,0.3))] py-[6px] text-center text-base shadow-sm shadow-white/20">
              Web Developer
            </div>

            <div className="pt-6 text-center text-6xl font-light screen700:text-7xl">
              Redefining the Future one
              <br />
              <span className="text-[#ff8521]">Application</span> at a Time
            </div>

            <div className="screen600:max-w-full mx-auto max-w-[95vw] pt-7 text-center text-lg font-light text-zinc-200/40">
              Creating solutions to your problems and shaping your dreams into
              reality, <br className="screen600:block hidden" /> using
              cutting-edge technology and state-of-the-art innovations
            </div>

            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
              <MouseAnimated />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative h-[68vh]">
            <div className="mx-auto mt-[90px] w-[160px] rounded-full border-2 border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_rgba(255,255,255,0.3))] py-[6px] text-center text-base shadow-sm shadow-white/20">
              Web Developer
            </div>

            <div className="pt-6 text-center text-6xl font-light screen700:text-7xl">
              Redefining the Future one
              <br />
              <span className="text-[#ff8521]">Application</span> at a Time
            </div>

            <div className="screen600:max-w-full mx-auto max-w-[95vw] pt-7 text-center text-lg font-light text-zinc-200/40">
              Creating solutions to your problems and shaping your dreams into
              reality, <br className="screen600:block hidden" /> using
              cutting-edge technology and state-of-the-art innovations
            </div>

            <div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 screen450:bottom-[100px]">
              <MouseAnimated />
            </div>
          </div>
        </>
      )}
    </>
  )
}
