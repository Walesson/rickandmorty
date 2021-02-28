import styled, { keyframes } from 'styled-components'
import { Text } from '~/components/atoms'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.8s linear;
  transition: visibility 1s linear;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  display: flex;
  width: 184px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.dark.light};
  z-index: 99;
`

export const Label = styled(Text)`
  display: flex;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.light.main};
  margin-top: 15px;
`
