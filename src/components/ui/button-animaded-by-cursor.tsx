'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

// Lista dos ids permitidos
const allowedIds = [
  'btnAnimated1',
  'btnAnimated2',
  'btnAnimated3',
  'btnAnimated4',
  'btnAnimated5',
  'btnAnimated6',
]

// Configuração individual de padding para cada id
const paddingConfig: Record<string, { horizontal: number; vertical: number }> =
  {
    btnAnimated1: { horizontal: 0, vertical: 4 },
    btnAnimated2: { horizontal: 0, vertical: 4 },
    btnAnimated3: { horizontal: 20, vertical: 16 },
    btnAnimated4: { horizontal: 20, vertical: 16 },
    btnAnimated5: { horizontal: 20, vertical: 16 },
    btnAnimated6: { horizontal: 11, vertical: 8 },
  }

export default function ButtonAnimedByCursor() {
  const [hoverElement, setHoverElement] = useState<DOMRect | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const [cursorSize, setCursorSize] = useState({
    width: 20,
    height: 20,
    radius: '50%',
  })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (hoverElement) {
        const centerX = hoverElement.left + hoverElement.width / 2
        const centerY = hoverElement.top + hoverElement.height / 2
        mouseX.set(centerX)
        mouseY.set(centerY)
      } else {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      }
    }

    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (!target.id || !allowedIds.includes(target.id)) return

      if (target && target.getBoundingClientRect) {
        const rect = target.getBoundingClientRect()

        // Pega o padding do objeto, ou default 10 horizontal e 7 vertical
        const padding = paddingConfig[target.id] ?? {
          horizontal: 10,
          vertical: 7,
        }

        setHoverElement(rect)
        setCursorSize({
          width: rect.width + padding.horizontal,
          height: rect.height + padding.vertical,
          radius: '16px',
        })
      }
    }

    const handleLeave = () => {
      setHoverElement(null)
      setCursorSize({ width: 20, height: 20, radius: '50%' })
    }

    window.addEventListener('mousemove', move)
    allowedIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      }
    })

    return () => {
      window.removeEventListener('mousemove', move)
      allowedIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          el.removeEventListener('mouseenter', handleEnter)
          el.removeEventListener('mouseleave', handleLeave)
        }
      })
    }
  }, [hoverElement, mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.div
        animate={{
          width: cursorSize.width,
          height: cursorSize.height,
          borderRadius: cursorSize.radius,
          opacity: hoverElement ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-[#202123]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  )
}
