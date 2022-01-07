import React from "react";
import { HomeView } from "./app/feature/home/HomeView";
import { Layout } from "./app/layout/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Layout>
        <HomeView />
      </Layout>
    </div>
  );
}

export default App;
