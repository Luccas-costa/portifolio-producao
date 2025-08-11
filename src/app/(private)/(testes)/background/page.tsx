'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gradient from '@/styles/globals/gradients.module.css'

export default function Background() {
  useLayoutEffect(() => {
    const onLoad = () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to('#divGradient', {
        opacity: 0,
        scrollTrigger: {
          trigger: '#divPai',
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: true,
        },
      })
      ScrollTrigger.refresh()
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }

    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <div
      id="divPai"
      className="h-[100vh] min-h-[100vh] w-full overflow-hidden bg-black"
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
        className={`absolute top-0 h-[100vh] w-full ${gradient.teste2}`}
      ></div>
    </div>
  )
}
