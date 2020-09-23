import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Navbar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
    <div id="navbar">
      <Nav tabs className="justify-content-center">
          <NavItem className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/programs">Programs</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/events">Events</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/participate">Get Involved</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/employment">Employment</NavLink>
          </NavItem>
      </Nav>
    </div>
    );
}

export default Navbar;