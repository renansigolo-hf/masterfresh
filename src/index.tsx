import { initFirebase } from "@app/core/libs/firebase"
import { AppRoutes } from "@app/core/routes/AppRoutes"
import { SCMTheme } from "@hellofresh/scm-design-system"
import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { StrictMode } from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { AuthProvider } from "./app/core/auth/AuthProvider"
import { ApiProvider } from "./services/api/ApiProvider"

const customTheme = createTheme(SCMTheme as Theme)
const queryClient = new QueryClient()

initFirebase()

render(
  <StrictMode>
    <StyledThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <ApiProvider>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <AuthProvider>
                <CssBaseline />
                <AppRoutes />
              </AuthProvider>
            </QueryClientProvider>
          </ApiProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyledThemeProvider>
  </StrictMode>,
  document.getElementById("root")
)
