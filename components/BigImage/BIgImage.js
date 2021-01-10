import React from 'react'
import Image from 'next/image'
import { BigImageWrapper, BigImageTitle } from './BigImage.styled'

export default function BigImage(props) {
  const { src, alt, width, height, title } = props
  return (
    <BigImageWrapper>
      <BigImageTitle>{title}</BigImageTitle>
      <Image src={src} alt={alt} width={width} height={height} quality={100} />
    </BigImageWrapper>
  )
}
