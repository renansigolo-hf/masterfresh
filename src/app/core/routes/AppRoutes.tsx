import { HomeView } from "@app/feature/home/HomeView"
import { SignInView } from "@app/feature/sign-in/SignInView"
import { Layout } from "@app/layout/Layout"
import { Route, Routes } from "react-router-dom"
import { RequireAuth } from "../auth/RequireAuth"

export const AppRoutes = () => {
  return (
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
  )
}
