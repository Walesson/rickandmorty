import React from 'react'
import { Wrapper, Label } from './styles'

export const Button = ({ label = '', onClick = () => null }) => (
  <Wrapper onClick={onClick} data-testid='button'>
    <Label>{label}</Label>
  </Wrapper>
)
