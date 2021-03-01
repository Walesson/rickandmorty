import React, { useState } from 'react'
import { Wrapper, Form, Input, Button } from './styles'

export const Search = ({ placeholder, onSubmit }) => {
  const [search, setSearch] = useState('')
  const submit = (event) => {
    event.preventDefault()
    onSubmit(search)
  }

  const handleChange = (value) => {
    setSearch(value.target.value)
  }

  return (
    <Wrapper>
      <Form onSubmit={submit}>
        <Input
          placeholder={placeholder}
          value={search}
          onChange={handleChange}
        />
        <Button label='Search' />
      </Form>
    </Wrapper>
  )
}
