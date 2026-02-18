import React from 'react'
import Footer from '../../professional/sections/footer'
import Called from '../../professional/sections/called'
import Skills from '../../professional/sections/skills'

export default function Section3() {
  return (
    <div className="h-full w-full">
      <div>
        <Skills isFaixa={true} />
      </div>
      <div className="absolute left-1/2 top-[-40px] -translate-x-1/2">
        <Called />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer isVisibleMenu={false} />
      </div>
    </div>
  )
}
