import { motion } from 'framer-motion'
import React from 'react'
import ControlerCart from '@/components/pages/showcase/controler-cart'

interface CarrinhoProps {
  isOpen: boolean
  isClose: boolean
  handlerClose: () => void
}

export default function Carrinho({
  isOpen,
  isClose,
  handlerClose,
}: CarrinhoProps) {
  return (
    <motion.div
      initial={{ right: '0%' }}
      animate={{ right: isOpen && isClose ? '-50%' : ['-100%', '0%'] }}
      exit={{ right: '-100%' }}
      transition={{ type: 'spring', stiffness: 500, damping: 50 }}
      className="z-90 fixed right-0 top-0 flex h-full"
      onClick={(e) => e.stopPropagation()} // Previne o clique no próprio menu de fechá-lo
    >
      <div
        className={`relative left-[1px] flex w-[43vw] rounded-l-[6%] bg-zinc-300 bg-cover`}
        style={{ zIndex: 100 }}
      >
        <ControlerCart handlerClose={handlerClose} />
      </div>
    </motion.div>
  )
}
