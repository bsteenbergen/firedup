import React, { useState } from "react"
import "./SafetyTips.css"
import Home from "./Home.js"

const SafetyTips = ({setPage}) => {
  
  return (
    <div className="safetytips">
      <h1>Stay Safe Friends</h1>
      <button onClick={() => setPage("home")}> Home </button>
      <pre>Tips go here</pre>
    </div>
  )
}

export default SafetyTips
