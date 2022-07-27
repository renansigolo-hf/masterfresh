import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth"

/** This represents Firebase auth provider */
export const googleProvider = {
  isAuthenticated: false,
  async signin() {
    const provider = new GoogleAuthProvider()

    const auth = getAuth()
    return signInWithPopup(auth, provider)
      .then(({ user }) => user)
      .catch((error) => {
        throw Error(`${error.code}: ${error.message}`)
      })
  },
  signout() {
    const auth = getAuth()
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  },
}
