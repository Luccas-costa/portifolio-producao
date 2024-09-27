import Image from 'next/image'
import React from 'react'
import logo from '@/app/favicon.ico'

export default function Footer() {
  return (
    <div className="flex h-[30vh] w-full flex-col items-center gap-4 bg-zinc-800 px-[100px] py-[40px]">
      <hr className="h-[3px] w-full rounded-lg border-none bg-zinc-200" />
      <div className="flex w-full justify-between">
        <div className="max-w-[350px]">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={80} height={80} />
            <div className="text-3xl font-bold text-white">Teko Bag{"'"}s</div>
          </div>
          <div className="pt-3 text-lg font-medium text-zinc-300">
            A sua bag sustentavel feita para o seu dia a dia e para o meio
            ambiente
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-green-700">Descobrir</div>
            <div className="text-lg font-medium text-zinc-200">
              Nova temporada
            </div>
            <div className="text-lg font-medium text-zinc-200">
              Mais pesquisados
            </div>
            <div className="text-lg font-medium text-zinc-200">
              Mais vendidos
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-green-700">Sobre</div>
            <div className="text-lg font-medium text-zinc-200">Ajuda</div>
            <div className="text-lg font-medium text-zinc-200">Shopping</div>
            <div className="text-lg font-medium text-zinc-200">Afiliados</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium text-green-700">Info</div>
            <div className="text-lg font-medium text-zinc-200">Contato</div>
            <div className="text-lg font-medium text-zinc-200">
              Privacy Policies
            </div>
            <div className="text-lg font-medium text-zinc-200">
              Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
