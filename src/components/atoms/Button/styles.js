import styled from 'styled-components'
import { Text } from '../Text'

export const Wrapper = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.light.main};
  outline: none;
  background: transparent;
  cursor: pointer;
  box-sizing: border-box;
`

export const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.light.main};
  font-size: 16px;
  line-height: 22px;
`
