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

  useEffect(() => {
    fetchArticles().then(setArticles)
  }, [])

  function addArticle({ currentLoc, homeLoc }) {
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
        Home Location:
        <input type="text" name="Home Location" />
      </label>
      <label>
        Current Location:
        <input type="text" name="Current Location" />
      </label>
      <button onClick={() => setWriting(false)}> Submit </button>
      {writing ? (
        <LocationEntry addArticle={addArticle} />
      ) : (
        <Location article={article} />
      )}
    </div>
  )
}

export default Header
