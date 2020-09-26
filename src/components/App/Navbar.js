import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import logo from '../../assets/logo.png'

class Navbar extends React.Component {
  render() {
const styles={
    navbar: {
      flexDirection: 'row-reverse'
    },
    logo: {
      marginRight: '5px'
    }
}


    return (
      <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <a class="navbar-brand" href="/">
          <img src={logo} width="30" height="30" alt="NHA logo" style={styles.logo} loading="lazy" />
          New Horizons in Autism Inc.
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse" style={styles.navbar}>
          <Nav class="navbar-nav mr-auto">
            <NavItem className="nav-item">
              <NavLink className="nav-link" activeClassName="active" href="/">Home</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" activeClassName="active" href="/about">About</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" activeClassName="active" href="/programs">Programs</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" activeClassName="active" href="/events">Events</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" activeClassName="active" href="/participate">Get Involved</NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink className="nav-link" activeClassName="active" href="/employment">Employment</NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>      





    );
  };
};

export default Navbar;