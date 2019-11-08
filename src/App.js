import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from "./Components/layout/Navbar"
import User from "./Components/Users/User"
import Alert from "./Components/layout/Alert"
import Home from './Components/pages/Home'
import About from "./Components/pages/About"
import NotFound from './Components/pages/NotFound'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'


const App =  () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className = "App">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
  </GithubState>
  );
}

export default App;
