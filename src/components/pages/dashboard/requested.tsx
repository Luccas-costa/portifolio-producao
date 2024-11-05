import React, { useState, useEffect, Suspense } from 'react'

import { SearchPedidosBD } from '@/database/teste-pedidos'

import DashboardMain from './semnome'
import Pagination from './pagination'

import { formatDate } from '@/lib/format-date'
import { SearchPedidos } from '@/types/teste-pedidos'

interface DashboardProps {
  filters: {
    id: string
    name: string
    status: string
  }
}

export default function Dashboard({ filters }: DashboardProps) {
  const [filteredData, setFilteredData] = useState<SearchPedidos[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [refresh, setRefresh] = useState(false)
  const itemsPerPage = 11

  // Fetch data from the server when the component mounts or filters change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SearchPedidosBD({
          identificador: filters.id,
          status: filters.status,
        })
        setFilteredData(data)
        setCurrentPage(1) // Reinicia a página para 1 quando os filtros mudam
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [filters, refresh])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  // Calcula os itens da página atual
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  return (
    <div className="w-full px-6">
      <div className="flex h-[calc(100vh-254px)] w-full flex-col rounded-xl border border-zinc-500">
        <div>
          <div className="flex h-[40px] items-center border-b border-zinc-500 text-zinc-400">
            <div className="pl-[85px] text-center">Indentificador</div>
            <div className="pl-[135px] text-center">Realizado há</div>
            <div className="pl-[115px] text-center">Status</div>
            <div className="pl-[100px] text-center">Cliente</div>
            <div className="pl-[660px] text-center">Total pedido</div>
          </div>
        </div>
        <div className="flex flex-col">
          <Suspense fallback={<div>Loading...</div>}>
            {currentData.map((pedido, index) => (
              <DashboardMain
                key={pedido.identificador} // Use identificador como chave
                id={pedido.identificador}
                time={formatDate(pedido.data_pedido)} // Usa a função de formatação de data
                status={pedido.status}
                name={pedido.nome_cliente}
                price={pedido.valor.toString()}
                last={
                  index === currentData.length - 1 &&
                  (startIndex + index) % itemsPerPage === itemsPerPage - 1
                } // Ajusta a lógica para passar `last={true}` apenas para o último item da página
                handlerRefrash={() => setRefresh(!refresh)}
              />
            ))}
          </Suspense>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredData.length}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
