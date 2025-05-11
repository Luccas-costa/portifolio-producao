'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import styles from '@/styles/feixe-de-luz.module.css'

function useCount(to: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const progressRatio = Math.min(progress / duration, 1)
      setCount(Math.floor(progressRatio * to))

      if (progress < duration) {
        requestAnimationFrame(step)
      } else {
        setCount(to) // Ensure it ends at the exact value
      }
    }

    requestAnimationFrame(step)
  }, [to, duration, start])

  return count
}

export default function Numbers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const count1 = useCount(3, 1000, isInView)
  const count2 = useCount(1200000, 2000, isInView)
  const count3 = useCount(100, 2000, isInView)

  return (
    <div ref={ref} className="relative h-[500px] w-full screen670:h-[250px]">
      <div
        // eslint-disable-next-line prettier/prettier
        className={`relative flex h-full w-full flex-col overflow-hidden bg-[#E97511]/85 text-3xl font-black screen670:flex-row screen670:text-2xl screen768:text-3xl screen900:text-4xl ${styles.monserrat}`}
      >
        <div className="flex h-1/3 w-full items-center justify-center px-[10px] text-center screen670:h-full screen670:w-1/3">
          {count1} anos de experiência
        </div>
        <div className="flex h-1/3 w-full items-center justify-center px-[10px] text-center screen670:h-full screen670:w-1/3">
          R$ {count2.toLocaleString('pt-BR')}
        </div>
        <div className="flex h-1/3 w-full items-center justify-center px-[10px] text-center screen670:h-full screen670:w-1/3">
          + {Math.floor(count3)} de projetos
        </div>
        <div
          className={`pointer-events-none absolute h-[200%] w-[100px] rotate-[20deg] bg-white opacity-40 mix-blend-screen blur-2xl ${styles.feixe}`}
        ></div>
      </div>
      <div
        className={`relative flex h-[4px] w-full translate-y-[8px] items-center justify-center overflow-hidden bg-[#E97511]/85`}
      >
        <div
          className={`pointer-events-nones absolute h-[408%] w-[105px] translate-x-[-50px] rotate-[6deg] bg-white mix-blend-screen blur-2xl ${styles.feixe}`}
        />
      </div>
    </div>
  )
}
