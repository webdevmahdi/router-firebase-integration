import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
        <h1>Please log in</h1>
        <button>Sign in with google</button>
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