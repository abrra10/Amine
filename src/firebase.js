import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZlXpN4DPPX6PkntTv7W8WXaIRykWesBY",
  authDomain: "portfolio-af7b5.firebaseapp.com",
  projectId: "portfolio-af7b5",
  storageBucket: "portfolio-af7b5.appspot.com",
  messagingSenderId: "1036493271477",
  appId: "1:1036493271477:web:d8c7b58c1fa321e991a9fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Get a Firestore instance
const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { auth, db, storage };
export default app;
