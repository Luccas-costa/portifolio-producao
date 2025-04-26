import React from 'react'
import MouseAnimated from '@/assets/mouse-animated'

export default function Hero() {
  return (
    <>
      <div className="screen95:h-[68vh] screen105:h-[72vh] relative h-[84vh] screen11:h-[78vh] screen11_5:h-[81vh]">
        <div className="mx-auto mt-[90px] w-[160px] rounded-full border-2 border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_rgba(255,255,255,0.3))] py-[6px] text-center text-base shadow-sm shadow-white/20">
          Web Developer
        </div>

        <div className="pt-6 text-center text-6xl font-light screen9:text-7xl">
          Redefining the Future one
          <br />
          <span className="text-[#ff8521]">Application</span> at a Time
        </div>

        <div className="mx-auto max-w-[95vw] pt-7 text-center text-lg font-light text-zinc-200/40 screen10:max-w-full">
          Creating solutions to your problems and shaping your dreams into
          reality, <br className="hidden screen10:block" /> using cutting-edge
          technology and state-of-the-art innovations
        </div>

        <div className="absolute bottom-[150px] left-1/2 -translate-x-1/2 screen11_5:bottom-[100px]">
          <MouseAnimated />
        </div>
      </div>
    </>
  )
}
