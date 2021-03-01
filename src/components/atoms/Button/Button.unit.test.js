import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Tests from button', () => {
  test('render button with label', () => {
    const { getByTestId } = render(<Button label='Test' onClick={() => null} />)
    const element = getByTestId('button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Test')
  })

  test('render button without props', () => {
    const { getByTestId } = render(<Button />)
    const element = getByTestId('button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('')
  })
})
