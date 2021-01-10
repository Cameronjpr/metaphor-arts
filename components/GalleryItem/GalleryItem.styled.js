import styled from 'styled-components'

export const StyledGalleryItem = styled.div`
  @media (min-width: 1080px) {
    flex-basis: calc(33% - 1em);
  }
  @media (min-width: 768px) and (max-width: 1080px) {
    flex-basis: calc(50% - 0.5em);
  }
  flex-basis: 100%;
  display: grid;
  grid: inherit;
  grid-column: span 3;
  grid-row: span 3;
  grid-template-columns: 1fr;
  grid-template-rows: min-content minmax(300px, max-content) min-content;
  text-align: left;
`

export const StyledGalleryItemTitle = styled.h2`
  @media (min-width: 768px) {
    grid-column: 1;
    grid-row: 1;
  }
  grid: row: 1;
  z-index: 10;
  color: black;
  background: rgba(255,255,255,0.5);
  padding: 0.25em;
`
export const StyledGalleryItemImageContainer = styled.div`
  @media (min-width: 768px) {
    grid-row: 1 / span 3;
    grid-column: 1;
  }
  grid-row: 2;
  position: relative;
  cursor: pointer;
`

export const StyledGalleryItemYear = styled.span`
  @media (min-width: 768px) {
    grid-column: 1;
  }
  grid-row: 3;
  z-index: 10;
  text-align: right;
  padding: 0.25em;
  background: rgba(255, 255, 255, 0.5);
`
