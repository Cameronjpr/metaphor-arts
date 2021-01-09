import React from 'react'
import Link from 'next/link'
import { StyledGalleryItem } from './GalleryItem.styled.js'

export default function GalleryItem(props) {
  const { title, year, id } = props.work
  return (
    <StyledGalleryItem>
      <h3>{title}</h3>
      <Link as={`works/${id}`} href="/works/[id]">
        <img
          src={`/images/${id}.jpg`}
          loading="lazy"
          importance="high"
          alt={`The painting ${title}, created in ${year}.`}
        />
      </Link>
    </StyledGalleryItem>
  )
}
