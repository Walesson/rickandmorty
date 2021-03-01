import styled from 'styled-components'
import { Text } from '~/components/atoms'
import {
  ArrowLeft as UnstyledArrowLeft,
  ArrowRight as UnstyledArrowRight,
} from '~/assets/icons'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 267px;
  overflow: hidden;
  @media (max-width: 420px) {
    max-width: 48px;
  }
`

export const Label = styled(Text)`
  display: inline-block;
  font-size: 20px;
  line-height: 27px;
  margin: 0 15px;
  color: ${({ theme, active }) =>
    active ? theme.colors.secondary.main : theme.colors.text.dark};
  cursor: pointer;
`

export const ArrowLeft = styled(UnstyledArrowLeft)`
  margin-right: 48px;
  & path {
    stroke: ${({ active }) => (active ? 'white' : '#3e3e3e')};
  }
  cursor: pointer;
`

export const ArrowRight = styled(UnstyledArrowRight)`
  margin-left: 48px;
  & path {
    stroke: ${({ active }) => (active ? 'white' : '#3e3e3e')};
  }
  cursor: pointer;
`
