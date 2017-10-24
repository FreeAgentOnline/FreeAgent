import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-between align-items-center" id="site-header">
        <NavLink id="headerLink" to="/">
          <img id="headerLogo" src={require("../images/freeagent_logo.png")} alt="FreeAgent"/>
          <h4><span className="fw300">Free</span>Agent</h4>
        </NavLink>
        <NavBar />
      </div>
    );
  }
}

export default Header;
