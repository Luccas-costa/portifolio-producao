import CardComment from 'ui/card-comment'
import React from 'react'

export default function Comments() {
  const comment =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliasadipisci vitae aliquam nobis, eum repellat praesentium sint voluptatibus ad, consectetu reiciendis distinctio expedita molestiae.'
  return (
    <div className="h-[20vh] w-full">
      <div className="flex items-center justify-center gap-20">
        <CardComment
          Emoji="smiley"
          name="Luccas Pereira Costa"
          comment={comment}
          color={0}
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
          color={2}
        />
        <CardComment
          Emoji="Wink"
          name="Gislaine Pereira Costa"
          comment={comment}
          color={3}
        />
      </div>
    </div>
  )
}
