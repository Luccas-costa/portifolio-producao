import React, { useState } from 'react'

const COLORS = ['#F59794', '#F2B880', '#F2E394', '#C1E1C1', '#F2B5D4']

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

export default function Testemunials() {
  const [color, setColor] = useState(getRandomColor)
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => {
        setColor(getRandomColor())
        setHovered(true)
      }}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex w-full items-center justify-center border border-black/10 text-[#1b1b1b] transition-all duration-300"
      style={{
        borderColor: hovered ? color : undefined,
        backgroundColor: hovered ? `${color}25` : undefined,
      }}
    >
      <div className="hidden group-hover:block">
        <CardAnimation
          color={color}
          className="left-1/2 top-[-25px] translate-x-[-50%]"
          text="2"
          position="bottom-[-4px]"
        />
        <CardAnimation
          color={color}
          className="bottom-[-25px] left-1/2 translate-x-[-50%]"
          text="-2"
          position="top-[-4px]"
        />
        <CardAnimation
          color={color}
          className="left-[-8px] top-[-25px]"
          text="1"
          position="bottom-[-4px]"
        />
        <CardAnimation
          color={color}
          className="bottom-[-25px] left-[-8px]"
          text="-3"
          position="top-[-4px]"
        />
        <CardAnimation
          color={color}
          className="right-[-8px] top-[-25px]"
          text="-3"
          position="bottom-[-4px]"
        />
        <CardAnimation
          color={color}
          className="bottom-[-25px] right-[-8px]"
          text="1"
          position="top-[-4px]"
        />
        <CardAnimation
          color={color}
          className="bottom-[-1px] right-[-22px]"
          text="-1"
          position="bottom-[0px] rotate-0 left-[-2px] h-[3px] rounded-t-full"
        />
        <CardAnimation
          color={color}
          className="right-[-22px] top-[-1px]"
          text="-2"
          position="top-[0px] rotate-0 left-[-2px] h-[3px] rounded-t-full"
        />
        <CardAnimation
          color={color}
          className="bottom-[-1px] left-[-22px]"
          text="-2"
          position="bottom-[0px] rotate-0 right-[-2px] h-[3px] rounded-t-full"
        />
        <CardAnimation
          color={color}
          className="left-[-22px] top-[-1px]"
          text="-1"
          position="top-[0px] rotate-0 right-[-2px] h-[3px] rounded-t-full"
        />
      </div>
      <div className="flex w-1/2 flex-col items-center gap-8 px-12 py-16 text-center">
        <div className="w-[85%]">
          “Working with Andy has been an absolute pleasure. Very happy with the
          final result.{' '}
          <span className="font-bold text-[#1b1b1b]">Highly recommend!</span>”
        </div>
        <div className="flex items-center gap-4">
          <div className="size-14 rounded-full bg-[#F2F2F2]"></div>
          <div className="text-black/40">
            Catherine Zhang, Co-Founder Narrable
          </div>
        </div>
      </div>
      <div
        className="flex w-1/2 flex-col items-center gap-8 border-l px-12 py-16 text-center transition-all duration-300"
        style={{
          borderLeftColor: hovered ? color : 'rgba(0,0,0,0.1)',
          borderLeftStyle: hovered ? 'dashed' : 'solid',
        }}
      >
        <div className="w-[88%]">
          “Andy did an
          <span className="font-bold text-[#1b1b1b]">
            absolutely stellar job
          </span>
          on our new website. Everything was on point and better than our team
          expected.”
        </div>
        <div className="flex items-center gap-4">
          <div className="size-14 rounded-full bg-[#F2F2F2]"></div>
          <div className="text-black/40">Olga Gomonova, CEO Aimiable</div>
        </div>
      </div>
    </div>
  )
}

export const CardAnimation = ({
  className,
  text,
  position,
  color,
}: {
  className?: string
  text: string
  position: string
  color: string
}) => {
  return (
    <div
      className={`absolute flex size-4 items-center justify-center rounded-sm ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="z-40 text-xxs font-semibold">{text}</div>

      <div
        className={`absolute h-[8px] w-[8px] rotate-45 ${position}`}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}
