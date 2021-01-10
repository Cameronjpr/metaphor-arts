import styled from 'styled-components'

export const StyledGallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: inherit;
  @media (min-width: 1080px) {
    grid-column: 4 / span 10;
    grid-row: 4 / span 11;
  }
  @media (min-width: 768px) and (max-width: 1080px) {
    margin: 1em;
  }
`
