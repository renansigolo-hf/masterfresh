import { useAuth } from "@app/core/auth/AuthStatus"
import { Button } from "@hellofresh/scm-design-system"
import { FlexboxProps } from "@mui/system"
import hfLogoUrl from "assets/hf-logo.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"

type User = {
  name: string
  email: string
}

export function SignInView() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: unkown object type
  const from = location.state?.from?.pathname || "/"
  const fakeUser = {
    name: "Renan Sigolo",
    email: "renan.sigolo@hellofresh.com.au",
  }

  function handleSubmit({ name }: User) {
    auth.signin(name, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true })
    })
  }

  const style = {
    section: {
      minHeight: "inherit",
      display: "grid",
      placeContent: "center",
      justifyContent: "center",
      alignContent: "center",
    },
    div: {
      backgroundColor: "white",
      padding: "64px 85px",
      display: "flex",
      flexDirection: "column" as FlexboxProps["flexDirection"],
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px",
    },
  }

  return (
    <section style={{ ...style.section }}>
      <div style={{ ...style.div }}>
        <img src={hfLogoUrl} height="80px" alt="HelloFresh Logo" />

        <h1 style={{ marginBottom: 0 }}>
          Welcome to HelloFresh Global Directory
        </h1>

        <p style={{ marginTop: 0, color: "#676767" }}>
          Sign in with your Microsoft Azure account
        </p>

        <Button
          fullWidth
          color="primary"
          label="Sign In with Azure"
          variant="primary"
          onClick={() => handleSubmit(fakeUser)}
        >
          <Link to="/signin" />
        </Button>
      </div>
    </section>
  )
}
