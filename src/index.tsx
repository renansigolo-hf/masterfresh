import { initFirebase } from "@app/core/libs/firebase"
import { AppRoutes } from "@app/core/routes/AppRoutes"
import { SCMTheme } from "@hellofresh/scm-design-system"
import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material"
import { StrictMode } from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { AuthProvider } from "./app/core/auth/AuthProvider"
import { ApiProvider } from "./services/api/ApiProvider"

const customTheme = createTheme(SCMTheme as Theme)

initFirebase()

render(
  <StrictMode>
    <StyledThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <ApiProvider>
            <AuthProvider>
              <CssBaseline />
              <AppRoutes />
            </AuthProvider>
          </ApiProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyledThemeProvider>
  </StrictMode>,
  document.getElementById("root")
)
