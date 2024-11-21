import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import unknownImage from '../assets/unknown.jpg'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user, setUser] = useState(null);
    const [updateUser, setUpdateUser] = useState(user)
    const [loader, setLoader] = useState(true);
    const [forgetEmail, setForgetEmail] = useState('')
    const [appointment, setAppointment] = useState([])
    // console.log("HHHHHHHHHHH", appointment)

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const emailPasswordSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateProfileData = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(() => {
                setUser((previous) => ({ ...previous, displayName: name, photoURL: photo }))
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                // console.log('Current USER - ON-Auth-state:', currentUser)
            }
            else {
                setUser(null)
                // console.log("NOT FOUND")
            }
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    // console.log("MAIN USER use-state", user)

console.log(import.meta.env.VITE_Ashr)



    const authInfo = {
        googleSignIn,
        githubSignIn,
        emailPasswordSignUp,
        emailPasswordSignIn,
        forgetPassword,
        user,
        setUser,
        loader,
        logOut,
        forgetEmail,
        setForgetEmail,
        updateProfileData,
        unknownImage,
        updateUser,
        setUpdateUser,
        appointment,
        setAppointment
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;