'use client'

import CustomCursor from './teste'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-950 text-white">
      <CustomCursor />

      <button className="rounded-lg bg-blue-500 px-6 py-3 transition hover:bg-blue-600">
        Botão 1
      </button>
      <button className="rounded-lg bg-green-500 px-6 py-3 transition hover:bg-green-600">
        Botão 2
      </button>
      <a
        href="#"
        className="rounded-lg bg-red-500 px-6 py-3 transition hover:bg-red-600"
      >
        Link
      </a>
    </main>
  )
}
