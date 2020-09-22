import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from '../Home';
import About from '../About.js';
import Employment from '../Employment.js';
import Events from '../Events.js';
import Involved from '../Involved.js';
import Programs from '../Programs.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav id="navbar">
            <ul className="nav">
              <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
              </li>
              <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
              </li>
              <li>
              <NavLink activeClassName="active" to="/programs">
                Programs
              </NavLink>
              </li>
              <li>
              <NavLink activeClassName="active" to="/events">
                Events
              </NavLink>
              </li>
              <li>
              <NavLink activeClassName="active" to="/participate">
                Get Involved
              </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/employment">
                  Employment
                </NavLink>
              </li>
            </ul>
          </nav>

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