'use client'
import React, { useId } from 'react'

interface GradientIconProps {
  width?: number
  height?: number
  d: string
}

export default function GradientIcon({
  width = 80,
  height = 80,
  d,
}: GradientIconProps) {
  const gradientId = useId() // gera um ID único para cada instância

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E97511" />
          <stop offset="100%" stopColor="#714DA6" />
        </linearGradient>
      </defs>
      <path d={d} fill={`url(#${gradientId})`} />
    </svg>
  )
}
