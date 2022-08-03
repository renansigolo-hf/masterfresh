import { Tabs } from "@hellofresh/scm-design-system"
import { useLocation, useNavigate } from "react-router-dom"

export const menuItems = [
  { id: "/", label: "Home" },
  { id: "/vote", label: "Vote" },
  { id: "/leaderboard", label: "Leaderboard" },
  { id: "/how-it-works", label: "How It Works" },
  { id: "/recipe-upload", label: "Recipe Upload" },
]

export const Menu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Tabs
      color="secondary"
      value={pathname}
      tabs={menuItems}
      onTabChange={(menuId: string) => navigate(menuId)}
    />
  )
}
