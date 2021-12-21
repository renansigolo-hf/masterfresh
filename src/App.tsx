import { Button } from "@hellofresh/scm-design-system";
import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button color="primary" label="Learn React" variant="primary" />
      </header>
    </div>
  );
}

export default App;
