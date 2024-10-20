'use client'
import React, { useState } from 'react'

import DashboardButton from 'ui/dashboard-send-button'

// import { PedidosDelete } from '@/database/pedidosDelete'
// import { PedidosUpdateStatusBD } from '@/database/pedidosUpdate'
// import { ClienteUpdateCancelamentoBD } from '@/database/clientesUpdate'

import { MagnifyingGlass, X } from '@phosphor-icons/react'

interface DashboardMainProps {
  id: string
  time: string
  status: string
  name: string
  price: string
  last: boolean
  handlerRefrash: () => void
}

export default function DashboardMain({
  id,
  time,
  status,
  name,
  price,
  last,
  //   handlerRefrash,
}: DashboardMainProps) {
  const [Status, setStatus] = useState(status)
  const [Cancelar, setCancelar] = useState(false)

  //   const handlerCancelar = async (id: string) => {
  //     setCancelar(false)
  //     await PedidosDelete(id)
  //     await ClienteUpdateCancelamentoBD()
  //     handlerRefrash()
  //   }

  //   const UpdateBD = async (id: string, Status: string) => {
  //     await PedidosUpdateStatusBD(id, Status)
  //   }

  const handleStatus = async (newStatus: string) => {
    // Atualiza o estado
    setStatus((prevStatus) => {
      let updatedStatus = prevStatus

      if (newStatus === 'Null') {
        updatedStatus = 'Null'
      } else if (newStatus === 'Pendente') {
        updatedStatus = 'Enviando'
      } else if (newStatus === 'Enviando') {
        updatedStatus = 'Enviado'
      } else if (newStatus === 'Enviado') {
        updatedStatus = 'Enviado'
      } else if (newStatus === 'Erro') {
        updatedStatus = 'Erro'
      } else {
        updatedStatus = 'Erro'
      }

      // Atualiza o banco de dados com o novo status
      //   UpdateBD(id, updatedStatus)

      return updatedStatus
    })
  }

  // Função para formatar o preço
  const formatPrice = (price: string) => {
    // Substitui a vírgula por ponto para converter para número
    const normalizedPrice = price.replace(',', '.')
    const priceFloat = parseFloat(normalizedPrice)
    if (isNaN(priceFloat)) return price // Retorna o preço original se não for um número válido

    // Formata o número para duas casas decimais e substitui o ponto por vírgula
    return priceFloat.toFixed(2).replace('.', ',')
  }

  return (
    <div
      className={`h-[60px] ${
        last ? '' : 'border-b'
      } flex items-center border-zinc-500 px-5`}
    >
      <div className="mr-8 flex size-[35px] cursor-pointer items-center justify-center rounded-lg border border-zinc-500">
        <MagnifyingGlass size={16} color="white" />
      </div>

      <div className="min-w-[240px] text-xs text-white">{id}</div>

      <div className="min-w-[208px] text-sm text-zinc-400">há {time}</div>

      <div className="flex min-w-[150px] items-center space-x-2">
        <div
          className={`size-[8px] rounded-full ${
            Status === 'Enviado' && 'bg-green-500'
          } ${Status === 'Erro' && 'bg-red-500'} ${
            Status === 'Pendente' && 'bg-blue-300'
          } ${Status === 'Enviando' && 'bg-yellow-500'} ${
            Status === 'Null' && 'bg-zinc-200'
          }`}
        />
        <div className="text-sm text-zinc-400">{Status}</div>
      </div>

      <div className="min-w-[718px] text-white">{name}</div>

      <div className="min-w-[120px] text-white">R$ {formatPrice(price)}</div>

      <DashboardButton status={Status} handleStatusProps={handleStatus} />

      <div className="ml-10 flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:border hover:border-zinc-500/50">
        <X size={12} weight="bold" color="white" />
        <div className="text-white" onClick={() => setCancelar(true)}>
          Cancelar
        </div>
      </div>
      {Cancelar && (
        <div className="absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] space-x-2 rounded-lg border border-zinc-500 bg-zinc-900 p-4 text-2xl font-bold">
          <div
            className="cursor-pointer rounded-lg border border-blue-500 p-3 text-blue-500"
            onClick={() => setCancelar(false)}
          >
            Voltar
          </div>
          <div
            className="cursor-pointer rounded-lg border border-red-500 p-3 text-red-500"
            // onClick={() => handlerCancelar(id)}
          >
            Certeza
          </div>
        </div>
      )}
    </div>
  )
}
