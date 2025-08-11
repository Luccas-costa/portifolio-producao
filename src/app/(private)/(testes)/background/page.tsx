'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gradient from '@/styles/globals/gradients.module.css'

export default function Background() {
  const container = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.to('#divGradient', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#divPai',
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true
        },
      })

      // recalcula depois que o layout estiver pronto
      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={container}>
      <div
        id="divPai"
        className="relative min-h-[300vh] w-full overflow-hidden bg-[#08081E]"
      >
        <div id="divGradient" className="flex h-[100vh] w-full bg-[#08081E]">
          <div className={`h-[136vh] w-[50%] ${gradient.teste}`}></div>
          <div
            className={`h-[136vh] w-[50%] ${gradient.teste} [transform:rotateY(180deg)]`}
          ></div>
        </div>

        {/* <div id="divGradient2" className="flex h-[100vh] w-full bg-[#08081E]">
          <div className={`h-[136vh] w-[50%] ${gradient.testeoff}`}></div>
          <div
            className={`h-[136vh] w-[50%] ${gradient.testeoff} [transform:rotateY(180deg)]`}
          ></div>
        </div> */}

        <div
          id="sobreposicao"
          className={`pointer-events-none absolute left-0 top-0 h-[100vh] w-full ${gradient.teste2}`}
        ></div>
      </div>
    </div>
  )
}
