import React, {useState} from "react"
import "./SafetyTips.css"
import Home from "./Home.js"


const SafetyTips = (user,eventData ) => {
  const [page, setPage] = useState("SafetyTips")
  return (
    page === "home" ? 
    <Home eventData={eventData} user={user}/> :
    page == "SafetyTips" ? (
    <div className="safetytips">
      <h1>Stay Safe Friends</h1>
      <button onClick={() => setPage("home")}> Home </button>
    </div>) : 
    "That's not supposed to happen"
  )
}

export default SafetyTips
