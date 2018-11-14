import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    //nav bar links when user is signed in
    <ul className="right">
      <li><NavLink to='/'>Profile</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>MS</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
