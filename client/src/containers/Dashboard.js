import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { results } from '../data/mockdata';
import user from '../data/user';

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
        <h4>Scheduled events</h4>
        {/* Render Saved Meets */}
        <h4>Starred events</h4>
        <ResultDashboard />
      </div>
    );
  }
}

export default Dashboard;
