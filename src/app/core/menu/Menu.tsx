import { Tabs } from "@hellofresh/scm-design-system"
import { useLocation, useNavigate } from "react-router-dom"

export const menuItems = [
  { id: "/home", label: "Home" },
  { id: "/cards", label: "Cards" },
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
