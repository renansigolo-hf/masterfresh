import { Link } from "react-router-dom"

export function HomeView() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to the MasterFresh Competition!</h1>
      <Link to="/cards">Go to cards</Link>
    </div>
  )
}
