import { getApp, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

/** Initialize Firebase App */
export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD1fzECtlcdS5lNOowKOY6oQ9LY9jz8GJs",
    authDomain: "master-fresh.firebaseapp.com",
    projectId: "master-fresh",
    storageBucket: "master-fresh.appspot.com",
    messagingSenderId: "106667834491",
    appId: "1:106667834491:web:006e438d1c22d1844d36de",
    measurementId: "G-228BYZNK4Y",
  }

  try {
    return getApp()
  } catch {
    return initializeApp(firebaseConfig)
  }
}

// Retrieve the firebase app instance to a variable
const firebaseApp = initFirebase()

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp)
