import React from 'react'
import { Wrapper, Label } from './styles'

export const Button = ({ label, onClick }) => (
  <Wrapper onClick={onClick}>
    <Label>{label}</Label>
  </Wrapper>
)
