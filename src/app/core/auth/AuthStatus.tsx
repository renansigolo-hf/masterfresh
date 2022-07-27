import { User } from "firebase/auth"
import { createContext, useContext } from "react"

interface AuthContextType {
  user: User | null
  signin: () => Promise<void>
  signout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>(null as never)

export function useAuth() {
  return useContext(AuthContext)
}
