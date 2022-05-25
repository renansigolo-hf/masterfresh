import { SCMTheme } from "@hellofresh/scm-design-system"
import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material"
import { StrictMode } from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { App } from "./app/App"
import { AuthProvider } from "./app/core/auth/AuthProvider"
import { ApiProvider } from "./services/api/ApiProvider"

const customTheme = createTheme(SCMTheme as Theme)

render(
  <StrictMode>
    <StyledThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <ApiProvider>
            <AuthProvider>
              <CssBaseline />
              <App />
            </AuthProvider>
          </ApiProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyledThemeProvider>
  </StrictMode>,
  document.getElementById("root")
)
