/* eslint-disable react/prop-types */
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In User
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // Data in User / onStateChange
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            5000
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSuscribe();
        }
    }, [])



    const authInfo = { createUser, signIn, signInWithGoogle, logOut, user, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;