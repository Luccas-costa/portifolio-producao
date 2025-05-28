'use client'
import React, { useState, useEffect } from 'react'

import {
  Scroll,
  Smiley,
  User,
  EnvelopeSimple,
  SmileyAngry,
  SmileyMeh,
  SmileySad,
  SmileyWink,
} from '@phosphor-icons/react/dist/ssr'
import { InsertMessage } from '@/db/insert-message'
import { InsertReviews } from '@/db/insert-reviews'
import { useRouter } from 'next/navigation'

interface DataType {
  name: string
  email: string
  message: string
}

interface Form1Props {
  data: DataType
  setData: React.Dispatch<React.SetStateAction<DataType>>
  handlerToggle: () => void
}

interface Form2Props {
  dataReviews: {
    message: string
    reviews: string
  }
  setDataReviews: React.Dispatch<
    React.SetStateAction<{ message: string; reviews: string }>
  >
  handlerToggle: () => void
  handlerSubmit: () => void
}

export default function FormSide() {
  const [passo, setPasso] = useState(0)
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [dataReviews, setDataReviews] = useState({
    message: '',
    reviews: '',
  })

  const router = useRouter()

  const handlerSubmit = async () => {
    const resultMessage = await InsertMessage(
      data.name,
      data.email,
      data.message,
    )

    if (dataReviews.message !== '') {
      if (dataReviews.reviews === '') {
        await InsertReviews(dataReviews.message, 'null')
      } else {
        await InsertReviews(dataReviews.message, dataReviews.reviews)
      }
    }

    if (resultMessage.error) {
      console.log(resultMessage.error)
      return
    }

    router.push('/contact/congratulations')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {passo === 0 && (
        <Form1
          data={data}
          setData={setData}
          handlerToggle={() => setPasso(1)}
        />
      )}
      {passo === 1 && (
        <Form2
          dataReviews={dataReviews}
          setDataReviews={setDataReviews}
          handlerToggle={() => setPasso(0)}
          handlerSubmit={handlerSubmit}
        />
      )}
    </div>
  )
}

const Form1 = ({ data, setData, handlerToggle }: Form1Props) => {
  const [error, setError] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleClick = () => {
    if (!data.name || !data.email || !data.message) {
      if (!data.name) setNameError(true)
      if (!data.email) setEmailError(true)
      if (!data.message) setMessageError(true)
      setError('Por favor, preencha todos os campos.')
      setTimeout(() => setError(''), 5000)
      return
    }

    if (data.email === 'lucas.comercial@gmail.com') {
      setEmailError(true)
      setError('Insira o seu email.')
      setTimeout(() => setError(''), 5000)
      return
    }

    handlerToggle() // avança o passo
  }

  return (
    <div className="flex min-h-[700px] flex-col items-center gap-4 rounded-lg p-8">
      <div className="text-center text-6xl font-bold text-white">
        Envie me uma <br /> mensagem
      </div>
      <div className="my-2 flex items-center gap-1">
        <Scroll size={40} weight="light" color="#FF7F11" />
        <div className="h-[2px] w-[40px] bg-gradient-to-r from-[#FF7F11] to-[#FF11B8]" />
        <Smiley size={40} weight="light" color="#ffffff" />
      </div>

      <div
        className={`flex h-[70px] w-[350px] items-center justify-center rounded-2xl screen400:w-[390px] screen450:w-[440px] screen550:w-[500px] ${nameError ? 'bg-red-500/30' : 'bg-white/10'} px-5`}
      >
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-[400px] bg-transparent text-lg font-medium text-white placeholder:font-medium placeholder:text-zinc-300 focus:outline-none"
          placeholder="Full name"
        />
        <User size={28} weight="light" color="#ffffff" />
      </div>

      <div
        className={`flex h-[70px] w-[350px] items-center justify-center rounded-2xl screen400:w-[390px] screen450:w-[440px] screen550:w-[500px] ${emailError ? 'bg-red-500/30' : 'bg-white/10'} px-5`}
      >
        <input
          type="text"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-[400px] bg-transparent text-lg font-medium text-white placeholder:font-medium placeholder:text-zinc-300 focus:outline-none"
          placeholder="E-mail"
        />
        <EnvelopeSimple size={28} weight="light" color="#ffffff" />
      </div>

      <div
        className={`flex w-[350px] rounded-2xl screen400:w-[390px] screen450:w-[440px] screen550:w-[500px] ${messageError ? 'bg-red-500/30' : 'bg-white/10'} p-5`}
      >
        <textarea
          rows={6}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="w-full resize-none bg-transparent text-lg font-medium text-white placeholder:font-medium placeholder:text-zinc-300 focus:outline-none"
          placeholder="Escreva sua mensagem..."
        />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <button
        onClick={handleClick}
        className="h-[60px] w-[350px] transform select-none rounded-xl bg-gradient-to-r from-[#FF7F11] to-[#FF11B8] text-lg font-bold text-zinc-950 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] screen400:w-[390px] screen450:w-[440px] screen550:w-[500px]"
      >
        Avançar
      </button>
    </div>
  )
}

const Form2 = ({
  dataReviews,
  setDataReviews,
  handlerToggle,
  handlerSubmit,
}: Form2Props) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [iconSize, setIconSize] = useState<number>(80)

  // Atualiza o icon selecionado localmente, e também no estado do pai
  const handleIconClick = (iconName: string) => {
    setDataReviews({ ...dataReviews, reviews: iconName })
  }

  const getColorByIconName = (iconName: string) => {
    switch (iconName) {
      case 'Wink':
        return '#005aff' // Azul
      case 'Happy':
        return '#4CAF50' // Verde
      case 'Meh':
        return '#FFEB3B' // Amarelo
      case 'Sad':
        return '#FFa500' // Laranja
      case 'Angry':
        return '#F44336' // Vermelho
      default:
        return '#52525B' // Cor padrão
    }
  }

  const getIconColor = (iconName: string) => {
    if (dataReviews.reviews === iconName || hoveredIcon === iconName) {
      return getColorByIconName(iconName)
    }
    return '#52525B' // Cor padrão
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 360) {
        setIconSize(62)
      } else if (window.innerWidth < 450) {
        setIconSize(70)
      } else {
        setIconSize(80)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex h-[700px] flex-col items-center gap-4 rounded-lg p-8">
      <div className="max-w-[550px] text-center text-6xl font-bold text-white">
        Que tal uma avaliação?
      </div>
      <div className="mt-2 flex items-center gap-1">
        <Scroll size={40} weight="light" color="#FF7F11" />
        <div className="h-[2px] w-[40px] bg-gradient-to-r from-[#FF7F11] to-[#FF11B8]" />
        <Smiley size={40} weight="light" color="#FF11B8" />
      </div>

      {/* Textarea */}
      <div className="mt-4 flex w-[350px] rounded-2xl bg-white/10 p-5 screen400:w-[390px] screen450:w-[440px] screen550:w-[500px]">
        <textarea
          rows={6}
          value={dataReviews.message}
          onChange={(e) =>
            setDataReviews({ ...dataReviews, message: e.target.value })
          }
          className="w-full resize-none bg-transparent text-lg font-medium text-white placeholder:font-medium placeholder:text-zinc-300 focus:outline-none"
          placeholder="Escreva sua avaliação [opcional]"
        />
      </div>

      {/* Smileys interativos */}
      <div className="mt-3 flex space-x-3">
        {[
          { Icon: SmileyAngry, name: 'Angry' },
          { Icon: SmileySad, name: 'Sad' },
          { Icon: SmileyMeh, name: 'Meh' },
          { Icon: Smiley, name: 'Happy' },
          { Icon: SmileyWink, name: 'Wink' },
        ].map(({ Icon, name }) => (
          <div
            key={name}
            className="flex justify-center"
            onMouseEnter={() => setHoveredIcon(name)}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={() => handleIconClick(name)}
          >
            <Icon
              size={iconSize}
              weight="fill"
              className="cursor-pointer transition-all duration-200"
              color={getIconColor(name)}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlerSubmit}
        className="h-[60px] w-[350px] transform select-none rounded-xl bg-gradient-to-r from-[#FF7F11] to-[#FF11B8] text-lg font-bold text-zinc-950 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] screen400:w-[390px] screen450:w-[440px] screen550:w-[500px]"
      >
        {dataReviews.message === ''
          ? 'Enviar apenas formulario'
          : 'Enviar ambos os formularios'}
      </button>
      <button
        onClick={handlerToggle}
        className="text-center font-light text-zinc-300 underline"
      >
        Voltar para o formulário
      </button>
    </div>
  )
}
