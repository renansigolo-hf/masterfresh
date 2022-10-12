import { CircularLoader } from "@hellofresh/scm-design-system"

export const Loading = () => {
  const styles = {
    minHeight: "80vh",
    display: "grid",
    placeContent: "center",
  }

  return (
    <div style={styles}>
      <CircularLoader />
    </div>
  )
}
