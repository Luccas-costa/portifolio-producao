import Image from 'next/image'
import React from 'react'
import logo from '@/app/favicon.ico'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'

export default function Footer() {
  const [cart] = useCart()
  return (
    <div
      className="flex h-[30vh] w-full flex-col items-center gap-6 bg-zinc-800 px-[100px] py-[40px]"
      id="footer"
    >
      <hr className="h-[3px] w-full rounded-lg border-none bg-zinc-200" />
      <div className="flex w-full justify-between">
        <div className="max-w-[350px]">
          {cart.bagsCart.length > 0 ? (
            <Link href={`/?bagsCart=${cart.bagsCart}`}>
              <div className="flex items-center gap-2">
                <Image src={logo} alt="logo" width={80} height={80} />
                <div className="text-3xl font-bold text-white">
                  Teko Bag{"'"}s
                </div>
              </div>
            </Link>
          ) : (
            <Link href={`/`}>
              <div className="flex items-center gap-2">
                <Image src={logo} alt="logo" width={80} height={80} />
                <div className="text-3xl font-bold text-white">
                  Teko Bag{"'"}s
                </div>
              </div>
            </Link>
          )}

          <div className="pt-3 text-lg font-medium text-zinc-300">
            A sua bag sustentavel feita para o seu dia a dia e para o meio
            ambiente
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-2">
            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="text-lg font-medium text-green-700">
                  Descobrir
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="text-lg font-medium text-green-700">
                  Descobrir
                </div>
              </Link>
            )}

            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="text-lg font-medium text-zinc-200">
                  Nova temporada
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="text-lg font-medium text-zinc-200">
                  Nova temporada
                </div>
              </Link>
            )}

            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="text-lg font-medium text-zinc-200">
                  Mais pesquisados
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="text-lg font-medium text-zinc-200">
                  Mais pesquisados
                </div>
              </Link>
            )}

            {cart.bagsCart.length > 0 ? (
              <Link href={`showcase/?bagsCart=${cart.bagsCart}`}>
                <div className="text-lg font-medium text-zinc-200">
                  Mais vendidos
                </div>
              </Link>
            ) : (
              <Link href={`showcase`}>
                <div className="text-lg font-medium text-zinc-200">
                  Mais vendidos
                </div>
              </Link>
            )}
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
