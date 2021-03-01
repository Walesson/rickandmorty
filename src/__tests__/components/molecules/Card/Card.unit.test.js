import React from 'react'
import { render } from '@testing-library/react'
import { Card } from '~/components/molecules'

describe('Tests from Card', () => {
  test('render Card', () => {
    const { getByTestId } = render(
      <Card
        img='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        title='Rick'
        subTitle='Human'
      />
    )
    const element = getByTestId('card')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Rick')
    expect(element).toHaveTextContent('Human')
  })
})
