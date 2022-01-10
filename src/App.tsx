import { Routes, Route } from "react-router-dom";
import { HomeView } from "./app/feature/home/HomeView";
import { LoginView } from "./app/feature/login/LoginView";
import { NotFound } from "./app/feature/not-found/NotFound";
import { Layout } from "./app/layout/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
