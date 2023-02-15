import React from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeProvider } from "../../src/theme"

export const themeDecorator = (Story) => {
  return (
    <ThemeProvider mode={useDarkMode() ? "dark" : "light"}>
      <Story />
    </ThemeProvider>
  )
}
