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

const articles = {
  zRChIS1sqn3mMp78wLPL: {
    currentLoc: "Los Angeles",
    homeLoc: "Cupertino",
  },
}
export async function createArticle({ currentLoc, homeLoc }) {
  const data = { currentLoc, homeLoc }
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
