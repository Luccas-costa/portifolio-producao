import CardComment from 'ui/card-comment'
import React from 'react'
import styles from '@/styles/slider-infinite.module.css'

export default function Comments() {
  const comment =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliasadipisci vitae aliquam nobis, eum repellat praesentium sint voluptatibus ad, consectetu reiciendis distinctio expedita molestiae.'
  return (
    <div className="relative mt-[64px] h-[20vh] w-full">
      <div
        className="absolute left-0 top-0 h-[120%] w-[40%] translate-y-[-20px]"
        style={{
          background: 'linear-gradient(to right, #e4e4e7 10%, transparent)', // zinc-200 corresponde a #e4e4e7 no Tailwind
          zIndex: 2,
        }}
      />

      <div
        className="absolute right-0 top-0 h-[120%] w-[40%] translate-y-[-20px]"
        style={{
          background: 'linear-gradient(to left, #e4e4e7 10%, transparent)',
          zIndex: 2,
        }}
      />
      <div className={`flex h-full w-full items-center gap-[100px]`}>
        <div
          className={`flex items-center justify-center gap-[100px] ${styles.slider}`}
        >
          <CardComment
            Emoji="smiley"
            name="Luccas Pereira Costa"
            comment={comment}
            color={1}
          />
          <CardComment
            Emoji="Angry"
            name="Matheus Pereira Costa"
            comment={comment}
            color={1}
          />
          <CardComment
            Emoji="meh"
            name="Mario Luiz Soares Costa"
            comment={comment}
            color={1}
          />
          <CardComment
            Emoji="Wink"
            name="Gislaine Pereira Costa"
            comment={comment}
            color={1}
          />
        </div>
        <div
          className={`flex items-center justify-center gap-[100px] ${styles.slider}`}
        >
          <CardComment
            Emoji="smiley"
            name="Luccas Pereira Costa"
            comment={comment}
            color={1}
          />
          <CardComment
            Emoji="Angry"
            name="Matheus Pereira Costa"
            comment={comment}
            color={1}
          />
          <CardComment
            Emoji="meh"
            name="Mario Luiz Soares Costa"
            comment={comment}
            color={1}
          />
          <CardComment
            Emoji="Wink"
            name="Gislaine Pereira Costa"
            comment={comment}
            color={1}
          />
        </div>
      </div>
    </div>
  )
}
