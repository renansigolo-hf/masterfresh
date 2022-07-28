import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../libs/firebase"

/** This represents Firebase auth provider */
export const googleProvider = {
  isAuthenticated: false,

  async signin() {
    const provider = new GoogleAuthProvider()

    return signInWithPopup(auth, provider)
      .then(({ user }) => user)
      .catch((error) => {
        throw Error(`${error.code}: ${error.message}`)
      })
  },

  async signout() {
    try {
      await signOut(auth)
    } catch (error) {
      throw Error(String(error))
    }
  },
}
