import React from 'react'
import './Home.css'
import useFirebase from '../../hooks/useFirebase'

const Home = () => {
    let { user } = useFirebase(); 
  return (
    <div>
        <h2>{user ? user.displayName : "Please sign in"}</h2>
    </div>
  )
}

export default Home