import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="d-flex justify-between" id="site-header">
        <NavLink to="/" activeClassName="main-nav-selectd">Home</NavLink>
        <NavLink to="/register" activeClassName="main-nav-selectd">Register</NavLink>
        <NavLink to="/login" activeClassName="main-nav-selectd">Login</NavLink>
      </nav>
    );
  }
}

export default NavBar;
