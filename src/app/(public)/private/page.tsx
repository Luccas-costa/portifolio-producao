'use client'

import SpriteAnimation from './SpriteAnimation'

export default function ChatPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <SpriteAnimation
        spriteWidth={72} // Largura de cada quadro
        spriteHeight={72} // Altura de cada quadro
        totalColumns={5} // 5 colunas
        totalRows={18} // 17 linhas
        spritePath="/assets/sprite.png" // Caminho para o arquivo PNG do sprite
      />
    </div>
  )
}
