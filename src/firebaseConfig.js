// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUfyeWL9wumZtddHbXHi7p3LkCrTvn7Rc",
  authDomain: "firedup-dd9a9.firebaseapp.com",
  projectId: "firedup-dd9a9",
  storageBucket: "firedup-dd9a9.appspot.com",
  messagingSenderId: "1035571829590",
  appId: "1:1035571829590:web:ed6dc988f898d361ef54f7",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
