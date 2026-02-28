import React from 'react'
import GradientStripsBG from './GradientBarsBg'

export default function AnimatedBackground() {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden bg-[#070B0C]">
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
                animationStyle: 'gentle-pulse',
                animationDuration: 3,
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-[200px] bg-[#070B0C]"></div>
      <div className="h-screen bg-[#070B0C]">
        <div className="h-screen w-screen overflow-hidden rounded-t-[100px] bg-zinc-300"></div>
      </div>
    </>
  )
}
