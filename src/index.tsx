import { SCMTheme } from "@hellofresh/scm-design-system";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import App from "./App";

const customTheme = createTheme(SCMTheme);

ReactDOM.render(
  <React.StrictMode>
    <StyledThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyledThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
