import { createTheme } from "@material-ui/core";
import React from "react";

import { Button, SCMTheme } from "@hellofresh/scm-design-system";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
const scopedTheme = createTheme(SCMTheme);

<StyledThemeProvider theme={scopedTheme}>
  <Button color="primary" label="Go to login" variant="primary" />
</StyledThemeProvider>;

const TestElements = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
        {" "}
        Up
      </button>
      <button
        disabled
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        Down
      </button>

      <StyledThemeProvider theme={scopedTheme}>
        <Button color="primary" label="Go to login" variant="primary" />
      </StyledThemeProvider>
    </>
  );
};

export default TestElements;
