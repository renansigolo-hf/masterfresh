import environment from "@config/env.json"
import { AppFooter } from "@hellofresh/scm-design-system"

export function Footer() {
  return (
    <footer style={{ position: "relative", bottom: 0, width: "100vw" }}>
      <AppFooter
        version={environment.VERSION}
        menuItems={[
          {
            title: "For Development purposes only",
            href: "#",
            target: "_self",
          },
        ]}
      />
    </footer>
  )
}
