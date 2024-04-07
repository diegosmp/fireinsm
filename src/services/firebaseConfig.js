import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2rMEoNuFRLaI0EaGZEfJHxnwWUJxmB_Y",
  authDomain: "infinityrn-e3099.firebaseapp.com",
  projectId: "infinityrn-e3099",
  storageBucket: "infinityrn-e3099.appspot.com",
  messagingSenderId: "791188003329",
  appId: "1:791188003329:web:cc3c846bf9e59c682afe00"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)