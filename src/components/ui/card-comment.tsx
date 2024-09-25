'use client'
import React, { useState, useEffect } from 'react'
import {
  Smiley,
  User,
  SmileyWink,
  SmileyMeh,
  SmileySad,
  SmileyAngry,
} from '@phosphor-icons/react/dist/ssr'

interface CardCommentProps {
  Emoji: string
  name: string
  comment: string
  color: number
}

export default function CardComment({
  Emoji,
  name,
  comment,
  color,
}: CardCommentProps) {
  const [EmojiType, setEmojiType] = useState<React.ReactNode>(
    <Smiley size={70} weight="light" color="white" />,
  )
  const [Color, setColor] = useState<string>('#B9D19D')

  useEffect(() => {
    switch (Emoji) {
      case 'Wink':
        setEmojiType(<SmileyWink size={70} weight="light" color="white" />)
        break
      case 'smiley':
        setEmojiType(<Smiley size={70} weight="light" color="white" />)
        break
      case 'Meh':
        setEmojiType(<SmileyMeh size={70} weight="light" color="white" />)
        break
      case 'Sad':
        setEmojiType(<SmileySad size={70} weight="light" color="white" />)
        break
      case 'Angry':
        setEmojiType(<SmileyAngry size={70} weight="light" color="white" />)
        break
      default:
        setEmojiType(<Smiley size={70} weight="light" color="white" />)
    }

    // Define o valor da cor de acordo com a prop `color`
    switch (color) {
      case 0:
        setColor('#225485')
        break
      case 1:
        setColor('#B9D19D')
        break
      case 2:
        setColor('#9999CC')
        break
    }
  }, [Emoji, color]) // Atualiza quando `Emoji` ou `color` mudam

  return (
    <div
      style={{ borderColor: Color }}
      className="relative flex h-[150px] w-[300px] flex-col rounded-lg border-2 p-2 shadow-lg"
    >
      <div
        style={{ borderColor: Color, backgroundColor: Color }}
        className="absolute right-0 top-0 flex size-[40px] -translate-y-[38%] translate-x-[38%] items-center justify-center overflow-hidden rounded-full border-2"
      >
        {EmojiType}
      </div>
      <div className="flex items-center gap-3">
        <div
          style={{ borderColor: Color }}
          className="flex size-[54px] items-center justify-center overflow-hidden rounded-full border-2"
        >
          <User size={64} weight="thin" color={Color} />
        </div>
        <div className="truncate text-secondary/60">{name}</div>
      </div>
      <div className="mx-1 flex h-full max-w-[90%] items-center overflow-hidden text-xs text-secondary/60">
        <div className="line-clamp-4">{comment}</div>
      </div>
    </div>
  )
}
