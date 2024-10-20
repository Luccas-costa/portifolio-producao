'use client'
import { useQueryState } from 'nuqs'

import Navbar from 'dashboard/navbar'
import Filters from 'dashboard/filters'
import Requested from 'dashboard/requested'
// import Pagination from 'dashboard/pagination'
import { useState } from 'react'

export default function Dashboard() {
  const [page, setPage] = useQueryState('inicio')
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    status: '',
  })

  const handlerChosen = (page: 'inicio' | 'pedidos' | 'adicionar') => {
    console.log(page)
    setPage(page)
  }

  const handleFilterChange = (newFilters: {
    id: string
    name: string
    status: string
  }) => {
    setFilters(newFilters)
  }

  return (
    <div className="relative size-full min-h-screen bg-zinc-900 text-zinc-200">
      <Navbar handlerChosen={handlerChosen} />
      <div className="mb-6 mt-4 h-[1px] w-screen bg-zinc-500 shadow-2xl" />
      {page === 'inicio' && (
        <>
          <div>teste</div>
        </>
      )}
      {page === 'adicionar' && <div>teste2</div>}
      {page === 'pedidos' && (
        <div>
          <div className="px-7 text-3xl font-semibold">Pedidos</div>
          <Filters onFilterChange={handleFilterChange} />
          <Requested filters={filters} />
          {/* <Pagination /> */}
        </div>
      )}
    </div>
  )
}
