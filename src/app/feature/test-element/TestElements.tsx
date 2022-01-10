// import { Button } from "@hellofresh/scm-design-system";
import React from "react";

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

      {/* <Button color="primary" label="Go to login" variant="primary" /> */}
    </>
  );
};

export default TestElements;
