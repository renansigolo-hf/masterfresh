import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Not Found</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
}
