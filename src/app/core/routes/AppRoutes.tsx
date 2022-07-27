import { CardsView } from "@app/feature/cards/CardsView"
import { HomeView } from "@app/feature/home/HomeView"
import { SignInView } from "@app/feature/sign-in/SignInView"
import { Layout } from "@app/layout/Layout"
import { Route, Routes } from "react-router-dom"
import { useAuth } from "../auth/AuthStatus"

const authenticatedPages = {
  "/": <HomeView />,
  "/cards": <CardsView />,
}

export const AppRoutes = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route element={<Layout />}>
        {!user ? (
          <Route element={<SignInView />} path="/" />
        ) : (
          Object.entries(authenticatedPages).map(([path, component]) => (
            <Route key={path} element={component} path={path} />
          ))
        )}
      </Route>
    </Routes>
  )
}
