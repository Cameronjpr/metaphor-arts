import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  font-size: 1em;
  padding-top: 1em;
  @media (min-width: 1080px) {
    grid-column: 2;
    grid-row: 4 / span 2;
    text-align: left;
  }
  text-align: center;
`

export const StyledNavigationLi = styled.li`
  display: inline;
  padding: 0 0.5em 0 0.5em;
  @media (min-width: 1080px) {
    display: block;
    padding: 0 0 1em 0;
  }
`
