import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../data/user';

import '../styles/dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user
    }
  }
  // Fetch saved meets for user

  render() {
    return (
      <div className="container mt-3">
        <h2>Welcome back, {this.state.user.first_name}</h2>
        <p>
          <Link to={`/${this.state.user.username}`} className="btn btn-secondary mr-2">Profile</Link>
          <Link to="/settings" className="btn btn-secondary">Settings</Link>
        </p>
        <h3>Saved meets</h3>
        <div className="row font-weight-bold">
          <div className="col">
            Date
          </div>
          <div className="col">
            Name
          </div>
          <div className="col">
            Location
          </div>
          <div className="col">
            Information
          </div>
          <div className="col">
            Edit
          </div>
        </div>
        <div className="row">
          <div className="col">
            10/26/2017
          </div>
          <div className="col">
            The Iron Yard Demo Day
          </div>
          <div className="col">
            The Gathering Spot - Atlanta, GA
          </div>
          <div className="col">
            More information
          </div>
          <div className="col">
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </div>
        </div>
        <div id="dashBoxContainer" className="mt-3">
          <Link to="/dashboard/info" id="dashBasic" className="dashBox">
            <div className="">
              <div className="d-flex align-items-center">
                <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                <h2 className="">Basic Info</h2>
              </div>
              <p className="">Update your name, tagline, bio, and location</p>
            </div>
          </Link>
          <Link to="/dashboard/result" id="dashResults" className="dashBox">
          <div className="">
            <div className="d-flex align-items-center">
              <i className="fa fa-line-chart fa-lg fa-fw" aria-hidden="true"></i>
              <h2 className="">Results</h2>
            </div>
            <p className="">Track your results and display them on your profile</p>
          </div>
          </Link>
          <Link to="/dashboard/team" id="dashTeam" className="dashBox">
            <div className="">
              <div className="d-flex align-items-center">
                <i className="fa fa-history fa-lg fa-fw" aria-hidden="true"></i>
                <h2 className="">History</h2>
              </div>
              <p className="">Update and add to your team history</p>
            </div>
          </Link>
          <Link to="/dashboard/settings" id="dashSettings" className="dashBox">
            <div className="">
              <div className="d-flex align-items-center">
                <i className="fa fa-cog fa-lg fa-fw" aria-hidden="true"></i>
                <h2 className="">Settings</h2>
              </div>
              <p className="">Update email, reset password, and other settings</p>
            </div>
          </Link>
        </div>
        {/*<h4>Scheduled events</h4>*/}
        {/* Render Saved Meets */}
        {/*<h4>Starred events</h4>*/}
      </div>
    );
  }
}

export default Dashboard;
