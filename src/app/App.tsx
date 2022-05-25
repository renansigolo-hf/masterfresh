import { Route, Routes } from "react-router-dom"
import { RequireAuth } from "./core/auth/RequireAuth"
import { HomeView } from "./feature/home/HomeView"
import { SignInView } from "./feature/sign-in/SignInView"
import { Layout } from "./layout/Layout"

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomeView />
              </RequireAuth>
            }
          />

          {/* Route Paths */}
          <Route path="/signin" element={<SignInView />} />
        </Route>
      </Routes>
    </>
  )
}
