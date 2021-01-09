import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import GalleryItem from './GalleryItem'

describe('GalleryItem', () => {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      title: 'Rocket',
      year: 2014,
      id: 'rocket',
    }
  })

  test('should render title', () => {
    console.log(expectedProps)
    const { getByText } = render(<GalleryItem work={expectedProps} />)

    const title = getByText(expectedProps.title)

    expect(title).toBeVisible()
  })
})
