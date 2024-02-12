import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    HanPurple: '#5E2BFF',
    SpaceCadet: '#22223B',
    Ivory: '#FBFFF1',
    MaximumBluePurple: '#9F9FED',
    DeepPink: '#EC368D',
    LavenderBlue: '#D0D0F6',
    White: '#FFFFFF'
  },
  fonts: ['Karla', 'sans-serif'],
  fontSize: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme