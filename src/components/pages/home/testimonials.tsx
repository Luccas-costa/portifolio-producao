import { Star, StarHalf } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function Testimonials() {
  return (
    <div
      className="min-h-[100vh] w-full bg-variant_green2/40 pt-[220px]"
      id="testimonials"
    >
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-4xl font-bold text-zinc-700">Depoimentos</div>
          <div className="text-xl font-medium text-zinc-500">
            Algumas citações de nossos clientes satisfeitos
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 screen1550:gap-10 screen1460:grid screen1460:grid-cols-3 screen1460:gap-5">
          <div className="flex h-[418px] w-[470px] flex-col items-center justify-center gap-3 rounded-lg bg-white p-2 shadow-xl">
            <div className="mb-8 size-[100px] rounded-full bg-primary shadow-lg"></div>
            <div className="my-2 flex items-center gap-1">
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <StarHalf size={32} weight="fill" color="#D5DED3" />
            </div>
            <div className="max-w-[80%] text-center text-2xl font-semibold text-zinc-700">
              “I love it! No more air fresheners”
            </div>
            <div className="text-xl font-medium text-zinc-500">Eduardo</div>
          </div>
          <div className="flex h-[418px] w-[470px] flex-col items-center justify-center gap-3 rounded-lg bg-white p-2 shadow-xl">
            <div className="mb-8 size-[100px] rounded-full bg-primary shadow-lg"></div>
            <div className="my-2 flex items-center gap-1">
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
            </div>
            <div className="max-w-[80%] text-center text-2xl font-semibold text-zinc-700">
              {"'"}Raccomended for everyone{"'"}
            </div>
            <div className="text-xl font-medium text-zinc-500">Eduardo</div>
          </div>
          <div className="flex h-[418px] w-[470px] flex-col items-center justify-center gap-3 rounded-lg bg-white p-2 shadow-xl">
            <div className="mb-8 size-[100px] rounded-full bg-primary shadow-lg"></div>
            <div className="my-2 flex items-center gap-1">
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <Star size={32} weight="fill" color="#D5DED3" />
              <StarHalf size={32} weight="fill" color="#D5DED3" />
            </div>
            <div className="max-w-[80%] text-center text-2xl font-semibold text-zinc-700">
              “Looks very natural, the smell is awesome”
            </div>
            <div className="text-xl font-medium text-zinc-500">Eduardo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
