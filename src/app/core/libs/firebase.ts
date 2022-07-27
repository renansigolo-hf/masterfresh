import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

export const initFirebase = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  const firebaseConfig = {
    apiKey: "AIzaSyD1fzECtlcdS5lNOowKOY6oQ9LY9jz8GJs",
    authDomain: "master-fresh.firebaseapp.com",
    projectId: "master-fresh",
    storageBucket: "master-fresh.appspot.com",
    messagingSenderId: "106667834491",
    appId: "1:106667834491:web:006e438d1c22d1844d36de",
    measurementId: "G-228BYZNK4Y",
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  console.log("🚀 ~ file: App.tsx ~ line 23 ~ initFirebase ~ app", app)

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app)
  console.log("🚀 ~ file: firebase.ts ~ line 23 ~ initFirebase ~ auth", auth)
}
