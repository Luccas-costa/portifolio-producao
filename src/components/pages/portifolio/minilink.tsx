import React from 'react'

type Props = {
  active: boolean
  onClick: () => void
  title: string
}

export default function Minilink({ active, onClick, title }: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-[8px] hover:bg-white ${active ? 'border border-black/10 bg-white' : 'border border-white/0 bg-white/0'}`}
      style={{ padding: '4px 12px 4px 4px' }}
    >
      <div className="size-[1.5rem] rounded-[6px] bg-blue-500"></div>
      <div className="text-sm text-black">{title}</div>
    </div>
  )
}
