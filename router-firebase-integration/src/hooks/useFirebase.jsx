import React, { useEffect, useState } from 'react'
import app from '../firebase.init';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

let auth = getAuth(app);
let googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    let [user, setUser] = useState({});

    let signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(res => {
        let user = res.user;
        setUser(user);
        console.log(user)
    })
    .catch(err =>{
        console.log(err)
    })
    }

    useEffect( ()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[])
    
    let signOutUser = () => {
        signOut(auth)
        .then(()=>{})
    }

    return {
        user,
        signInWithGoogle,
        signOutUser
    }
}

export default useFirebase