import Image from 'next/image'
import React from 'react'
import Logo from 'public/logos/logo-transparente.png'

interface LogoProps {
  width: number
  height: number
}

export default function LogoTransparentBlack({ width, height }: LogoProps) {
  return <Image src={Logo} alt="logo" width={width} height={height} />
}
