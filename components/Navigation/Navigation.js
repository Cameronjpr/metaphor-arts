import React from 'react'
import Link from 'next/link'
import {
  StyledNavigation,
  StyledNavigationUl,
  StyledNavigationLi,
} from './Navigation.styled.js'

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledNavigationUl>
        <StyledNavigationLi>
          <Link href="#work">
            <a>Work</a>
          </Link>
        </StyledNavigationLi>
        <StyledNavigationLi>
          <Link href="#about">
            <a>About</a>
          </Link>
        </StyledNavigationLi>
        <StyledNavigationLi>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </StyledNavigationLi>
      </StyledNavigationUl>
    </StyledNavigation>
  )
}
