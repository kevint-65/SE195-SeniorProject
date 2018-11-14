import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Homepage from './components/homepage/Homepage'
import Predictor from './components/predictor/Predictor'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import TeamSummary from './components/teams/TeamSummary'
import AllTeams from './components/teams/AllTeams'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/teams' component={AllTeams} />
            <Route path='/team/:id' component={TeamSummary} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/predictor' component={Predictor} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
