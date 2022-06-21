import { CardsView } from "@app/feature/cards/CardsView"
import { SignInView } from "@app/feature/sign-in/SignInView"
import { Layout } from "@app/layout/Layout"
import { Route, Routes } from "react-router-dom"
import { useAuth } from "../auth/AuthStatus"

const authenticatedPages = {
  // "/": <HomeView />,
  "/": <CardsView />,
  "/cards": <CardsView />,
}

export const AppRoutes = () => {
  const { user } = useAuth()
  console.log("🚀 ~ file: AppRoutes.tsx ~ line 15 ~ AppRoutes ~ user", user)

  return (
    <Routes>
      <Route element={<Layout />}>
        {user ? (
          Object.entries(authenticatedPages).map(([path, component]) => (
            <Route key={path} element={component} path={path} />
          ))
        ) : (
          <Route element={<SignInView />} path="/" />
        )}
      </Route>
    </Routes>
  )
}
