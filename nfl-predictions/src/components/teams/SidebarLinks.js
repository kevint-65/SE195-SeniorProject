import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLinks = function() {
  return (
    <div className="sidebar">
      <ul className="center">
      {/*links in the sidebar*/}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/teams'>Team Stats</Link></li>
        <li><Link to='/predictor'>Predictor</Link></li>
        <li><Link to='/'>About Us</Link></li>
      </ul>
    </div>
  )
}

export default SidebarLinks
