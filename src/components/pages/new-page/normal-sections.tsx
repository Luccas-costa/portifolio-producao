// components/pages/new-page/normal-sections.tsx
'use client'

export default function NormalSections() {
  return (
    <>
      <section className="flex min-h-[100vh] w-full items-center justify-center bg-white">
        <div className="font-clash text-4xl text-zinc-800">
          Section Normal 1
        </div>
      </section>

      <section className="flex min-h-[100vh] w-full items-center justify-center bg-zinc-100">
        <div className="font-clash text-4xl text-zinc-800">
          Section Normal 2
        </div>
      </section>
    </>
  )
}
