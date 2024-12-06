import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey : "AIzaSyC4MSO0NHbBiCQ1ORy18t_9yWk3PYv5Ol4",
    authDomain : "moodtracker-e1dd6.firebaseapp.com",
    projectId : "moodtracker-e1dd6",
    storageBucket : "moodtracker-e1dd6.appspot.com",
    messagingSenderId : "890597785318",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)