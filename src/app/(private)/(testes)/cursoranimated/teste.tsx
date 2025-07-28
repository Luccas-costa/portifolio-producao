'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [hoverElement, setHoverElement] = useState<DOMRect | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  // Tamanho e estilo do cursor
  const [cursorSize, setCursorSize] = useState({
    width: 20,
    height: 20,
    radius: '50%',
  })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (hoverElement) {
        // Posição central do elemento
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
      if (target && target.getBoundingClientRect) {
        const rect = target.getBoundingClientRect()
        setHoverElement(rect)
        setCursorSize({
          width: rect.width + 20, // botão + padding
          height: rect.height + 20,
          radius: '16px',
        })
      }
    }

    const handleLeave = () => {
      setHoverElement(null)
      setCursorSize({ width: 20, height: 20, radius: '50%' })
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('button, a').forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('button, a').forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
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
          opacity: hoverElement ? 1 : 0, // só aparece quando estiver sobre botão
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white/90"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  )
}

// 'use client'

// import { motion, useMotionValue, useSpring } from 'framer-motion'
// import { useEffect, useState } from 'react'

// export default function CustomCursor() {
//   const [hoverElement, setHoverElement] = useState<DOMRect | null>(null)

//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)
//   const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
//   const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

//   // Tamanho dinâmico do cursor
//   const [cursorSize, setCursorSize] = useState({
//     width: 20,
//     height: 20,
//     radius: '50%',
//   })

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       if (hoverElement) {
//         // Posição central do elemento
//         const centerX = hoverElement.left + hoverElement.width / 2
//         const centerY = hoverElement.top + hoverElement.height / 2
//         mouseX.set(centerX)
//         mouseY.set(centerY)
//       } else {
//         mouseX.set(e.clientX)
//         mouseY.set(e.clientY)
//       }
//     }

//     const handleEnter = (e: Event) => {
//       const target = e.target as HTMLElement
//       if (target && target.getBoundingClientRect) {
//         const rect = target.getBoundingClientRect()
//         setHoverElement(rect)
//         setCursorSize({
//           width: rect.width + 20, // botão + padding
//           height: rect.height + 20,
//           radius: '16px',
//         })
//       }
//     }

//     const handleLeave = () => {
//       setHoverElement(null)
//       setCursorSize({ width: 20, height: 20, radius: '50%' })
//     }

//     window.addEventListener('mousemove', move)
//     document.querySelectorAll('button, a').forEach((el) => {
//       el.addEventListener('mouseenter', handleEnter)
//       el.addEventListener('mouseleave', handleLeave)
//     })

//     return () => {
//       window.removeEventListener('mousemove', move)
//       document.querySelectorAll('button, a').forEach((el) => {
//         el.removeEventListener('mouseenter', handleEnter)
//         el.removeEventListener('mouseleave', handleLeave)
//       })
//     }
//   }, [hoverElement, mouseX, mouseY])

//   return (
//     <motion.div
//       className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
//       style={{
//         x: springX,
//         y: springY,
//       }}
//     >
//       <motion.div
//         animate={{
//           width: cursorSize.width,
//           height: cursorSize.height,
//           borderRadius: cursorSize.radius,
//         }}
//         transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//         className="bg-white/90"
//         style={{
//           transform: 'translate(-50%, -50%)',
//         }}
//       />
//     </motion.div>
//   )
// }

// 'use client'

// import { motion, AnimatePresence } from 'framer-motion'
// import { useEffect, useState } from 'react'

// export default function CustomCursor() {
//   const [hoverElement, setHoverElement] = useState<DOMRect | null>(null)

//   useEffect(() => {
//     const handleEnter = (e: Event) => {
//       const target = e.target as HTMLElement
//       if (target && target.getBoundingClientRect) {
//         const rect = target.getBoundingClientRect()
//         setHoverElement(rect)
//       }
//     }

//     const handleLeave = () => {
//       setHoverElement(null)
//     }

//     document.querySelectorAll('button, a').forEach((el) => {
//       el.addEventListener('mouseenter', handleEnter)
//       el.addEventListener('mouseleave', handleLeave)
//     })

//     return () => {
//       document.querySelectorAll('button, a').forEach((el) => {
//         el.removeEventListener('mouseenter', handleEnter)
//         el.removeEventListener('mouseleave', handleLeave)
//       })
//     }
//   }, [])

//   return (
//     <AnimatePresence>
//       {hoverElement && (
//         <motion.div
//           key="hover-highlight"
//           className="pointer-events-none fixed z-[9999]"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             top: hoverElement.top - 10, // padding extra
//             left: hoverElement.left - 10,
//             width: hoverElement.width + 20,
//             height: hoverElement.height + 20,
//             borderRadius: 16,
//           }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//           style={{
//             position: 'fixed',
//           }}
//         >
//           <div className="h-full w-full rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md" />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
