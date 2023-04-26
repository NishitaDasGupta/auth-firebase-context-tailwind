import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const UserContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth);
    }
const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
}
    useEffect(()=> {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            console.log("auth state change . Current User: ",currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> {
            unSubscriber();
        }
    },[])
    const authInfo = { user,loading, createUser,signInUser,logOut,googleSignIn};
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;