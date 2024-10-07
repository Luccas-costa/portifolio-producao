import Image from 'next/image'
import React from 'react'
import Logo from 'public/logos/logo-transparente-white.png'

interface LogoProps {
  width: number
  height: number
}

export default function LogoTransparentWhite({ width, height }: LogoProps) {
  return <Image src={Logo} alt="logo" width={width} height={height} />
}
