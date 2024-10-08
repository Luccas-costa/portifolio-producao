import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  handlerCloseMaster: () => void
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  handlerCloseMaster,
}) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [showErrorBorder, setShowErrorBorder] = useState<boolean>(false)

  const getRatingClass = (index: number) => {
    const baseClass =
      'flex flex-col items-center w-full py-2 rounded-md transition-all'
    const selectedClass = selectedRating === index ? 'text-white' : 'text-black'

    if (selectedRating === index) {
      if (index === 0) return `${baseClass} bg-red-600 ${selectedClass}` // 0 - Vermelho
      if (index === 1) return `${baseClass} bg-orange-400 ${selectedClass}` // 1 - Laranja
      if (index === 2) return `${baseClass} bg-yellow-400 ${selectedClass}` // 2 - Amarelo
      if (index === 3) return `${baseClass} bg-yellow-300 ${selectedClass}` // 3 - Amarelo claro
      if (index === 4) return `${baseClass} bg-lime-300 ${selectedClass}` // 4 - Verde claro
      if (index === 5) return `${baseClass} bg-green-400 ${selectedClass}` // 5 - Verde
      if (index === 6) return `${baseClass} bg-green-500 ${selectedClass}` // 6 - Verde
      if (index === 7) return `${baseClass} bg-green-600 ${selectedClass}` // 7 - Verde
      if (index === 8) return `${baseClass} bg-green-700 ${selectedClass}` // 8 - Verde
      if (index === 9) return `${baseClass} bg-green-800 ${selectedClass}` // 9 - Verde
      if (index === 10) return `${baseClass} bg-green-900 ${selectedClass}` // 10 - Verde escuro
    }

    return showErrorBorder
      ? `${baseClass} border-2 border-red-600`
      : `${baseClass} bg-white ${selectedClass}`
  }

  const handleSubmit = () => {
    if (selectedRating === null) {
      setShowErrorBorder(true)
      return
    }

    setSubmitted(true)
    setShowErrorBorder(false)

    // Limpa a seleção após 2 segundos e fecha o modal
    setTimeout(() => {
      handlerCloseMaster()
    }, 2000)
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose() // Fecha o modal após a mensagem de agradecimento
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [submitted, onClose])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed right-0 top-[44%] w-[320px] -translate-y-1/2 transform rounded-lg border bg-white p-4 shadow-lg"
      style={{ zIndex: 90 }}
    >
      {!submitted ? (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold">Queremos ouvir vc</h2>
            <p className="text-sm text-gray-600">
              Conta como foi sua experiência 😊
            </p>
          </div>

          <div>
            <label className="text-sm font-bold">
              Em geral, o quão satisfeito vc está com a loja online da Teko bag?
            </label>
            <div className="mt-2 flex justify-between">
              {[...Array(11)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedRating(index)
                    setShowErrorBorder(false)
                  }}
                  className={getRatingClass(index)}
                >
                  <span className="text-sm">{index}</span>
                </button>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>Nada satisfeito</span>
              <span>Muito satisfeito</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-bold">
              Por favor, compartilhe conosco caso vc tenha algum comentário
              sobre sua experiência.
            </label>
            <textarea
              rows={4}
              placeholder="Comentário"
              className="mt-2 w-full rounded-md border p-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="rounded-md bg-gray-100 px-4 py-2 text-gray-700"
            >
              Fechar
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-md bg-black px-4 py-2 text-white"
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 text-center font-bold text-zinc-900">
          Obrigado pelo seu feedback!
        </div>
      )}
    </motion.div>
  )
}

export default FeedbackModal
