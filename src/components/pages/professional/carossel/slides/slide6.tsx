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
          d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l40-40,15.08-15.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41Zm-41.87,41.86L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm-25.72,34.8a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"
        />
        <div className="pb-2 text-3xl screen480:py-4">Ideias no papel</div>
        <div className="max-w-[80%] text-center text-xl text-zinc-300">
          O cliente chega até mim com sonhos e objetivos o primeiro passo para
          algo incrível.
        </div>
      </div>
    </>
  )
}
