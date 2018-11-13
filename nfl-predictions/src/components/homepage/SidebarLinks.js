import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLinks = function() {
  return (
    <div class="sidebar">
      <ul className="center">
      {/*links in the sidebar*/}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Team Stats</Link></li>
        <li><Link to='/'>Predictor</Link></li>
        <li><Link to='/'>About Us</Link></li>
      </ul>
    </div>
  )
}

export default SidebarLinks
