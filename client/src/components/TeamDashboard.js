import React, { Component } from 'react';
import user from '../data/user';

import BackToDashboard from './BackToDashboard';
import TeamEdit from './TeamEdit';
import TeamNew from './TeamNew';

class TeamDashboard extends Component {
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
        <TeamEdit key={i} data={one} user={this.state.user} />
      )
    })
    return (
      <div className="container py-3">
        <BackToDashboard />
        <h2>Team history</h2>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {teamsRender}
          </tbody>
        </table>
        <TeamNew />
      </div>
    );
  }
}

export default TeamDashboard;
