import React from 'react'

export default function Chatbot() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end rounded-xl bg-[#202123]">
      <div className={`font-montserrat text-3xl font-bold text-[#D9D9E3]`}>
        Pergunte algo sobre o Luccas
      </div>
      <div className="mb-[20px] h-[110px] w-full max-w-[760px] rounded-[24px] border border-zinc-600"></div>
    </div>
  )
}
