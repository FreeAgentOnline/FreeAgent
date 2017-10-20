import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { user, results } from '../data/mockdata';

import ProfileBasic from '../components/ProfileBasic';
import Results from '../components/Results';
import TeamProfile from '../components/TeamProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      results: '',
      teams: '',
      user
    }
  }
  render() {

    return (
      <div className="container">
        <ProfileBasic match={this.props.match}/>
        <Results data={results}/>
        <TeamProfile match={this.props.match}/>
      </div>
    );
  }
}

export default Profile;
