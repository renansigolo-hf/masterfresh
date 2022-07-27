import { getAuth, User } from "firebase/auth"
import { ReactNode, useState } from "react"
import { googleProvider } from "./auth"
import { AuthContext } from "./AuthStatus"

export function AuthProvider({ children }: { children: ReactNode }) {
  getAuth()
  const [user, setUser] = useState<User | null>(null)

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
