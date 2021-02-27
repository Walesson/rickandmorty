import styled from 'styled-components'
import { Text as UnstyledText } from '~/components/atoms'
import { Logo as UnstyledLogo } from '~/assets/icons'
import BackgroundPage from '~/assets/images/Background.png'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background: url('${BackgroundPage}') center no-repeat;
  background-size: cover;
`

export const Overlay = styled.div`
  display: flex;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 970px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled(UnstyledText)`
  color: ${({ theme }) => theme.colors.light.main};
`

export const Logo = styled(UnstyledLogo)`
  margin-bottom: 47px;
  @media (max-width: 420px) {
    width: 240px;
    margin-bottom: 0;
  }
`
