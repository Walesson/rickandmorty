import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  width: 1034px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`
