import React from 'react'
import { render } from '@testing-library/react'
import { InfoSession } from '~/components/molecules'

describe('Tests from InfoSession', () => {
  test('render InfoSession', () => {
    const { getByTestId } = render(
      <InfoSession
        title='About'
        type='planet'
        textHighlight='Dimensions'
        desc='lorem ipsum'
        residents={48}
      />
    )
    const element = getByTestId('info-session')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('About')
    expect(element).toHaveTextContent('planet')
    expect(element).toHaveTextContent('Dimensions')
    expect(element).toHaveTextContent('lorem ipsum')
  })
})
