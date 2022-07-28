import { CardsView } from "@app/feature/cards/CardsView"
import { HomeView } from "@app/feature/home/HomeView"
import { NotFoundView } from "@app/feature/not-found/NotFoundView"
import { SignInView } from "@app/feature/sign-in/SignInView"
import { Layout } from "@app/layout/Layout"
import { Route, Routes } from "react-router-dom"
import { AuthRequired } from "../auth/AuthRequired"

const authenticatedPages = {
  "/home": <HomeView />,
  "/cards": <CardsView />,
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Private Routes */}
        {Object.entries(authenticatedPages).map(([path, component]) => (
          <Route
            key={path}
            path={path}
            element={<AuthRequired>{component}</AuthRequired>}
          />
        ))}

        {/* Public Routes */}
        <Route path="/signin" element={<SignInView />} />

        {/* Fallback Routes */}
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  )
}
