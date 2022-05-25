import { Container } from "@hellofresh/scm-design-system"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export function Layout() {
  return (
    <>
      <Navbar />

      <Container
        maxWidth="lg"
        style={{
          minHeight: "calc(100vh - 66px)",
          paddingTop: "56px",
          paddingBottom: "24px",
        }}
      >
        <Outlet />
      </Container>

      <Footer />
    </>
  )
}
