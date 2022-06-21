import { useAuth } from "@app/core/auth/AuthStatus"
import { AppBar, Container } from "@hellofresh/scm-design-system"
import { DisplayProps, PaddingProps } from "@mui/system"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"

export function Layout() {
  const { user } = useAuth()

  const appBarHeight = "56px"
  const style = {
    appBar: {
      display: !user && ("none" as DisplayProps["display"]),
    },
    container: {
      maxWidth: "100vw",
      minHeight: "calc(100vh - 66px)",
      textAlign: "center" as const,
      paddingTop: user && (appBarHeight as PaddingProps["paddingTop"]),
    },
  }

  return (
    <>
      <AppBar style={{ ...style.appBar }} />

      <Container style={{ ...style.container }}>
        <Outlet />
      </Container>

      <Footer />
    </>
  )
}
