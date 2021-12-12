import { useState, useEffect } from "react"
import React from "react"
import "./Header.css"
import "./App.js"
import SafetyTips from "./SafetyTips"
import { db } from "./firebaseConfig.js"
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore"

export async function createArticle({ currentLoc, homeLoc }) {
  const data = { currentLoc, homeLoc, date: Timestamp.now() }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

const Header = () => {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [writing, setWriting] = useState(false)

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
      <a href="./SafetyTips">Safety Tips</a>
      <label>
        Home Location:
        <input type="text" name="Home Location" />
      </label>
      <label>
        Current Location:
        <input type="text" name="Current Location" />
      </label>
      <button onClick={() => setWriting(true)}> Submit </button>
    </div>
  )
}

export default Header
