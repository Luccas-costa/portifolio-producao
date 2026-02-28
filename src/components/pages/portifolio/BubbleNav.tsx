'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const items = ['Projects', 'Gallery', 'Studio', 'Profile']

type Rect = {
  left: number
  top: number
  width: number
  height: number
}

export default function BubbleNav() {
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverRect, setHoverRect] = useState<Rect | null>(null)
  const [activeRect, setActiveRect] = useState<Rect | null>(null)

  function getRect(el: HTMLElement): Rect {
    const navRect = navRef.current!.getBoundingClientRect()
    const rect = el.getBoundingClientRect()

    return {
      left: rect.left - navRect.left,
      top: rect.top - navRect.top,
      width: rect.width,
      height: rect.height,
    }
  }

  useEffect(() => {
    const el = linkRefs.current[activeIndex]
    if (el) setActiveRect(getRect(el))
  }, [activeIndex])

  return (
    <div
      ref={navRef}
      className="relative mx-auto w-fit rounded-full border border-neutral-600 bg-gradient-to-b from-[#141414] to-[#242424] p-[4px] shadow-[inset_7px_0_7px_black]"
    >
      {/* BOLHA ATIVA */}
      {activeRect && (
        <motion.div
          className="absolute z-20 rounded-full bg-gradient-to-b from-[#f2f2f2] to-[#b3b3b3] shadow-[inset_0_1.5px_5px_#fff]"
          animate={activeRect}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}

      {/* BOLHA HOVER */}
      {hoverRect && (
        <motion.div
          className="absolute z-10 rounded-full bg-gradient-to-b from-[#3f3f3f] to-[#212121] shadow-[inset_0_1.5px_5px_#ffffff29]"
          animate={hoverRect}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* NAV */}
      <nav
        className="relative z-30 flex text-white"
        onMouseLeave={() => setHoverRect(null)}
      >
        {items.map((item, index) => (
          <a
            key={item}
            ref={(el) => {
              linkRefs.current[index] = el
            }}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setActiveIndex(index)
            }}
            onMouseEnter={() => {
              const el = linkRefs.current[index]
              if (el) setHoverRect(getRect(el))
            }}
            className={`relative px-8 py-3.5 text-[21px] transition-colors ${
              activeIndex === index ? 'text-black' : 'text-white'
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  )
}
