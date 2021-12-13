import React from "react"
import FireMap from "./FireMap.js"
import Header from "./Header.js"
import { SignIn, SignOut } from "./authService.js"
// import "./Home.css"

export default function Home({ eventData, user }) {
  return (
    <div>
      {!user ? <SignIn /> : <SignOut />}
      {!user ? "" : <Header />}
      {!user ? "" : <FireMap eventData={eventData} />}
    </div>
  )
}
