import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import user from '../data/user';

// Import components
import ProfileDashboard from '../components/ProfileDashboard';
import TeamDashboard from '../components/TeamDashboard';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Edit profile</h2>
        <ProfileDashboard />
        <TeamDashboard />
      </div>
    );
  }
}

export default Settings;
