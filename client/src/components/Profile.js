import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { user, results } from '../data/mockdata';

import Results from './Results';
import History from './History';

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
  componentDidMount() {
    fetch(`/api/user/${this.props.match.params.username}`)
    .then(res => res.json())
    .then(data => {
      // Update state with fetched data
      this.setState({ profile: data });
    })
    .catch(err => console.log(err))
  }
  render() {
    let profile = this.state.profile;

    return (
      <div className="container">
        <header className="text-center">
          <h2>{profile.first_name} {profile.last_name}</h2>
          <p className="ml-2 lead">{profile.tagline}</p>
        </header>
        <main>
          <h4>Biography</h4>
          <p>{profile.bio}</p>
          <Results data={results}/>
          <History data={user}/>
        </main>
      </div>
    );
  }
}

export default Profile;
