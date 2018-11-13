import React, { Component } from 'react'
import HomeTable from './HomeTable'
import AwayTable from './AwayTable'
import SidebarLinks from './SidebarLinks'

class Homepage extends Component {
  render() {

    return(
        /*general home page container*/
        <div className="homepage container" class="row">
          {/*sidebar column container*/}
          <div class="col s2 red lighten-1 full-width">
            <SidebarLinks />
          </div>

          {/*rest of the page container*/}
          <div class="col s10 indigo lighten-5 full-width">
            {/*icon for the hometeam logo*/}
            <div class="col s4 offset-s1 center" classname="home-team icon">
              <img src="http://a.espncdn.com/i/teamlogos/nfl/500/gb.png" alt="team" width="350" class=" responsive-img" />
            </div>

            {/*icon for the away team logo*/}
            <div class="col s4 offset-s2 center " classname="away-team icon">
              <img src="http://a.espncdn.com/i/teamlogos/nfl/500/oak.png" alt="ATeam" width="350" class="responsive-img" />
            </div>

            {/*result box*/}
            <div class = "col s6 offset-s3 center card" classname="stats">
              <div class="card-content black-text">
              <span class="card-title">Result</span>
                <p>The Greenbay Packers will lead the Oakland Raiders 38-34 </p>
              </div>
            </div>

            {/*importing the hometeam drop down table*/}
            <div class="col s6"><HomeTable /></div>

            {/*importing the away team drop down table*/}
            <div class="col s6"><AwayTable /></div>

           </div>
        </div>


    )
  }
}

export default Homepage
