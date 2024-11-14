'use client'

import IntroAnimationUse from '@/components/ui/intro-tekobag/intro-animation-use'
import Navbar from 'dashboard/navbar'
import React, { Suspense, useEffect, useState } from 'react'
import { useQueryState } from 'nuqs'
import Filters from 'dashboard/filters'
import Requested from 'dashboard/requested'
import { useFilters } from '@/hooks/useFilters'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  )
}

function Dashboard() {
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const [page, setPage] = useQueryState('page')
  const [filters, setFilters] = useFilters()

  useEffect(() => {
    if (!['inicio', 'pedidos', 'adicionar'].includes(page ?? '')) {
      setPage('inicio')
    }
  }, [page, setPage])

  const handlerChosen = (newPage: 'inicio' | 'pedidos' | 'adicionar') => {
    setPage(newPage)
  }

  const handleFilterChange = (newFilters: {
    id: string
    name: string
    status: string
  }) => {
    setFilters(newFilters)
  }

  return (
    <div>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <div className="relative size-full min-h-screen bg-zinc-900 text-zinc-200 antialiased transition-all duration-200">
          <Navbar
            page={page as 'inicio' | 'pedidos' | 'adicionar'}
            handlerChosen={handlerChosen}
          />
          <div className="mb-6 mt-4 h-[1px] w-screen bg-zinc-500 shadow-2xl" />
          {page === 'inicio' && <div>teste</div>}
          {page === 'adicionar' && <div>teste2</div>}
          {page === 'pedidos' && (
            <div>
              <div className="px-7 text-3xl font-semibold">Pedidos</div>
              <Filters filters={filters} onFilterChange={handleFilterChange} />
              <Requested filters={filters} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
