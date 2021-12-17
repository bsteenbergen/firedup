import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "./firebaseConfig.js"
import "./authService.css"

export function SignIn() {
  return (
    <button id = "SignIn" onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
      Sign In
    </button>
  )
}

export function SignOut() {
  return (
    <div id= "hello">
      Hello, {auth.currentUser.displayName} &nbsp;
      <button id = "SignOut" onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}
