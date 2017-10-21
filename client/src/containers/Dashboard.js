import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../data/user';


import '../styles/dashboard.css';

import ResultDashboard from '../components/ResultDashboard';

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
      <div className="container">
        <h2>Dashboard</h2>
        <p>
          <Link to={`/${this.state.user.username}`} className="btn btn-secondary mr-2">Profile</Link>
          <Link to="/settings" className="btn btn-secondary">Settings</Link>
        </p>
        <div id="dashBoxContainer" className="">
          <Link to="/dashboard/info" id="dashBasic" className="dashBox">
            <div className="">
              <h2 className="">Basic Info</h2>
              <p className="">Update your name, tagline, bio, and location</p>
            </div>
          </Link>
          <Link to="/dashboard/result" id="dashResults" className="dashBox">
          <div className="">
          <h2 className="">Results</h2>
          <p className="">Track your results and display them on your profile</p>
          </div>
          </Link>
          <Link to="/dashboard/team" id="dashTeam" className="dashBox">
            <div className="">
              <h2 className="">Team history</h2>
              <p className="">Update and add to your team history</p>
            </div>
          </Link>
          <Link to="/dashboard/settings" id="dashSettings" className="dashBox">
            <div className="">
              <h2 className="">Settings</h2>
              <p className="">Update email, reset password, and privacy settings</p>
            </div>
          </Link>
        </div>
        {/*<h4>Scheduled events</h4>*/}
        {/* Render Saved Meets */}
        {/*<h4>Starred events</h4>*/}
        <ResultDashboard />
      </div>
    );
  }
}

export default Dashboard;
