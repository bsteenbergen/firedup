import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "./firebaseConfig.js"
import "./authService.css"
import fireplace from "./fireplace.gif"

export function SignIn() {
  return (
    <div>
      <button
        id="SignIn"
        onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
      >
        Sign In
      </button>
      <img src={fireplace} alt="a nice calming fire" id="fireplace" />
    </div>
  )
}

export function SignOut() {
  return (
    <div id="sign-out">
      Hello, {auth.currentUser.displayName} &nbsp;
      <button id="SignOut" onClick={() => signOut(auth)}>
        Sign Out
      </button>
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
