import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = function() {
  return (
    //used materialize css library for these classes

    <nav className="nav-wrapper grey darken-3">
      <div className = "container">
      {/*link to the logo*/}
        <Link to ='/' className="brand-logo">NFL-Predictions</Link>


        {/*importing the navbar links, both for now (testing)*/}
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar
