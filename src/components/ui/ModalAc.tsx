/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from './ConfigModalAc'
import Image from 'next/image'
import { redesSociais } from '@/utils/redes-sociais'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface redesSociais {
  id: number
  image: string | StaticImport
  name: string
  link: string
  cor: string
}

export default function AnimatedModalDemo() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn flex justify-center bg-white text-white dark:bg-white dark:text-black">
          Contato
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="mb-5 text-center text-lg font-bold text-neutral-600 md:text-2xl dark:text-neutral-100">
              Minhas
              <span className="rounded-md border border-gray-200 bg-gray-100 px-1 py-0.5 dark:border-neutral-700 dark:bg-neutral-800">
                conexões
              </span>{' '}
            </h4>
            <hr className="mx-auto mb-8 w-3/4 rounded border border-white/10" />
            <div className="screen11:px-[10px] screen10:px-[20px] screen9:px-[60px] screen8:px-[0px] screen2:px-[30px] screen1:px-[50px] screen02:px-[100px] flex flex-wrap items-center justify-center gap-4">
              {redesSociais.map((redesSociais: redesSociais) => (
                <a
                  href={redesSociais.link}
                  target="_blank"
                  key={redesSociais.id}
                  className={`screen11_5:size-24 screen5:size-32 flex size-16 items-center justify-center rounded-lg`}
                  style={{ backgroundColor: redesSociais.cor }}
                  rel="noreferrer"
                >
                  <Image
                    src={redesSociais.image}
                    width={100}
                    height={100}
                    alt={redesSociais.name}
                  />
                </a>
              ))}
            </div>
            <div className="screen6:w-[70%] screen11_5:text-base mx-auto mt-8 w-full text-center text-sm text-white/15">
              Se prefere a praticidade e
              <span className="rounded-md border border-gray-200 bg-gray-100 px-1 py-0.5 dark:border-neutral-700 dark:bg-white/20">
                Certeza!
              </span>{' '}
              de resposta
              <span className="rounded-md border border-gray-200 bg-gray-100 px-1 py-0.5 dark:border-neutral-700 dark:bg-white/20">
                Rapida!
              </span>{' '}
              Me mande uma mensagem clicando no botão abaixo.
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            {/* <button className="w-28 rounded-md border border-gray-300 bg-gray-200 px-2 py-1 text-sm text-black dark:border-black dark:bg-black dark:text-white">
              Sair
            </button> */}
            <button className="screen11_5:text-sm w-48 rounded-md border border-black bg-black px-2 py-1 text-xs text-white dark:bg-white dark:text-black">
              Mandar uma mensagem
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  )
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  )
}

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  )
}

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  )
}

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  )
}

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  )
}

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  )
}
