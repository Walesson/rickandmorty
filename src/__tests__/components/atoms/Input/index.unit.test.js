import React from 'react'
import { render } from '@testing-library/react'
import { Input } from '~/components/atoms'

describe('Tests from Input', () => {
  test('render input', () => {
    const input = render(<Input />)
    expect(input).toMatchSnapshot()
  })
})
