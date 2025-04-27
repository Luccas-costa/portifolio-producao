import React from 'react'
import { motion } from 'framer-motion'

interface SpriteAnimationProps {
  spriteWidth: number // Largura de cada quadro do sprite
  spriteHeight: number // Altura de cada quadro do sprite
  totalColumns: number // Número de colunas no sprite (5)
  totalRows: number // Número de linhas no sprite (17)
  spritePath: string // Caminho para o arquivo do sprite PNG
}

const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
  spriteWidth,
  spriteHeight,
  totalColumns,
  totalRows,
  spritePath,
}) => {
  const totalFrames = totalColumns * totalRows // Número total de quadros (5 colunas * 17 linhas)

  return (
    <motion.div
      className="relative"
      style={{
        width: `${spriteWidth}px`,
        height: `${spriteHeight}px`,
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="absolute left-0 top-0"
        style={{
          width: `${spriteWidth * totalColumns}px`, // Largura total do sprite
          height: `${spriteHeight * totalRows}px`, // Altura total do sprite
          backgroundImage: `url(${spritePath})`,
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          backgroundPosition: [
            ...Array(totalFrames)
              .fill(0)
              .map((_, index) => {
                const row = Math.floor(index / totalColumns) // Calcula a linha
                const column = index % totalColumns // Calcula a coluna
                return `-${spriteWidth * column}px -${spriteHeight * row}px` // Posição do fundo
              }),
          ],
        }}
        transition={{
          times: Array(totalFrames)
            .fill(0)
            .map((_, index) => index / (totalFrames - 1)),
          duration: 3, // Duração total da animação
          loop: Infinity, // Loop infinito
        }}
      />
    </motion.div>
  )
}

export default SpriteAnimation
