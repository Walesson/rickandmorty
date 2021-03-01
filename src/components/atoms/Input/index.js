import styled from 'styled-components'

export const Input = styled.input`
  padding: 10px 14px;
  color: ${({ theme }) => theme.colors.secondary.main};
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  max-width: 196px;
  border: 2px solid ${({ theme }) => theme.colors.light.main};
  border-radius: 8px;
  background: transparent;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder.main};
  }

  @media (max-width: 420px) {
    max-width: 164px;
  }
`
