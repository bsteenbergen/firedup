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

export async function createLocation({ currentLoc, homeLoc }) {
  const data = { currentLoc, homeLoc }
  const docRef = await addDoc(collection(db, "locations"), data)
  console.log("Is this happening")
  return { id: docRef.id, ...data }
}

export async function fetchLocations() {
  const snapshot = await getDocs(
    query(
      collection(db, "locations"),
      orderBy("currentLoc", "homeLoc"),
      limit(20)
    )
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}
