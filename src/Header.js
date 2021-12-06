import React from "react"
import "./Header.css"
import SafetyTips from "./SafetyTips"

const Header = () => {
  return (
    <div className="header">
      <h1>FIREDUP!</h1>
      <a href="./SafetyTips">Safety Tips</a>
      <h2>Log In</h2>
    </div>
  )
}

export default Header
