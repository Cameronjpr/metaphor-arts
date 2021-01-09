import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import { StyledGallery } from './Gallery.styled'
import { works } from '../../data/data'

export default function Gallery() {
  return (
    <section>
      <h2 id="work">My work</h2>
      <StyledGallery>
        { 
          works.map((work, key) => 
            <GalleryItem key={key} work={work}/> 
          )
        }
      </StyledGallery>
    </section>
  );
}
