/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCart } from '@/hooks/useCart'
import React from 'react'

export default function Section1() {
  const [cart, setCart] = useCart()

  const handlerNotification = () => {
    setCart((prevCart) => {
      const currentBags = prevCart.bagsCart
      const currentValue = currentBags.find(
        (value) => value.toString().slice(-5) === '99999',
      )

      // Se não houver nenhum valor com ID 99999, adicionar 199999 ao array
      if (!currentValue) {
        return {
          ...prevCart,
          bagsCart: [...currentBags, 199999],
        }
      }

      // Extrai o número de quantidade e o ID do produto (últimos 5 dígitos)
      const quantity = Math.floor(currentValue / 100000) // Primeiro dígito (quantidade)
      const productId = currentValue % 100000 // Últimos 5 dígitos (ID do produto)

      // Incrementa a quantidade
      const newQuantity = quantity + 1
      const newValue = newQuantity * 100000 + productId

      // Se o valor for maior que o limite de quantidade (9), não faz nada
      if (newQuantity > 9) {
        return prevCart
      }

      return {
        ...prevCart,
        bagsCart: currentBags.map((value) =>
          value === currentValue ? newValue : value,
        ),
      }
    })
  }

  return (
    <div className="h-[600px] w-full bg-zinc-300">
      Section1
      <button
        className="rounded-lg bg-blue-300 px-4 py-2"
        onClick={handlerNotification}
      >
        Clique
      </button>
    </div>
  )
}
