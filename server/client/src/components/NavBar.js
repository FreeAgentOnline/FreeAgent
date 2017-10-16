import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="d-flex col-10 justify-content-end pr-0" id="site-nav">
        <NavLink to="/dashboard" className="ml-3" activeClassName="selected">Dashboard</NavLink>
        <NavLink to="/profile" className="ml-3" activeClassName="selected">Profile</NavLink>
        <NavLink to="/register" className="ml-3" activeClassName="selected">Register</NavLink>
        <NavLink to="/login" className="ml-3" activeClassName="selected">Login</NavLink>
      </nav>
    );
  }
}

export default NavBar;
