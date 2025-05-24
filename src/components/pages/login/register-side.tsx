import Image from 'next/image'
import shape from '../../../../public/assets/shape-login-register.png'
import React from 'react'
import Link from 'next/link'
// import styles from '@/styles/register-login-gradient.module.css'

export default function RegisterSide() {
  return (
    <div className="relative flex h-[1000px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-r-2xl bg-zinc-200 screen900:h-full screen900:w-[450px] screen1100:w-[550px] screen1200:w-[650px]">
      <div
        className="absolute bottom-[-90px] left-[-1px] h-[700px] w-[700px] rotate-[173deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <div
        className="absolute right-[80px] top-[-210px] h-[700px] w-[700px] rotate-[-22deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <div
        className="text-center text-6xl font-bold text-zinc-950 screen1100:text-7xl"
        style={{ zIndex: 2 }}
      >
        Nao tem uma conta?
      </div>
      <div
        className="max-w-[80vw] text-center text-xl font-light text-zinc-950 screen900:max-w-[35vw]"
        style={{ zIndex: 2 }}
      >
        Ainda não tem uma conta? <br /> clique no botão abaixo para criar uma já
      </div>
      <Link
        href="/register?noIntro=true"
        className="mt-2 flex h-[50px] w-[250px] items-center justify-center rounded-xl border border-zinc-950 font-semibold text-zinc-950 transition-all duration-200 hover:bg-zinc-950 hover:text-white"
        style={{ zIndex: 2 }}
      >
        Cadastre-se
      </Link>
    </div>
  )
}
