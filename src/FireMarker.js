import React from "react"
import icon from "./fire.png"
import "./FireMarker.css"

const FireMarker = ({ lat, lng }) => {
  return (
    <div className="marker">
      <img
        src={icon}
        alt="location where there is a fire"
        className="location-marker"
      />
    </div>
  )
}

export default FireMarker
