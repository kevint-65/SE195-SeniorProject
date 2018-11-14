import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = function() {
  return (
    //navbar links for when user is logged out
    <ul className="right">
      <li><NavLink to='/signup'>Signup</NavLink></li>
      <li><NavLink to='/signin'>Login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks
