import { useState, useEffect } from "react"
import FireMap from "./FireMap.js"

export default function App() {
  const [eventData, setEventData] = useState([])
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      // setLoading(true)
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      const { events } = await res.json()

      setEventData(events)
      // setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <FireMap eventData={eventData} />
    </div>
  )
}

// Content created with reference to Traversy Media's video: https://www.youtube.com/watch?v=ontX4zfVqK8
