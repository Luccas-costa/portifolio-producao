'use client'
import { X } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import FeedbackModal from './feedback-modal'

export default function Feedback({ theme }: { theme: string }) {
  const [isClose, setIsClose] = useState<boolean>(false)
  const [isCloseMaster, setIsCloseMaster] = useState<boolean>(false)

  const handlerCloseMaster = () => {
    setIsCloseMaster(true)
  }

  return (
    <>
      {!isCloseMaster && (
        <div>
          {!isClose && (
            <div
              onClick={() => setIsClose(true)}
              className={`fixed right-[-50px] top-1/2 flex h-[50px] w-[140px] rotate-[90deg] cursor-pointer items-center justify-center gap-2 rounded ${theme === 'dark' ? 'bg-zinc-300' : theme === 'light' && 'bg-zinc-200'} text-zinc-900`}
              style={{ zIndex: 50 }}
            >
              <div className="text-base">feedback</div>
              <div className="cursor-pointer" onClick={handlerCloseMaster}>
                <X size={21} />
              </div>
            </div>
          )}

          <AnimatePresence>
            {isClose && (
              <div style={{ zIndex: 99 }}>
                <FeedbackModal
                  isOpen={isClose}
                  onClose={() => setIsClose(false)}
                  handlerCloseMaster={handlerCloseMaster}
                />
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  )
}
