import { render } from "@testing-library/react"
import { HomeView } from "./HomeView"

it("home page render", () => {
  const { container } = render(<HomeView />)
  expect(container).toBeVisible()
})
