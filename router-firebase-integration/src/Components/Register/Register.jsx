import React from 'react'
import './Register.css'
import useFirebase from '../../hooks/useFirebase'

const Register = () => {
    let { signInWithGoogle } = useFirebase();
  return (
    <div>
        <h1>Please sign up</h1>
        <button onClick={signInWithGoogle}>Sign in with google</button>
        <br />
        <input type="text" placeholder='Enter your name' />
        <br />
        <input type="email" name="" id="" placeholder='Enter your Email' />
        <br />
        <input type="password" name="" id="" placeholder='Enter password' />
        <br />
        <input type="submit" value="Register" />
    </div>
  )
}

export default Register