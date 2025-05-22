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
              <li className="text-green-500">1. Criar um banco de dados</li>
              <li className="text-green-500">
                2. Adicionar que toda pergunta do chat feita vai para o db
              </li>
              <li>3. Criar oque vai ir dentro de Slides</li>
              <li>4. Criar oque vai ir dentro de Projetos</li>
              <li>5. Revisar todo texto do site para mudar para o portugues</li>
              <li className="text-green-500">6. criar navbar do menuburger</li>
              <div>7. Criar pagina de contato</div>
              <div>Criar future de esqueceu sua senha</div>
              <li>8. Começar a desenhar pagina pessoal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
