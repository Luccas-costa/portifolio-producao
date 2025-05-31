import Image from 'next/image'
import shape from '../../../../public/assets/shape-login-register.png'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'
// import styles from '@/styles/register-login-gradient.module.css'

interface LoginSideProps {
  route?: string | null
}

export default function LoginSide({ route }: LoginSideProps) {
  return (
    <div className="relative flex h-full w-[450px] flex-col items-center justify-center gap-4 overflow-hidden rounded-r-2xl bg-zinc-200 screen1100:w-[550px] screen1200:w-[650px]">
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
      <Link
        style={{ zIndex: 2 }}
        href="/professional"
        className="absolute left-4 top-4 flex cursor-pointer items-center gap-1 text-lg font-medium text-black"
      >
        <ArrowLeft size={24} weight="bold" color="black" />
        <div>Voltar</div>
      </Link>
      <div
        className="text-center text-7xl font-bold text-zinc-950"
        style={{ zIndex: 2 }}
      >
        Já tem uma conta?
      </div>
      <div
        className="max-w-[35vw] text-center text-xl font-light text-zinc-950"
        style={{ zIndex: 2 }}
      >
        Se já tem uma conta? <br /> clique no botão abaixo para fazer login já
      </div>
      <Link
        href={
          route ? `/login?noIntro=true&goingTo=${route}` : '/login?noIntro=true'
        }
        className="mt-2 flex h-[50px] w-[250px] items-center justify-center rounded-xl border border-zinc-950 font-semibold text-zinc-950 transition-all duration-200 hover:bg-zinc-950 hover:text-white"
        style={{ zIndex: 2 }}
      >
        Fazer login
      </Link>
    </div>
  )
}
