import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import user from '../data/user';

// Import components
import ProfileEdit from '../components/ProfileEdit';
import TeamNew from '../components/TeamNew';

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
        <ProfileEdit />
        <TeamNew />
      </div>
    );
  }
}

export default Settings;
