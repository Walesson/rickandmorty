// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { ThemeConsumer } from 'styled-components'
import { AppTheme } from './services/theme'

ThemeConsumer._currentValue = AppTheme
