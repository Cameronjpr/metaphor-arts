import React from 'react'
import Link from 'next/link'
import {
  StyledNavigation,
  ul,
  StyledNavigationLi,
} from './Navigation.styled.js'

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <StyledNavigationLi>
          <Link href="/">
            <a>Works</a>
          </Link>
        </StyledNavigationLi>
        <StyledNavigationLi>
          <Link href="/about">
            <a>About</a>
          </Link>
        </StyledNavigationLi>
        {process.env.NEXT_PUBLIC_CONTACT_EMAIL && (
          <StyledNavigationLi>
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Feedback from Metaphor Arts website`}
            >
              <a>Contact</a>
            </Link>
          </StyledNavigationLi>
        )}
      </ul>
    </StyledNavigation>
  )
}
