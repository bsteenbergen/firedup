import { useState, useEffect } from "react"
import React from "react"
import "./Header.css"
import "./App.js"
import SafetyTips from "./SafetyTips"
import { db } from "./firebaseConfig.js"
import Location from "./Location.js"
import LocationEntry from "./LocationEntry.js"
import { fetchArticles, createArticle } from "./articleService"
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore"

// export async function createArticle({ currentLoc, homeLoc }) {
//   const data = { currentLoc, homeLoc, date: Timestamp.now() }
//   const docRef = await addDoc(collection(db, "articles"), data)
//   return { id: docRef.id, ...data }
// }

// export async function fetchArticles() {
//   const snapshot = await getDocs(
//     query(
//       collection(db, "articles"),
//       orderBy("currentLoc", "homeLoc"),
//       limit(20)
//     )
//   )
//   return snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }))
// }

const Header = () => {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)
  const [currentLoc, setCurrentLoc] = useState("")
  const [homeLoc, setHomeLoc] = useState("")

  useEffect(() => {
    fetchArticles().then(setArticles)
  }, [])

  function addArticle() {
    createArticle({ currentLoc, homeLoc }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }
  return (
    <div className="header">
      <h1>FIREDUP!</h1>
      {/* <a href="./SafetyTips">Safety Tips</a> */}
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
      <button onClick={addArticle}> Submit </button>
      {writing ? (
        <LocationEntry addArticle={addArticle} />
      ) : (
        <Location article={article} />
      )}
    </div>
  )
}

export default Header
