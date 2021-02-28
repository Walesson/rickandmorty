import styled from 'styled-components'

export const Text = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: ${({ big }) => (big ? 2.1 : 1.6)}em;
  line-height: 2.2em;
  font-weight: ${({ semibold, bold, bolder }) => {
    switch (true) {
      case bold:
        return 'bold'
      case semibold:
        return '600'
      case bolder:
        return 'bolder'
      default:
        return 'normal'
    }
  }};
  color: ${({ theme, success, primary, secondary }) => {
    switch (true) {
      case success:
        return theme.colors.success.main
      case primary:
        return theme.colors.primary.main
      case secondary:
        return theme.colors.secondary.main
      default:
        return theme.colors.dark.main
    }
  }};
`
