'use client'
import React, { useEffect, useRef, useState } from 'react'
import fonts from '@/styles/globals/fonts.module.css'
import { ArrowDownLeftIcon } from '@phosphor-icons/react'
import { useInView } from 'framer-motion'
import animated from '@/styles/globals/animated.module.css'
import { BolinhasClara } from './ui/bolinhas'

export default function CardsProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="mt-[120px] flex flex-col items-center gap-4">
      <div className="inline-block">
        <div
          ref={ref}
          className={`${fonts.geistmono} ${animated.typewriter} ${isInView ? animated['typewriter-animate2'] : ''} text-red-500`}
        >
          Work
        </div>
      </div>
      <div className="text-center text-5xl text-[3.5rem] font-medium text-black/20">
        I partner with small <br />
        <span className="text-black">teams with big ambition</span>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-11">
        <CardProject
          title="LaudyCardio"
          text="Medical application for real-time ECG delivery."
          link="#"
        />
        <CardProject
          title="Syscare"
          text="Application for tracking and reducing carbon footprint."
          link="#"
        />
        <CardProject
          title="MundoMadame"
          text="Platform for connecting patients and healthcare providers."
          link="#"
          full={true}
        />
      </div>
    </div>
  )
}
export const CardProject = ({
  title,
  text,
  link,
  full,
}: {
  title: string
  text: string
  link: string
  full?: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: 0, y: 0 })
  const delayed = useRef({ x: 0, y: 0 })

  const [hovered, setHovered] = useState(false)
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 })

  // suavização
  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      // velocidade da suavização (quanto menor, mais delay)
      const speed = 0.08

      delayed.current.x += (mouse.current.x - delayed.current.x) * speed
      delayed.current.y += (mouse.current.y - delayed.current.y) * speed

      setRenderPos({
        x: delayed.current.x,
        y: delayed.current.y,
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()

    mouse.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className={`${
          full ? 'h-[500px] w-[60vw]' : 'h-[500px] w-[550px]'
        } relative overflow-hidden rounded-2xl border border-zinc-300/40 bg-[#EFEFEF]`}
      >
        {hovered && (
          <div
            style={{
              left: renderPos.x,
              top: renderPos.y,
              transform: 'translate(-50%, -50%)',
            }}
            className="pointer-events-none absolute whitespace-nowrap rounded-full bg-[#F63A22] px-3 py-2 text-white"
          >
            View website
          </div>
        )}
        {/* Cantos */}
        <BolinhasClara />

        <a href={link} className="absolute inset-0" />
      </div>

      <div className="flex justify-between">
        <div className="text-lg font-medium text-black">{title}</div>
        <ArrowDownLeftIcon
          size={22}
          color="#000"
          weight="bold"
          className="outline-nome -rotate-180 border-none"
        />
      </div>

      <div className="mt-[-12px] text-black/65">{text}</div>
    </div>
  )
}
