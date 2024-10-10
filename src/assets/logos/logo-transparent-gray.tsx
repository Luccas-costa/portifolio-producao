import Image from 'next/image'
import React from 'react'
import Logo from 'public/logos/logo-transparente-gray.png'

interface LogoProps {
  width: number
  height: number
}

export default function LogoTransparentGray({ width, height }: LogoProps) {
  return <Image src={Logo} alt="logo" width={width} height={height} />
}
