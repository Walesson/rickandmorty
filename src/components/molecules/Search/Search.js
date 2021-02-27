import React from 'react'
import { Wrapper, Form, Input, Button } from './styles'

export const Search = ({ placeholder, onSubmit }) => {
  const submit = (event) => {
    event.preventDefault()
    onSubmit()
  }
  return (
    <Wrapper>
      <Form onSubmit={submit}>
        <Input placeholder={placeholder} />
        <Button label='Search' />
      </Form>
    </Wrapper>
  )
}
