
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAs6GXEtBsOQVgvY-K7l8UZDIrQ6n8tAxk",
  authDomain: "tiktok---jornada-5d5da.firebaseapp.com",
  projectId: "tiktok---jornada-5d5da",
  storageBucket: "tiktok---jornada-5d5da.appspot.com",
  messagingSenderId: "997322338100",
  appId: "1:997322338100:web:80815661da766c494c3f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;