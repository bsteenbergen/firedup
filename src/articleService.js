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

export async function createArticle({ title, body }) {
  const data = { title, body, date: Timestamp.now() }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

export async function fetchArticles() {
  const snapshot = await getDocs(
    query(
      collection(db, "articles"),
      orderBy("currentLoc", "homeLoc"),
      limit(20)
    )
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}