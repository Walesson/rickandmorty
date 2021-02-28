import React from 'react'
import ImgLoading from '~/assets/images/Background-loading.png'
import { Wrapper, Container, Image, Label } from './styles'

export const Loading = ({ open, label = 'Loading' }) => (
  <Wrapper open={open}>
    {console.info('open: ', open)}
    <Container>
      <Image src={ImgLoading} />
      <Label bold>{label}</Label>
    </Container>
  </Wrapper>
)
