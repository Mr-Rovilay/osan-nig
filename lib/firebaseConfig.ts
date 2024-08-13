import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "osan-ind.firebaseapp.com",
  projectId: "osan-ind",
  storageBucket: "osan-ind.appspot.com",
  messagingSenderId: "802828653881",
  appId: "1:802828653881:web:079b45d58ff4eec884c4e8"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
console.log('Firebase app initialized:', app);

const auth = getAuth(app);

// Set persistence to local storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase authentication persistence set to local storage.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

const firestore = getFirestore(app);
const storage = getStorage(app);

// Google Sign-In provider
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google:", result.user);
    // You can save user info or tokens here if needed
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};

export { app, auth, firestore, storage, signInWithGoogle };