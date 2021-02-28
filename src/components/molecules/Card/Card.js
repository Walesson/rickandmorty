import React from 'react'
import { Wrapper, Legend, Title, SubTitle } from './styles'

export const Card = ({ status, title, subTitle, img, onClick }) => (
  <Wrapper src={img} status={status} onClick={onClick}>
    <Legend>
      <Title bold>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Legend>
  </Wrapper>
)
