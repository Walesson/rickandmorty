import { createGlobalStyle, keyframes } from 'styled-components'
import { AppTheme } from './AppTheme'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: ${AppTheme.colors.light.main};
  }

  body {
    font-family: 'Nunito', sans-serif;
  }
`
