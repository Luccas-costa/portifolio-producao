import React from 'react'
import GradientIcon from './icons/gradienteIcon'

export default function Slide6() {
  return (
    <>
      <div className="hidden aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen1400:flex">
        <GradientIcon
          width={110}
          height={110}
          d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"
        />
        <div className="py-2 text-4xl">Sempre Presente</div>
        <div className="max-w-[80%] text-center text-zinc-300">
          Suporte contínuo, garantindo que o projeto evolua junto com o cliente.
        </div>
      </div>
      <div className="hidden aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen1070:flex screen1400:hidden">
        <GradientIcon
          width={80}
          height={80}
          d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"
        />
        <div className="py-2 text-xl">Sempre Presente</div>
        <div className="max-w-[80%] text-center text-base text-zinc-300">
          Suporte contínuo, garantindo que o projeto evolua junto com o cliente.
        </div>
      </div>
      <div className="hidden aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen550:flex screen1070:hidden">
        <GradientIcon
          width={150}
          height={150}
          d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"
        />
        <div className="py-4 text-5xl">Sempre Presente</div>
        <div className="max-w-[80%] text-center text-xl text-zinc-300">
          Suporte contínuo, garantindo que o projeto evolua junto com o cliente.
        </div>
      </div>
      <div className="flex aspect-[5/3] w-full max-w-[700px] flex-col items-center justify-center screen550:hidden">
        <GradientIcon
          width={90}
          height={90}
          d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"
        />
        <div className="pb-2 text-3xl screen480:py-4">Sempre Presente</div>
        <div className="max-w-[80%] text-center text-xl text-zinc-300">
          Suporte contínuo, garantindo que o projeto evolua junto com o cliente.
        </div>
      </div>
    </>
  )
}
