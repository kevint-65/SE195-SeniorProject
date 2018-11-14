import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = function(props) {
  //getting auth data from props
  const { auth, profile } = props;

  //if uid exists in auth then user is signed in, passing with it the user profile
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;

  return (
    //used materialize css library for these classes

    <nav className="nav-wrapper grey darken-3">
      <div className = "container">
        {/*link to the logo*/}
        <Link to ='/' className="brand-logo">NFL-Predictions</Link>

        {/*importing the navbar link, depending on if user is signed in or signed out*/}
        { links }

      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar)
