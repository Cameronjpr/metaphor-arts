import React from 'react'
import Image from 'next/image'
import { BigImageWrapper, BigImageTitle } from './BigImage.styled'

export default function BigImage(props) {
  const { src, alt, width, height, title, year } = props
  return (
    <BigImageWrapper>
      <Image src={src} alt={alt} width={width} height={height} quality={100} />
      <BigImageTitle>{title}</BigImageTitle>
      <span>{year}</span>
    </BigImageWrapper>
  )
}
