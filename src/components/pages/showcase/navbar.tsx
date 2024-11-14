/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState, useEffect } from 'react'
import LogoTransparentBlack from 'assets/logos/logo-transparent-black'
import LogoTransparentWhite from 'assets/logos/logo-transparent-white'
import {
  HeartStraight,
  MagnifyingGlass,
  Tote,
  Camera,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAddingToCart } from '@/hooks/useAddingToCart'
import { useCart } from '@/hooks/useCart'
import InputAnimatedTypewriter from 'ui/input-animated-typewriter'
import Carrinho from 'ui/cart'

interface NavbarProps {
  theme: string
}

export default function Navbar({ theme }: NavbarProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [notification, setNotification] = useState<boolean>(false)
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
  const [animatedCloseCard, setAnimatedCloseCard] = useState<boolean>(false)

  const [addingToCart, setAddingToCart] = useAddingToCart()
  const [Cart] = useCart()

  const handlerNotification = () => {
    setNotification(true)
    setTimeout(() => {
      setNotification(false)
    }, 3000)
  }

  useEffect(() => {
    if (addingToCart.addingToCart) {
      handlerNotification()
      setAddingToCart({ addingToCart: null })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addingToCart.addingToCart])

  const handlerOpenCart = () => {
    setAnimatedCloseCard(false)
    setIsOpenCart(true)
  }
  const handlerCloseCart = () => {
    setAnimatedCloseCard(true)
    setTimeout(() => {
      setIsOpenCart(false)
    }, 500)
  }

  return (
    <div
      className={`flex h-[60px] w-full items-center justify-between px-[14vw] ${
        theme === 'light' ? 'text-zinc-200' : 'text-zinc-950'
      }`}
    >
      <div className="flex cursor-pointer items-center gap-6">
        <Link href="/">
          {theme === 'light' ? (
            <LogoTransparentWhite width={50} height={50} />
          ) : (
            <LogoTransparentBlack width={50} height={50} />
          )}
        </Link>
        <ul className={`flex items-center gap-2 text-sm font-light`}>
          <li className="cursor-pointer hover:underline">novidades</li>
          <li className="cursor-pointer hover:underline">acessórios</li>
          <li className="cursor-pointer hover:underline">temporadas</li>
          <li className="cursor-pointer hover:underline">personalize</li>
        </ul>
      </div>
      <div className="flex items-center gap-[30px]">
        <div
          className={`flex h-[32px] w-[285px] items-center justify-between rounded-lg border p-2 ${
            theme === 'light' ? 'border-zinc-200' : 'border-zinc-950'
          }`}
        >
          <InputAnimatedTypewriter theme={theme} />
          <div className="flex items-center gap-2">
            <div className="cursor-pointer">
              <MagnifyingGlass size={16} />
            </div>
            <div>|</div>
            <div className="group relative cursor-pointer">
              <Camera size={18} />

              <div className="absolute left-1/2 top-full mt-2 hidden h-[90px] w-[320px] -translate-x-1/2 translate-y-[10px] flex-col rounded-md bg-white px-2 py-1 text-center text-zinc-950 shadow-xl group-hover:flex">
                <div className="absolute left-1/2 top-0 size-[10px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-400" />
                <span className="pt-1 text-xl font-bold">novidade</span>
                <p className="text-sm">
                  tire uma foto ou procure por uma imagem da sua galeria para
                  encontrar peças similares
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="cursor-pointer text-xs font-light">entrar</div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HeartStraight size={18} weight={isHovered ? 'fill' : 'regular'} />
          </div>
          <div className="relative cursor-pointer" onClick={handlerOpenCart}>
            <Tote size={18} style={{ zIndex: 3 }} />

            {/* Exibe o contador apenas se houver itens no carrinho */}
            {Cart.bagsCart.length > 0 && (
              <div
                style={{ zIndex: 2 }}
                className="absolute left-[11px] top-[-3px] flex size-[15px] items-center justify-center rounded-full bg-zinc-400/40 text-xs"
              >
                {Math.min(Cart.bagsCart.length, 9)}
              </div>
            )}

            {notification && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="absolute left-1/2 top-full mt-2 flex h-[90px] w-[320px] -translate-x-1/2 translate-y-[10px] flex-col rounded-md bg-white px-2 py-1 text-center text-zinc-950 shadow-xl"
              >
                <div className="absolute left-1/2 top-0 size-[10px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-400" />
                <span className="pt-1 text-xl font-bold">adicionado</span>
                <p className="text-sm">
                  você adicionou uma nova peça ao se carrinho abra ele para
                  continuar
                </p>
              </motion.div>
            )}
          </div>
          {isOpenCart && (
            <div
              style={{ zIndex: 100 }}
              className="fixed inset-0 z-40 flex h-full"
              onClick={handlerCloseCart}
            >
              <Carrinho
                isOpen={isOpenCart}
                isClose={animatedCloseCard}
                handlerClose={handlerCloseCart}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
