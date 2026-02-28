import Hero from '@/components/pages/portifolio/hero'
import Projects from '@/components/pages/portifolio/projects'
import React from 'react'

export default function AnimatedBackground() {
  return (
    <>
      <Hero />

      <div className="h-[200px] bg-[#070B0C]" />
      <div className="h-full bg-[#070B0C]">
        <div className="h-full w-screen overflow-hidden rounded-t-[100px] bg-[#f4f4f4]">
          <Projects />
        </div>
      </div>
    </>
  )
}
