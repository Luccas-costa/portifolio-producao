import React from 'react'
import { FolderSimple } from '@phosphor-icons/react/dist/ssr'

interface FolderProps {
  name: string
}

export default function Folder({ name }: FolderProps) {
  return (
    <div className="flex w-[70px] flex-col">
      <FolderSimple size={70} weight="fill" color="#71717a" />
      <div className="translate-y-[-5px] text-center text-xs text-zinc-300">
        {name}
      </div>
    </div>
  )
}
