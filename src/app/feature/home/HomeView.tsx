import { Box } from "@hellofresh/scm-design-system"
import { EmptyView } from "../empty/EmptyView"

export function HomeView() {
  return (
    <Box style={{ textAlign: "center", height: "100%" }}>
      <h1>Welcome to the MasterFresh Competition!</h1>
      <EmptyView />
    </Box>
  )
}
