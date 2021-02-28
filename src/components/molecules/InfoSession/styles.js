import styled from 'styled-components'
import { People } from '~/assets/icons'
import { Text } from '~/components/atoms'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark.dark};
  padding: 10px;
  margin-top: 63px;
`

export const Title = styled(Text)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary.main};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.65em;
  margin-bottom: 17px;
`

export const Type = styled(Text)`
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text.subtle};
`

export const About = styled(Text)`
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.main};
`

export const TextHighlight = styled(Text)`
  font-size: 28px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.light.main};
`

export const Desc = styled(Text)`
  display: inline-block;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.main};
  margin-bottom: 12px;
`

export const Persons = styled(People)``

export const Residentes = styled(Type)`
  margin-left: 27px;
`

export const WrapperResidents = styled.div`
  display: flex;
  align-items: center;
`
