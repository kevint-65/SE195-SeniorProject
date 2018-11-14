import React, { Component } from 'react'
import TeamTable from './TeamTable'
import SidebarLinks from './SidebarLinks'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class AllTeams extends Component {
  render() {

    //separate the teams data from this.props object
    const { teams } = this.props;
    const { auth } = this.props;

    //if uid in auth does not exist
    if(!auth.uid) {
      return <Redirect to='/signin' />
    }

    return(
        /*general home page container*/
        <div className="row">

          {/*sidebar column container*/}
          <div className="col s2 red lighten-1 full-width">
            <SidebarLinks />
          </div>

            {/*rest of the page*/}
          <div className="col s9">
            {/*importing the team drop down table and pass teams data to the table*/}
              <div className="team-table">
                <TeamTable teams={teams}/>
              </div>

            </div>

          </div>




    )
  }
}

//takes state of our store and maps it to the properties above
const mapStateToProps = (state) => {
  return {
    //gets state.team's object, and then that object's "teams" object
    teams: state.firestore.ordered.teams,
    auth: state.firebase.auth
  }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'teams', orderBy: ['location']} //specify which collection we want to sync
    ])
  )(AllTeams)
