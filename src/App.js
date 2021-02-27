import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { Routes } from '~/routes'
import { HttpClient } from '~/services/API'
import { AppTheme, GlobalStyle } from '~/services/theme'

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <GlobalStyle />
    <ApolloProvider client={HttpClient}>
      <Routes />
    </ApolloProvider>
  </ThemeProvider>
)

export default App
