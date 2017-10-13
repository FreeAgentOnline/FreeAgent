import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-between" id="site-header">
        <NavLink to="/"><h4>FreeAgent</h4></NavLink>
        <NavBar />
      </div>
    );
  }
}

export default Header;
