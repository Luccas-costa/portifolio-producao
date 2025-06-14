import React from 'react'

export default function Notes() {
  return (
    <div className="min-h-screen overflow-y-auto bg-[#121212] text-zinc-200">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-[800px] w-full max-w-[600px] rounded-xl border border-[#2E2E2E] p-3">
          <div className="flex flex-col">
            <div className="text-medium text-center text-2xl">
              Coisas a fazer
            </div>
            <div className="my-3 ml-2 h-[1px] w-full bg-[#2E2E2E]"></div>
            <ul className="flex max-w-[600px] flex-col gap-1 pl-2">
              <li>1. Criar oque vai ir dentro de Slides</li>
              <li>2. Revisar todo texto do site para mudar para o portugues</li>
              <div>3. Criar future de esqueceu sua senha</div>
              <div>4. Criar future de apagar usuarios</div>
              <li>5. Começar a desenhar pagina pessoal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
