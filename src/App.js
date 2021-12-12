import { useState, useEffect } from "react"
import FireMap from "./FireMap.js"
import Header from "./Header.js"
import { SignIn, SignOut, useAuthentication } from "./authService.js"
import { fetchArticles, createArticle } from "./articleService.js"
import SafetyTips from "./SafetyTips.js"

export default function App() {
  const [eventData, setEventData] = useState([])
  const user = useAuthentication()
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events")
      const { events } = await res.json()

      setEventData(events)
    }
    fetchEvents()
  }, [])

  return (
    <div>
      {/* <SafetyTips /> */}
      {!user ? <SignIn /> : <SignOut />}
      {!user ? "" : <Header />}
      {!user ? "" : <FireMap eventData={eventData} />}
    </div>
  )
}

// Content created with reference to Traversy Media's video: https://www.youtube.com/watch?v=ontX4zfVqK8
