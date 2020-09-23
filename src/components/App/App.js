import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../Home.js';
import Navbar from './Nav.js'
import About from '../About.js';
import Employment from '../Employment.js';
import Events from '../Events.js';
import Involved from '../Involved.js';
import Programs from '../Programs.js';

import logo from '../../assets/logo.png'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1 className="home-header">
          <img src={logo} />
            New Horizons in Autism, Inc.
          </h1>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/programs" component={Programs} />
            <Route path="/events" component={Events} />
            <Route path="/participate" component={Involved} />
            <Route path="/employment" component={Employment} />
            <Route
              render={function() {
                return <p>Page Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;