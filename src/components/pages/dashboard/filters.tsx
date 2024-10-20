'use client'
import React, { useState } from 'react'
import { CaretDown, MagnifyingGlass, X } from '@phosphor-icons/react'

interface FiltersProps {
  onFilterChange: (filters: {
    id: string
    name: string
    status: string
  }) => void
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [OpenStatus, setOpenStatus] = useState(false)
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const applyFilters = () => {
    onFilterChange({ id, name, status })
  }

  const clearFilters = () => {
    setId('')
    setName('')
    setStatus('')
    onFilterChange({ id: '', name: '', status: '' })
  }

  const handleStatusClick = (statusValue: string) => {
    setStatus(statusValue)
    onFilterChange({ id, name, status: statusValue })
  }

  // const handleShowAllStatus = () => {
  //   setStatus('')
  //   onFilterChange({ id, name, status: '' })
  // }

  return (
    <div className="relative mb-4 mt-4 w-full px-7 transition-all duration-200">
      <div className="flex w-full items-center space-x-2">
        <div className="text-white">Filtros:</div>
        <input
          type="text"
          placeholder="ID do pedido"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-[200px] rounded border border-zinc-500 bg-transparent p-1 pl-2 text-white placeholder:text-zinc-300/80 focus:border-zinc-200"
        />
        <input
          type="text"
          placeholder="Nome do cliente"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[400px] rounded border border-zinc-500 bg-transparent p-1 pl-2 text-white placeholder:text-zinc-300/80 focus:border-zinc-200"
        />
        <div
          className="flex w-[170px] cursor-pointer items-center justify-between space-x-8 rounded border border-zinc-500 bg-transparent p-1 pl-2 text-zinc-200 transition-all duration-200 placeholder:text-zinc-300/80 focus:border-zinc-200"
          onClick={() => setOpenStatus(!OpenStatus)}
        >
          <div>{status || 'Todos status'}</div>
          <CaretDown
            size={18}
            weight="bold"
            color="#71717A"
            className={`transition-all duration-200 ${
              OpenStatus && 'rotate-180'
            }`}
          />
        </div>
        <div
          className="flex w-[170px] cursor-pointer items-center space-x-2 rounded bg-zinc-200/30 p-1 pl-2 text-white transition-all duration-200 placeholder:text-zinc-300/80"
          onClick={applyFilters}
        >
          <MagnifyingGlass size={18} weight="bold" color="white" />
          <div>Filtrar resultados</div>
        </div>
        <div
          className="flex w-[170px] cursor-pointer items-center space-x-2 rounded border border-zinc-700 bg-transparent p-1 pl-2 text-zinc-500 transition-all duration-200 placeholder:text-zinc-300/80"
          onClick={clearFilters}
        >
          <X size={18} weight="bold" color="#71717a  " />
          <div>Remover filtros</div>
        </div>
      </div>
      {OpenStatus && (
        <div className="absolute left-[676px] top-[40px]">
          <div className="h-[150px] w-[170px] rounded-lg bg-zinc-800 shadow-2xl">
            <div className="flex h-full w-full flex-col items-center justify-evenly">
              <div
                className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-white hover:border hover:border-zinc-500"
                onClick={() => handleStatusClick('Erro')}
              >
                <div className="mr-2 size-[8px] rounded-full bg-red-500" />
                Erro
              </div>
              <div
                className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-white hover:border hover:border-zinc-500"
                onClick={() => handleStatusClick('Pendente')}
              >
                <div className="mr-2 size-[8px] rounded-full bg-blue-300" />
                Pendente
              </div>
              <div
                className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-white hover:border hover:border-zinc-500"
                onClick={() => handleStatusClick('Enviando')}
              >
                <div className="mr-2 size-[8px] rounded-full bg-yellow-500" />
                Enviando
              </div>
              <div
                className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-white hover:border hover:border-zinc-500"
                onClick={() => handleStatusClick('Enviado')}
              >
                <div className="mr-2 size-[8px] rounded-full bg-green-500" />
                Enviado
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
