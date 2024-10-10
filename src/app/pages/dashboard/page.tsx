/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'
import Navbar from 'dashboard/navbar'

export default function Dashboard() {
  const [PageChosen, setPageChosen] = useState<
    'inicio' | 'pedidos' | 'adicionar'
  >('inicio')

  const handlerChosen = (page: 'inicio' | 'pedidos' | 'adicionar') => {
    console.log(page)
    setPageChosen(page)
  }
  return (
    <div className="relative size-full min-h-screen bg-zinc-950 text-zinc-200">
      <Navbar handlerChosen={handlerChosen} />
      <div className="mb-6 mt-4 h-[1px] w-screen bg-zinc-500 shadow-2xl" />
    </div>
  )
}
