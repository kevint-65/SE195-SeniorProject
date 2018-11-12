import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = function() {
  return (
    //nav bar links when user is signed in
    <ul className="right">
      <li><NavLink to='/'>Profile</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>MS</NavLink></li>
    </ul>
  )
}

export default SignedInLinks
