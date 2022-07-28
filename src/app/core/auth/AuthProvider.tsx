import { User } from "firebase/auth"
import { ReactNode, useState } from "react"
import { auth } from "../libs/firebase"
import { googleProvider } from "./auth"
import { AuthContext } from "./AuthStatus"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(auth.currentUser || null)

  const signin = async () => {
    const user = await googleProvider.signin()
    setUser(user)
  }

  const signout = async () => {
    return await googleProvider.signout()
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
