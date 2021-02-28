import React from 'react'
import {
  Wrapper,
  Title,
  Type,
  About,
  TextHighlight,
  Desc,
  Persons,
  Residentes,
  WrapperResidents,
} from './styles'

export const InfoSession = ({
  title,
  about,
  type,
  textHighlight,
  desc,
  residents,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    {type && <Type>{type}</Type>}
    {about && <About>{about}</About>}
    {textHighlight && <TextHighlight>{textHighlight}</TextHighlight>}
    {desc && <Desc>{desc}</Desc>}
    {residents && (
      <WrapperResidents>
        <Persons /> <Residentes>{residents} residents</Residentes>
      </WrapperResidents>
    )}
  </Wrapper>
)
