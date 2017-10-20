import React, { Component } from 'react';
import user from '../data/user';

import TeamEdit from './TeamEdit';
import TeamNew from './TeamNew';

class TeamSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
      teams: []
    }
  }
  // Fetch teams for user
  componentDidMount() {
    fetch(`/api/team/user/${this.state.user.username}`)
    .then(res => res.json())
    .then(data => {
      // Update state with fetched data
      this.setState({ teams: data });
    })
    .catch(err => console.log(err))
  }

  render() {
    let teamsRender = this.state.teams.map((one, i) => {
      return (
        <li key={i} className="list-group-item">
          <TeamEdit data={one} user={this.state.user} />
        </li>
      )
    })
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>Results</h4>
          </li>
          {teamsRender}
          <li className="list-group-item">
            <TeamNew />
          </li>
        </ul>
      </div>
    );
  }
}

export default TeamSettings;
