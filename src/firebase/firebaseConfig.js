import { initializeApp } from "firebase/app";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPnY3JlvoMss0JkNlcqqcAH4D553jUzc8",
  authDomain: "search-image-jmsh.firebaseapp.com",
  projectId: "search-image-jmsh",
  storageBucket: "search-image-jmsh.appspot.com",
  messagingSenderId: "668235301489",
  appId: "1:668235301489:web:b37a21e43773f104e3d1d0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

// Sign in using a popup.
const provider = new GoogleAuthProvider();

export const signUpWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    return res;
  } catch (err) {
    return err;
  }
};
