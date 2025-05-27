import React from 'react'
import fonts from '@/styles/globals/fonts.module.css'

import TextSide from '@/components/pages/contact/text-side'
import FormSide from '@/components/pages/contact/form-side'

export default function Contact() {
  return (
    <div
      className={`${fonts.monserrat} flex h-full w-full items-center justify-center bg-[#121212]`}
    >
      <TextSide />
      <FormSide />
    </div>
  )
}
