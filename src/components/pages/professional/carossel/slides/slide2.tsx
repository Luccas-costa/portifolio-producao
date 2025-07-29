import React from 'react'
import GradientIcon from './icons/gradienteIcon'

export default function Slide2() {
  return (
    <>
      <div className="hidden aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen1400:flex">
        <GradientIcon
          width={110}
          height={110}
          d="M136,120h24v16H136ZM240,64V200a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A32,32,0,0,1,48,32H64a8,8,0,0,1,8,8V56H232A8,8,0,0,1,240,64ZM56,48H48A16,16,0,0,0,32,64v84.29A31.82,31.82,0,0,1,48,144h8Zm120,88V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16H104a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16Z"
        />
        <div className="py-2 text-4xl">Desenhando o futuro</div>
        <div className="max-w-[80%] text-center text-zinc-300">
          Transformo ideias em protótipos navegáveis usando as melhores
          ferramentas de design.
        </div>
      </div>
      <div className="hidden aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen1070:flex screen1400:hidden">
        <GradientIcon
          width={80}
          height={80}
          d="M136,120h24v16H136ZM240,64V200a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A32,32,0,0,1,48,32H64a8,8,0,0,1,8,8V56H232A8,8,0,0,1,240,64ZM56,48H48A16,16,0,0,0,32,64v84.29A31.82,31.82,0,0,1,48,144h8Zm120,88V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16H104a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16Z"
        />
        <div className="py-2 text-xl">Desenhando o futuro</div>
        <div className="max-w-[80%] text-center text-base text-zinc-300">
          Transformo ideias em protótipos navegáveis usando as melhores
          ferramentas de design.
        </div>
      </div>
      <div className="hidden aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen550:flex screen1070:hidden">
        <GradientIcon
          width={150}
          height={150}
          d="M136,120h24v16H136ZM240,64V200a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A32,32,0,0,1,48,32H64a8,8,0,0,1,8,8V56H232A8,8,0,0,1,240,64ZM56,48H48A16,16,0,0,0,32,64v84.29A31.82,31.82,0,0,1,48,144h8Zm120,88V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16H104a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16Z"
        />
        <div className="py-4 text-5xl">Desenhando o futuro</div>
        <div className="max-w-[80%] text-center text-xl text-zinc-300">
          Transformo ideias em protótipos navegáveis usando as melhores
          ferramentas de design.
        </div>
      </div>
      <div className="flex aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen550:hidden">
        <GradientIcon
          width={90}
          height={90}
          d="M136,120h24v16H136ZM240,64V200a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A32,32,0,0,1,48,32H64a8,8,0,0,1,8,8V56H232A8,8,0,0,1,240,64ZM56,48H48A16,16,0,0,0,32,64v84.29A31.82,31.82,0,0,1,48,144h8Zm120,88V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16H104a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16Z"
        />
        <div className="pb-1 text-3xl screen400:pb-2 screen480:py-4">
          Desenhando o futuro
        </div>
        <div className="max-w-[98%] text-center text-base text-zinc-300 screen480:max-w-[80%] screen480:text-xl">
          Transformo ideias em protótipos navegáveis usando as melhores
          ferramentas de design.
        </div>
      </div>
    </>
  )
}
