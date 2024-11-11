'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from '@/styles/animated-typewriter.module.css'

const InputAnimatedTypewriter = ({ theme }: { theme: string }) => {
  const phrases = useMemo(
    () => ['Bag da temporada', 'Bag sustentavel', 'Bag dia a dia'],
    [],
  ) // Usando useMemo
  const [placeholderText, setPlaceholderText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const typingSpeed = 150 // Velocidade de digitação
  const deletingSpeed = 100 // Velocidade de apagamento
  const pauseDuration = 1000 // Pausa entre as frases

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let timeout: NodeJS.Timeout

    const type = () => {
      if (isDeleting) {
        // Apagar
        setPlaceholderText((prev) => prev.slice(0, prev.length - 1))
      } else {
        // Digitar
        setPlaceholderText((prev) => currentPhrase.slice(0, prev.length + 1))
      }
    }

    const handleTyping = () => {
      if (isDeleting && placeholderText === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        timeout = setTimeout(type, pauseDuration)
      } else if (!isDeleting && placeholderText === currentPhrase) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      } else {
        timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed)
      }
    }

    handleTyping()

    return () => clearTimeout(timeout) // Limpa o timeout quando o componente é desmontado
  }, [placeholderText, isDeleting, phraseIndex, phrases]) // Agora 'phrases' está memorizado e não muda

  return (
    <input
      type="text"
      placeholder={placeholderText}
      className={`${styles.input} ${
        theme === 'light'
          ? 'placeholder:text-zinc-200'
          : 'placeholder:text-zinc-950'
      }`}
    />
  )
}

export default InputAnimatedTypewriter // Importando o CSS module
