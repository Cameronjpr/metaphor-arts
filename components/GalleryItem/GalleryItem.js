import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  StyledGalleryItem,
  StyledGalleryItemTitle,
  StyledGalleryItemImageContainer,
  StyledGalleryItemYear,
} from './GalleryItem.styled.js'

export default function GalleryItem(props) {
  const { title, year, id } = props.work
  return (
    <StyledGalleryItem>
      <StyledGalleryItemTitle>{title}</StyledGalleryItemTitle>
      <Link as={`works/${id}`} href="/works/[id]">
        <StyledGalleryItemImageContainer>
          <Image
            src={`/images/${id}.jpg`}
            alt={`The painting ${title}, created in ${year}.`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </StyledGalleryItemImageContainer>
      </Link>
      <StyledGalleryItemYear>{year}</StyledGalleryItemYear>
    </StyledGalleryItem>
  )
}
