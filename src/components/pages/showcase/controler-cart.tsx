import LogoTransparentBlack from '@/assets/logos/logo-transparent-black'
import CardCart from 'ui/card-cart'
import React from 'react'
import { CoatHanger, Tote } from '@phosphor-icons/react/dist/ssr'
import { useCart } from '@/hooks/useCart'
import { AllBags } from '@/utils/all-bags'

interface ControlerCartProps {
  handlerClose: () => void
}

export default function ControlerCart({ handlerClose }: ControlerCartProps) {
  const [Cart, setCart] = useCart()

  const items = Cart.bagsCart
    .map((itemCode: number) => {
      const quantity = Math.floor(itemCode / 100000)
      const productId = itemCode % 100000

      const product = AllBags.find((bag) => bag.id === productId)

      return product
        ? {
            ...product,
            quantity,
          }
        : null
    })
    .filter((item) => item !== null)

  const updateCartQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedBagsCart = prevCart.bagsCart
        .map((itemCode) => {
          const id = itemCode % 100000
          return id === productId
            ? newQuantity > 0
              ? newQuantity * 100000 + id
              : null
            : itemCode
        })
        .filter((code) => code !== null) as number[]
      return { bagsCart: updatedBagsCart }
    })
  }

  return (
    <div className="flex h-full w-full flex-col p-5 pt-6 text-zinc-950">
      <div className="min-h-[65px]">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2 px-6 pt-4 text-3xl font-light">
            <Tote size={30} weight="light" color="#09090b " />
            <div>Itens</div>
          </div>
          <div className="px-5">
            <LogoTransparentBlack width={70} height={70} />
          </div>
        </div>
        <hr className="mx-3 mt-2 border border-zinc-500/80" />
      </div>

      <div className="flex max-h-[100%] flex-col gap-[20px] overflow-y-auto px-3 py-[20px]">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-zinc-500/80">
            <CoatHanger weight="thin" size={200} color="#BBBBC1" />
            <div className="text-3xl font-light">
              Sem itens por aqui <span className="text-3xl font-thin">ಥ_ಥ</span>
            </div>
          </div>
        ) : (
          items.map((item, index) => (
            <CardCart
              key={index}
              picture={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              amount={item.quantity}
              id={item.id}
              updateQuantity={updateCartQuantity}
            />
          ))
        )}
      </div>

      <div className="min-h-[100px]">
        <div className="flex items-center justify-end gap-3 pr-3 pt-4">
          <button
            onClick={handlerClose}
            className="rounded-lg bg-zinc-400/50 px-10 py-3 text-lg font-medium text-zinc-800 hover:bg-zinc-400/70 active:bg-zinc-400/70"
          >
            Fechar
          </button>
          {items.length === 0 ? (
            <div></div>
          ) : (
            <button className="rounded-lg bg-zinc-400/50 px-10 py-3 text-lg font-medium text-zinc-800 hover:bg-zinc-400/70 active:bg-zinc-400/70">
              Avançar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
