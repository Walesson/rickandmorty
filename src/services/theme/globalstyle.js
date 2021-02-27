import { createGlobalStyle } from 'styled-components'
import { AppTheme } from './AppTheme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: ${AppTheme.colors.light.main};
  }

  @media screen and (min-width: 250px) {
    html {
      font-size: calc(14px + 6 * ((100vw - 320px) / 680))
    }
  }

  @media screen and (min-width: 1000px) {
    html {
      font-size: 18px;
    }
  }
`
