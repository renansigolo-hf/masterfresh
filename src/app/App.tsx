import { initFirebase } from "./core/libs/firebase"
import { AppRoutes } from "./core/routes/AppRoutes"

export function App() {
  initFirebase()

  return <AppRoutes />
}
