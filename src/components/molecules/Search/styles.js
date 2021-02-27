import styled from 'styled-components'
import {
  Button as UnstyledButton,
  Input as UnstyledInput,
} from '~/components/atoms'

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  width: 296px;
  justify-content: space-between;
  margin-right: 16px;
`

export const Input = styled(UnstyledInput)``

export const Button = styled(UnstyledButton)``
