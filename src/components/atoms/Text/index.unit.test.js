import React from 'react'
import { render } from '@testing-library/react'
import { Text } from './index'

describe('Tests from Texts', () => {
  test('render Text', () => {
    const text = render(<Text>Test</Text>)
    expect(text).toMatchSnapshot()
  })
})
