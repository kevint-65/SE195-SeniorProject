import React, { Component } from 'react'
import SidebarLinks from './SidebarLinks'

class Homepage extends Component {
  render() {
    return(
        /*general home page container*/
        <div className="row">

          {/*sidebar column container*/}
          <div className="col s2 red lighten-1 full-width">
            <SidebarLinks />
          </div>

            {/*rest of the page*/}
          <div className="col s9">
            <h2>This is our homepage, same for logged in or logged out users</h2>
          </div>
        </div>
    )
  }
}



export default Homepage
