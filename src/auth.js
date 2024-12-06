import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";




//sign up 
export const signUp = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
}


//sign in
export const signIn = (email,password) => {
    signInWithEmailAndPassword(auth,email,password)
}


//sign out
export const logout = () => signOut(auth)

//monitor auth state

export const monitorAuthState = (callback) => onAuthStateChanged(auth,callback)

