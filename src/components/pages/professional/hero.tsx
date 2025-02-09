import React from 'react'
import MouseAnimated from '@/assets/mouse-animated'

export default function Hero() {
  return (
    <>
      <div className="relative h-[68vh]">
        <div className="mx-auto mt-[90px] w-[160px] rounded-full border-2 border-white/10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_rgba(255,255,255,0.3))] py-[6px] text-center text-base shadow-sm shadow-white/20">
          Web Developer
        </div>

        <div className="pt-6 text-center text-7xl font-light">
          Redefining the Future one
          <br />
          <span className="text-[#ff8521]">Application</span> at a Time
        </div>

        <div className="pt-7 text-center text-lg font-light text-zinc-200/40">
          Creating solutions to your problems and shaping your dreams into
          reality, <br /> using cutting-edge technology and state-of-the-art
          innovations
        </div>

        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2">
          <MouseAnimated />
        </div>
      </div>
    </>
  )
}
