import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase'

const Header = () => {
    let {user, signOutUser} = useFirebase();
  return (
    <div>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/orders'>Orders</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <span>{user?.displayName && user.displayName}</span>
        {
            user?.uid ? <button onClick={signOutUser}>Sign out</button> : <NavLink to='/login'>Log in</NavLink>
 
        }
    </div>
  )
}

export default Header;