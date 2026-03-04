import React from 'react'

export function Bolinhas() {
  return (
    <>
      <div className="absolute left-5 top-5 size-[8px] rounded-full border-[0.5px] border-white/10 bg-white/10 shadow-sm shadow-black/10"></div>
      <div className="absolute right-5 top-5 size-[8px] rounded-full border-[0.5px] border-white/10 bg-white/10 shadow-sm shadow-black/10"></div>
      <div className="absolute bottom-5 left-5 size-[8px] rounded-full border-[0.5px] border-white/10 bg-white/10 shadow-sm shadow-black/10"></div>
      <div className="absolute bottom-5 right-5 size-[8px] rounded-full border-[0.5px] border-white/10 bg-white/10 shadow-sm shadow-black/10"></div>
    </>
  )
}

export function BolinhasClara() {
  return (
    <>
      <div className="absolute left-5 top-5 size-[8px] rounded-full border-[0.5px] border-black/10 bg-white shadow-sm"></div>
      <div className="absolute right-5 top-5 size-[8px] rounded-full border-[0.5px] border-black/10 bg-white shadow-sm"></div>
      <div className="absolute bottom-5 left-5 size-[8px] rounded-full border-[0.5px] border-black/10 bg-white shadow-sm"></div>
      <div className="absolute bottom-5 right-5 size-[8px] rounded-full border-[0.5px] border-black/10 bg-white shadow-sm"></div>
    </>
  )
}
