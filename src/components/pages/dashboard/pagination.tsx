import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react'
import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number // Recebe o número total de itens
  onPageChange: (page: number) => void
}

export default function DashboardPagination({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-4 flex items-center justify-between px-7">
      <div className="text-sm text-zinc-400">Total de {totalItems} item(s)</div>
      <div className="flex items-center space-x-6">
        <div className="text-sm text-white">
          Página {currentPage} de {totalPages}
        </div>
        <div className="flex space-x-3">
          <div
            className="flex size-[30px] cursor-pointer items-center justify-center rounded border border-zinc-500"
            onClick={() => onPageChange(1)}
          >
            <CaretDoubleLeft size={16} color="white" />
          </div>
          <div
            className="flex size-[30px] cursor-pointer items-center justify-center rounded border border-zinc-500"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <CaretLeft size={16} color="white" />
          </div>
          <div
            className="flex size-[30px] cursor-pointer items-center justify-center rounded border border-zinc-500"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <CaretRight size={16} color="white" />
          </div>
          <div
            className="flex size-[30px] cursor-pointer items-center justify-center rounded border border-zinc-500"
            onClick={() => onPageChange(totalPages)}
          >
            <CaretDoubleRight size={16} color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
