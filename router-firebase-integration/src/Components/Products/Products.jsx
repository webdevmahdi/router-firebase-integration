import React from 'react'
import useFirebase from '../../hooks/useFirebase'

const Products = () => {
    let {user} = useFirebase();
  return (
    <div>
        <h2>{user ? user.displayName : "You have to sign in before watch the product page."}</h2>
    </div>
  )
}

export default Products