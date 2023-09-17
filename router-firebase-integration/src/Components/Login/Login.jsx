import React from 'react'
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth'
import app from '../../firebase.init'

let auth = getAuth(app);


const Login = () => {
    const [signInWithGoogle ] = useSignInWithGoogle(auth);
  return (
    <div>
        <h1>Please log in</h1>
        <button onClick={()=>signInWithGoogle()} >Sign in with google</button>
        <br />
        <br />
        <input type="email" placeholder='Enter your Email' />
        <br />
        <input type="password" name="" id="" placeholder='Enter password' />
        <br />
        <input type="submit" value="Register" />
    </div>
  )
}

export default Login