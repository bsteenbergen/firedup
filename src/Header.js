import { useState, useEffect } from "react"
import React from "react"
import "./Header.css"
import "./App.js"
import SafetyTips from "./SafetyTips"
import { db } from "./firebaseConfig.js"
import Location from "./Location.js"
import LocationEntry from "./LocationEntry.js"
import { fetchLocations, createLocation } from "./articleService"

const Header = () => {
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState(null)
  const [writing, setWriting] = useState(false)
  const [currentLoc, setCurrentLoc] = useState("")
  const [homeLoc, setHomeLoc] = useState("")

  useEffect(() => {
    fetchLocations().then(setLocations)
  }, [])

  function addLocation() {
    createLocation({ currentLoc, homeLoc }).then((location) => {
      setLocation(location)
      setLocations([location, ...locations])
      setWriting(false)
    })
  }
  return (
    <div id="head" className="header">
      <h1>FiredUp!</h1>
      <label>
        Current Location:
        <input
          type="text"
          name="Home Location"
          value={currentLoc}
          onChange={(e) => setCurrentLoc(e.target.value)}
        />
      </label>
      <label>
        Home Location:
        <input
          type="text"
          name="Current Location"
          value={homeLoc}
          onChange={(e) => setHomeLoc(e.target.value)}
        />
      </label>
      <button id="Submit" onClick={addLocation}>
        {" "}
        Submit{" "}
      </button>
      {writing ? (
        <LocationEntry addLocation={addLocation} />
      ) : (
        <Location location={location} />
      )}
    </div>
  )
}

export default Header
