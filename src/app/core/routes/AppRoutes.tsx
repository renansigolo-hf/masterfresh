import { HomeView } from "@app/feature/home/HomeView"
import { HowItWorksView } from "@app/feature/how-it-works/HowItWorksView"
import { LeaderboardView } from "@app/feature/leaderboard/LeaderboardView"
import { NotFoundView } from "@app/feature/not-found/NotFoundView"
import { RecipeUploadView } from "@app/feature/recipe-upload/RecipeUploadView"
import { SignInView } from "@app/feature/sign-in/SignInView"
import { VoteView } from "@app/feature/vote/VoteView"
import { Layout } from "@app/layout/Layout"
import { Route, Routes } from "react-router-dom"
import { AuthRequired } from "../auth/AuthRequired"

const authenticatedPages = {
  "/": <HomeView />,
  "/leaderboard": <LeaderboardView />,
  "/how-it-works": <HowItWorksView />,
  "/recipe-upload": <RecipeUploadView />,
  "/vote": <VoteView />,
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
