import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDxUb6zW9njmUQuuht5CinCmgt6EQerT0",
  authDomain: "marvel-quiz-fa3e4.firebaseapp.com",
  projectId: "marvel-quiz-fa3e4",
  storageBucket: "marvel-quiz-fa3e4.appspot.com",
  messagingSenderId: "825272844978",
  appId: "1:825272844978:web:63efffd1c2f215d8ac7fab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const firestore = getFirestore();

export const user = (uid) => doc(firestore, `users/${uid}`);
