import { useState, useEffect } from "react"
import { useAuthentication } from "./authService.js"
import SafetyTips from "./SafetyTips.js"
import Home from "./Home.js"
import "./App.css"

export default function App() {
  const [eventData, setEventData] = useState([])
  const user = useAuthentication()
  const [page, setPage] = useState("home")

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      const { events } = await res.json()
      setEventData(events)
    }
    fetchEvents()
  }, [])

  return page === "home" ? (
    <div id="SafeSection">
      <button id="SafeButton" onClick={() => setPage("SafetyTips")}>
        {" "}
        SafetyTips{" "}
      </button>
      <Home eventData={eventData} user={user} />
    </div>
  ) : page == "SafetyTips" ? (
    <SafetyTips setPage={setPage} />
  ) : (
    "That's not supposed to happen"
  )
}

// Content created with reference to Traversy Media's video: https://www.youtube.com/watch?v=ontX4zfVqK8
